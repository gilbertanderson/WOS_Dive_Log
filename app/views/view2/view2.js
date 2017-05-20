'use strict';

angular.module('diveLog.view2', ['ui.router'])

.config(['$routeProvider', function($stateProvider) {
    $stateProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);