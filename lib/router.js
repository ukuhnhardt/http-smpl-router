var url = require('url')
    , _ = require('underscore');

var routes = [];
var register = function (method, path, handler) {
    routes.push({method: method, path: path, handler: handler});
};

module.exports = {
    get: function (path, handler) {
        register('GET', path, handler);
    },
    head: function (path, handler) {
        register('HEAD', path, handler);
    },
    post: function (path, handler) {
        register('POST', path, handler);
    },
    put: function (path, handler) {
        register('PUT', path, handler);
    },
    delete: function (path, handler) {
        register('DELETE', path, handler);
    },
    connect: function (path, handler) {
        register('CONNECT', path, handler);
    },
    options: function (path, handler) {
        register('OPTIONS', path, handler);
    },
    TRACE: function (path, handler) {
        register('TRACE', path, handler);
    },
    route: function (req, resp) {
        var path = url.parse(req.url, true).pathname
        var method = req.method;
        var routesToProcess = _.filter(routes, function (r) {
            return method === r.method && path === r.path;
        });
        if (!routesToProcess || routesToProcess.length == 0) {
            console.log(404);
            resp.writeHead(404);
            resp.end();
            return;
        }
        _.each(routesToProcess, function (r) {
            r.handler(req, resp);
        });
    }
}
