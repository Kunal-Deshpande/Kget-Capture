chrome.runtime.onInstalled.addListener(function () {

});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    sendResponse({farewell: "message"});
});

chrome.downloads.onCreated.addListener(function (downloadItem) {
    chrome.downloads.cancel(downloadItem.id, function () {
        chrome.downloads.erase({id: downloadItem.id}, function () {
            chrome.runtime.sendNativeMessage('com.kget.capture',
                {text: downloadItem.url},
                function (response) {
                    console.log(response);
                });
        });
    });
});