# Kget-Capture
Kget Chrome Browser Extension to capture downloads and download using Kget Download Manager.

# Prerequisites
* Kget
* Python 3

## Install Kget
```
sudo apt update
sudo apt install kget 
```

# How to install the Extension
### Download the repository
```
git clone https://github.com/Kunal-Deshpande/Kget-Capture.git
```

### Copy com.kget.capture.json and kgetcapture.py to the prefered path:

1. Linux (system-wide)
- Google Chrome: /etc/opt/chrome/native-messaging-hosts/
- Chromium: /etc/chromium/native-messaging-hosts/
2. Linux (user-specific, default path)
- Google Chrome: ~/.config/google-chrome/NativeMessagingHosts/
- Chromium: ~/.config/chromium/NativeMessagingHosts/

### Provide executable permissions to kgetcapture.py

### Load the Unpacked Extension to Chrome
1. Go to chrome://extensions/
2. Turn on Developer Mode
3. Click Load Unpacked and select folder repository folder

### Change allowed_origins in com.kget.capture.json to chrome-extension://ID/ where ID refers to the Extension ID in Chrome
