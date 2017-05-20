'use strict';

angular.module('diveLog.view1', ['ui.router'])

.config(['$routeProvider', function($stateProvider) {
    $stateProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);