angular.module('esblighting.controllers', [])

.controller('TodayCtrl', function($scope, esblightingSchedule) {
    $scope.esblightingSchedule = [];
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
    var template = '<ion-popover-view><ion-header-bar> <h1 class="title">About</h1></ion-header-bar> <ion-content><div class="padding"><p>ESB Lighting provides a schedule of the upcoming (and past) Empire State Building lightings.</p><p><a href="http://esblighting.org">esblighting.org</a> pulls the schedule from the ESB\'s official website and provides a service consumed by this app.</p><p>For email alerts head over to <a href="https://ifttt.com/recipes/149276-if-the-empire-state-building-is-coming-up-with-an-interesting-color-combination-email-me">IFTTT</a>.</p><p>Michael<br />info@esblighting.org<br /><a href="http://esblighting.org">esblighting.org</a></p></div></ion-content></ion-popover-view>';
    
    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
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
