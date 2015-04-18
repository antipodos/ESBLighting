angular.module('esblighting.controllers', [])

.controller('TodayCtrl', function($scope, esblightingSchedule, $state) {
    $scope.doRefresh = function() {
        refreshItems();
        $scope.$broadcast('scroll.refreshComplete');
    };
    
    function refreshItems(){
        esblightingSchedule.getToday().then(function(data){
                $scope.item = data;
                $scope.$broadcast('scroll.refreshComplete');
            },
            function(errorMessage){
                $scope.error = errorMessage;
            }
        );
    };

    refreshItems();
})

.controller('AllCtrl', function($scope, esblightingSchedule) {
    $scope.esblightingSchedule = [];
    $scope.doRefresh = function() {
        refreshItems();
        $scope.$broadcast('scroll.refreshComplete');
    };
    
    function refreshItems(){
        esblightingSchedule.getAllItems().then(function(data){
                $scope.esblightingSchedule = data;
                $scope.$broadcast('scroll.refreshComplete');
            },
            function(errorMessage){
                $scope.error = errorMessage;
            }
        );
    };
    refreshItems();
})

.controller('UpcomingCtrl', function($scope, esblightingSchedule) {
    $scope.esblightingSchedule = [];
    $scope.doRefresh = function() {
        refreshItems();
        $scope.$broadcast('scroll.refreshComplete');
    };
    
    function refreshItems(){
        esblightingSchedule.getUpcomingItems().then(function(data){
                $scope.esblightingSchedule = data;
                $scope.$broadcast('scroll.refreshComplete');
            },
            function(errorMessage){
                $scope.error = errorMessage;
            }
        );
    };
    refreshItems();
})

.controller('AboutPopover', function($scope, $ionicPopover) {   
    $scope.popover = $ionicPopover.fromTemplateUrl('templates/about.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
    
    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
    $scope.closePopover = function() {
        $scope.popover.hide();
    };
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
})

.controller('ESBDetailCtrl', function($scope, $stateParams, esblightingSchedule) {
    function refreshItems(){
        esblightingSchedule.get($stateParams.date).then(function(data){
                $scope.item = data;
            },
            function(errorMessage){
                $scope.error = errorMessage;
            }
        );
    };
    refreshItems();
})

.controller('ShareCtrl', function($scope, $cordovaSocialSharing) {
    $scope.share = function (item) {
        if (!window.cordova) {
            // twitter link
            window.open("https://twitter.com/intent/tweet?text=The%20Empire%20State%20Building%20is%20coming%20up%20with%20an%20interesting%20lighting%20on%20" + item.date + ".%20Get%20the%20details%20at%20http://esblighting.org.");
        } else {
            // sharing plugin
            $cordovaSocialSharing.share('The Empire State Building is coming up with an interesting lighting on ' + item.date + '. Get the details at http://esblighting.org', 'Interesting Empire State Building lighting', null, 'http://esblighting.org');
        }
    }
})

