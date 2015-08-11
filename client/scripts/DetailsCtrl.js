angular.module('app').controller('DetailsCtrl',function($scope,$routeParams, $location,TasksService) {

    TasksService.getById($routeParams.id).then(function (result) {
            $scope.task=result;
        },function (reason) {
            $scope.errorMessage=reason;
            $location.path("/");
        }
    );

});