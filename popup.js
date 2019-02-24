let isChecked = document.getElementById("isKgetEnabled");

isChecked.addEventListener('change', function () {
    chrome.runtime.sendMessage({msg: 'hello'}, function (response) {
        console.log('Message Sent ' + response.farewell);
    });
});