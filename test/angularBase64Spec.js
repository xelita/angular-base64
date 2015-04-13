describe("base64Module Tests Suite", function () {

    // base64Service

    describe("base64Service Tests", function () {

        var base64Service;

        beforeEach(function () {
            module('base64Module');
            inject(function (_base64Service_) {
                base64Service = _base64Service_;
            });
        });

        it("encode", function () {
            expect(base64Service.encode('this is a test')).toBe('dGhpcyBpcyBhIHRlc3Q=');
        });

        it("decode", function () {
            expect(base64Service.decode('dGhpcyBpcyBhIHRlc3Q=')).toBe('this is a test');
        });
    });
});