describe('TasksService', function (){
	  var TasksService;

	  beforeEach(function (){

	    module('app');

	    inject(function(_TasksService_) {
            TasksService = _TasksService_;
	    });
	  });

        describe('functionsPresence', function() {
            it('should have query function', function () {
                expect(angular.isFunction(TasksService.query)).to.be.true;
            });

            it('should have getById function', function () {
                expect(angular.isFunction(TasksService.getById)).to.be.true;
            });
        });

        describe("functionReturns",function(){
            it('query result should be array or error description text', function () {
                var queryResult = TasksService.query();
                queryResult.then(function (result) {
                        expect(angular.isArray(result)).to.be.true;
                    },function (reason) {
                        expect(angular.isString(reason)).to.be.true;
                    }
                );
            });

            it('getById result should be object or error description text', function () {
                var getByIdResult = TasksService.getById();
                getByIdResult.then(function (result) {
                        expect(angular.isObject(result)).to.be.true;
                    },function (reason) {
                        expect(angular.isString(reason)).to.be.true;
                    }
                );
            });
        });
	});