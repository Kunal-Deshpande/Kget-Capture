// Get Checkbox with id isKgetEnabled
let isChecked = document.getElementById("isKgetEnabled");

// Set the checkbox according to Storage variable isEnabled
chrome.storage.sync.get('isEnabled', function (data) {
    isChecked.checked = data.isEnabled;
});

// Change Storage variable isEnabled on checkbox event change
isChecked.addEventListener('change', function () {
    chrome.storage.sync.get('isEnabled', function (data) {
        chrome.runtime.sendMessage({isEnabled: !data.isEnabled}, function (response) {
            console.log('Message Received: ' + response.message);
        });
    });
});