# MoTSeRMa
Modbus TCP Srever and RTU master (TCP to RTU Gateway) implemented in node.js

## Installation

### Dependencies
- node.js v4+
- serialport v3+

### Procedure
- install node.js (https://nodejs.org/dist/v4.4.5/) according to their instructions
- download zip (https://codeload.github.com/AutomationEngineer/MoTSeRMa/zip/master) and unpack it to the folder of your choice
- cd to selected folder and run npm install (this will download and (compile if needed) serialport to node_modules)
- adopt MoTSeRMa.js to your environment (especially rtuMaster's options portName)

## Running
- cd to folder with MoTSeRMa.js
- run node MoTSeRMa
- add to autostart if you want, but be sure working folder == where MoTSeRMa.js resides
- see console output and try to connect your modbus TCP client
