chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({isEnabled: true}, function () {
        console.log("Kget Capture Installed & Enabled Successfully");
    });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.storage.sync.set({isEnabled: request.isEnabled}, function () {
        //
    });
    sendResponse({message: "Kget Capture Disabled Successfully"});
});

chrome.downloads.onCreated.addListener(function (downloadItem) {
    chrome.storage.sync.get('isEnabled', function (data) {
        if (data.isEnabled) {
            chrome.downloads.cancel(downloadItem.id, function () {
                chrome.downloads.erase({id: downloadItem.id}, function () {
                    chrome.runtime.sendNativeMessage('com.kget.capture',
                        {text: downloadItem.url},
                        function (response) {
                            console.log(response);
                        });
                });
            });
        }
    });
});