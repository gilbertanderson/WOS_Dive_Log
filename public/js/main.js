/**
 * Created by gilbertanderson on 6/12/17.
 */

angular.module('diveLog', ['ui.router'])

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
                        'sidenav@': {templateUrl: './templates/assets/sidenav.html'}
                    }
                }
            ];

            states.forEach(function (state) {
                $stateProvider.state(state);
            });
        }
    ]);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    // document.body.style.backgroundColor = "white";
}