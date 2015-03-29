var  expect        = require('expect.js')
    ,httpMocks     = require('node-mocks-http')
    ;


describe("Router", function () {
    var router;
    beforeEach(function (done) {
        router = require('../lib/router');
        done();
    });
    it('get /hello', function (done) {

        var request = {url: '/hello', method: 'GET'};
        var response = httpMocks.createResponse();
//      var response = ServerResponse();

        router.get('/hello', function (req, resp) {
            expect(resp).to.be(response);
            done();
        });
        router.route(request, response);
    });
    it('don\'t get /helloworld', function (done) {

        var request = {url: '/helloworld', method: 'GET'};
        var response = httpMocks.createResponse();

        router.get('/hello', function (req, resp) {
            return;
        });
        router.route(request, response);
        expect(response.statusCode).to.be(404);
        done();
    });
});
