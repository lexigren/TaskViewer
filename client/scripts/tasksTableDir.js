angular.module("app").directive('tasksTable',function($location){
    return {
        restrict: 'E',
        templateUrl:'/partials/tasks-table.html',
        link: function (scope,element,attrs) {
            scope.seeDetails= function (task) {
                $location.path("/tasks/"+task.id);
            }
        }
    };
});