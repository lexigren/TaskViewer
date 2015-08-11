describe('The test filter', function () {

    var timeFilter;

    beforeEach(function () {
        module('app');
        inject(function($injector){
            timeFilter = $injector.get('$filter')('timeFilter');
        });
    });

    it('should convert number to formatted time string', function () {
        var number=4.5;
        var result = timeFilter(number);
        expect(result).to.be.equal('4 hours and 30 minutes');
    });

    it('shoud return message if empty input', function () {
        var number=undefined;
        var result = timeFilter(number);
        expect(result).to.be.equal('No data!');
    });
});