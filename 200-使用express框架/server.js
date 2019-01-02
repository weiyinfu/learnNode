var app = require('./app'),
    debug = require('debug')('demo:server'),
    port = 80

app.listen(port, function () {
    debug('server listening on port ' + port);
})