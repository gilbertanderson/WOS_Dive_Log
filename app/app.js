'use strict';

// Declare public level module which depends on views, and components
angular.module('diveLog', [
  'ui.router',
  'diveLog.view1',
  'diveLog.view2',
  'diveLog.version'
]).

config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/view1');
    var states = [
        {
            name: 'view1',
            url: '/view1',
            templateUrl: 'views/view1/view1.html'
        },
        {
            name: 'view2',
            url: '/view2',
            templateUrl: 'views/view2/view2.html'
        }];

    states.forEach(function (state) {
        $stateProvider.state(state);
    });
}]);