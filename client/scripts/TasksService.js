angular.module('app').factory('TasksService', function($resource,$q,$filter) {
    var resource=$resource('/data/tasks.json/:id', { id: '@_id' }, {});

    var tasks;
    
    return {
        query: function () {

            var dfd = $q.defer();

            if(tasks){
                dfd.resolve(tasks);
            }else {
                resource.query().$promise.then(function (result) {
                    tasks = result;
                    dfd.resolve(tasks);
                }, function (reason) {
                    var errorText="";
                    if(reason.message) errorText+=reason.message;
                    if(reason.statusText) errorText+=reason.statusText;
                    dfd.reject('Error: ' + errorText);
                });
            }
            return dfd.promise;
        },
        getById: function (id) {
            var dfd = $q.defer();

            this.query().then(function (result) {
                    var task = $filter('filter')(result, {"id": parseInt(id)}, true);
                    if (task && task.length) {
                        dfd.resolve(task[0]);
                    }else{
                        dfd.reject("No such task!");
                    }
                },function (reason) {
                    dfd.reject(reason);
                }
            );

            return dfd.promise;

        }
    }
});