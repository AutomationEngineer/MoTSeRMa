var TCPServer = require('./tcpServer');
var RTUMaster = require('./rtuMaster');

var rtuMaster = new RTUMaster({
    portName:'COM1',
    portSetup:{
        baudrate: 9600
    }}, function(){
    var tcpServer = new TCPServer({}, function(request, callback){
        rtuMaster.request(request, callback);
    });
});


