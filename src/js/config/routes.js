export function routes($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            template: "<hello></hello>"
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
}
