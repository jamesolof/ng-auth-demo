namespace application {

    configurator.$inject = [
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider'
    ];

    export function configurator($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $stateProvider
            .state('Home', {
                url: '/',
                templateUrl: 'js/views/home.view.html',
                controller: "homeController",
                controllerAs: 'vm'
            })
            .state('Login', {
                url: '/login',
                templateUrl: 'js/views/login.view.html',
                controller: controllers.loginController,
                controllerAs: 'vm'
            }).state('Register', {
                url: '/register',
                templateUrl: 'js/views/register.view.html',
                controller: controllers.registerController,
                controllerAs: 'vm'
            })
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
}