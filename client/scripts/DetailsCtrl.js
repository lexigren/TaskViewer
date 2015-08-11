angular.module('app').controller('DetailsCtrl',function($scope,$routeParams, $location,TasksService) {

    TasksService.getById($routeParams.id).then(function (result) {
            console.log("OKAY");
            $scope.task=result;
        },function (reason) {
            console.log("ERROR");
            $scope.errorMessage=reason;
            $location.path("/");
        }
    );

});