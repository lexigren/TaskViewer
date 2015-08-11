
describe('Controller: DetailsCtrl', function() {

    var scope, TasksService, $location;

    beforeEach(function() {
        var mockTasksService = {};
        module('app', function($provide) {
            $provide.value('TasksService', mockTasksService);
        });

        inject(function($q) {
            mockTasksService.tasks = [
                {
                    id: 0,
                    name: 'Task One'
                },
                {
                    id: 1,
                    name: 'Task Two'
                },
                {
                    id: 2,
                    name: 'Task Three'
                }
            ];

            mockTasksService.getById = function(id) {
                var dfd = $q.defer();
                if(id<this.tasks.length) {
                    dfd.resolve(this.tasks[id]);
                }else{
                    dfd.reject("No such task!");
                }
                return dfd.promise;
            };
        });
    });

    describe("correct id test",function() {

        beforeEach(inject(function ($controller, $rootScope, _$location_, _TasksService_) {
            scope = $rootScope.$new();
            $location = _$location_;
            TasksService = _TasksService_;

            $controller('DetailsCtrl', {
                $scope: scope,
                $routeParams: {id: 1},
                $location: $location,
                TasksService: TasksService
            });

            scope.$digest();
        }));

        it('should contain second task on startup', function () {

            var object2BeEqual = {
                id: 1,
                name: 'Task Two'
            };

            expect(angular.equals(scope.task, object2BeEqual)).to.be.true;
        });
    });

    describe("wrong id test",function() {

        beforeEach(inject(function ($controller, $rootScope, _$location_, _TasksService_) {
            scope = $rootScope.$new();
            $location = _$location_;
            TasksService = _TasksService_;

            $controller('DetailsCtrl', {
                $scope: scope,
                $routeParams: {id: 3},
                $location: $location,
                TasksService: TasksService
            });

            scope.$digest();
        }));

        it('should redirect to home page', function () {

            //var object2BeEqual = {
            //    id: 1,
            //    name: 'Task Two'
            //};
            //
            //expect(angular.equals(scope.task, object2BeEqual)).to.be.true;

            //spyOn($location, 'path');
            //expect($location.path).toHaveBeenCalledWith('/');

            console.log($location.path());

            //expect($location.path()).to.be('/new/path');

            expect(angular.equals($location.path(),"/")).to.be.true;

        });
    });

});