let isChecked = document.getElementById("isKgetEnabled");
chrome.storage.sync.get('isEnabled', function (data) {
    isChecked.checked = data.isEnabled;
});

isChecked.addEventListener('change', function () {
    chrome.storage.sync.get('isEnabled', function (data) {
        chrome.runtime.sendMessage({isEnabled: !data.isEnabled}, function (response) {
            console.log('Message Received: ' + response.message);
        });
    });
});