/**
 * Created by gilbertanderson on 6/12/17.
 */

angular.module('diveLog', ['ui.router'])

    .controller('MainCtrl', function ($scope) {
    })

    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            let states = [
                {
                    name: 'home',
                    url: '/home',
                    views: {
                        'nav@': {templateUrl: './templates/assets/nav.html'},
                        'body@': {templateUrl: './templates/assets/body.html'},
                        'footer@': {templateUrl: './templates/assets/footer.html'},
                        'sidenav@': {templateUrl: './templates/assets/sidenav.html'},
                        'signup@': {templateUrl: './templates/assets/signup.html'}

                    }
                }
            ];

            states.forEach(function (state) {
                $stateProvider.state(state);
            });
        }
    ]);