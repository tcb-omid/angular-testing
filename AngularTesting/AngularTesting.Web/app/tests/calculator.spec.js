(function() {
    describe('calculator', function () {
        var calculator, httpBackend;
        //2.
        beforeEach(function () {
            //3. load the module.
            module('app');

            inject(function ($httpBackend, _calculator_) {
                calculator = _calculator_;
                httpBackend = $httpBackend;
            });
        });

        afterEach(function () {
        });

        //6.
        it('ServiceTestSpec', function () {

            var returnedPromise = calculator.add(2, 1);
            expect(returnedPromise).toEqual(3);

        });
    });
})();