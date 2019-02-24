chrome.runtime.onInstalled.addListener(function () {

});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.runtime.sendNativeMessage('com.kget.capture',
        {text: "Hello"},
        function (response) {

        });
    sendResponse({farewell: "message"});
});

chrome.downloads.onCreated.addListener(function (downloadItem) {
    chrome.runtime.sendNativeMessage('com.kget.capture',
        {text: downloadItem.url},
        function (response) {
            chrome.downloads.cancel(downloadItem.id, function () {
                chrome.downloads.erase({id: downloadItem.id}, function () {
                });
            });
        });
});