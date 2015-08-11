angular.module('app').controller('MainCtrl',function($scope,TasksService) {

    TasksService.query().then(function (result) {
            $scope.tasks=result;
        },function (reason) {
            $scope.errorMessage=reason;
        }
    );

});