angular.module('esblighting.services', [])

.factory('esblightingSchedule', function($http, $q) {
    return {
        apiPath:'http://esblighting.org/service/?o=json&',
        
        getItems: function(apiPath){
            var deferred = $q.defer();
            $http.get(apiPath).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                deferred.reject("An error occured while fetching the schedule");
            });
            return deferred.promise;
        },
        getAllItems: function() {
            return this.getItems(this.apiPath + "s=all");
        },
        getUpcomingItems: function() {
            return this.getItems(this.apiPath + "s=upcoming&sort=asc");
        },
        getToday: function() {
            return this.getItems(this.apiPath + "s=today");
        },
        get: function(specificDate) {
            return this.getItems(this.apiPath + "s=" + specificDate);
        }
    };
});