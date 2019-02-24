#!/usr/bin/env python3

import sys
import struct
import json
import os

try:
    def readMessage():
        raw_length = sys.stdin.buffer.read(4)
        message_length = struct.unpack('@I', raw_length)[0]
        json_message = sys.stdin.buffer.read(message_length).decode('utf-8')
        message = json.loads(json_message)
        os.system('kget --showDropTarget ' + message['text'])


    def sendMessage():
        message = "Received Download URL"
        json_message = json.dumps(message).encode('utf-8')
        message_length = struct.pack('@I', len(json_message))
        sys.stdout.buffer.write(message_length)
        sys.stdout.buffer.write(json_message)
        sys.stdout.buffer.flush()


    while True:
        readMessage()
        sendMessage()

except:
    f = open("/home/kunal/Programs/Extensions/kget_extension/testerr.txt", "w")
    f.write("error")
    f.close()
