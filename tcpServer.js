var Net = require('net');

function TCPModbusServerRaw(options, callbackRequest) {
    var context = this;
    context.port = options.port?options.port:502;

    Net.createServer(function (socket) {

        socket.namePad = ('                          ' + socket.remoteAddress + ":" + socket.remotePort).slice(-26);

        console.log(new Date().toISOString() + socket.namePad + ' client connected');

        socket.on('data', function (request) {
            console.log(new Date().toISOString() + socket.namePad + '->' + request.toString('hex'));
            var tcpHeader = request.slice(0,6);
            callbackRequest(request.slice(6,request.length), function(reply) {
                var buf = Buffer.concat([tcpHeader, reply]);
                buf.writeUInt16BE(reply.length, 4);
                socket.write(buf);
                console.log(new Date().toISOString() + socket.namePad + '<-' + buf.toString('hex'));
            });
        });

        socket.on('end', function () {
            console.log(new Date().toISOString() + socket.namePad + ' client disconnected');
        });

        socket.on('close', function () {
            console.log(new Date().toISOString() + socket.namePad + ' connection closed');
        });

        socket.on('error', function () {
            console.log(new Date().toISOString() + socket.namePad + ' cocket error');
        });

        socket.on('timeout', function () {
            console.log(new Date().toISOString() + socket.namePad + ' connection timeout');
            socket.destroy();
        });

        socket.setTimeout(10000);

    }).listen(context.port);

    console.log(new Date().toISOString() + ' Modbus TCP server is waiting for connections at 502 port');
}

module.exports = TCPModbusServerRaw;
