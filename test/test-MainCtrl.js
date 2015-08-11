
describe('Controller: MainCtrl', function() {
    var scope, TasksService;

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

            mockTasksService.query = function() {
                var dfd = $q.defer();
                dfd.resolve(this.tasks);
                return dfd.promise;
            };
        });
    });

    beforeEach(inject(function($controller, $rootScope, _TasksService_) {
        scope = $rootScope.$new();
        TasksService = _TasksService_;

        $controller('MainCtrl', {$scope: scope, TasksService: TasksService });

        scope.$digest();
    }));

    it('should contain all the tasks at startup', function() {

        var array2BeEqual=[
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

        expect(angular.equals(scope.tasks, array2BeEqual)).to.be.true;
    });

});