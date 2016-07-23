import 'angular';
import 'angular-route';
import {routes} from './js/config/routes';

import services   from './js/services/services.module';
import directives from './js/directives/directives.module';
import components from './js/components/components.module';
angular.module('myApp', [
        'ngRoute',
        services.name,
        directives.name,
        components.name
    ])
    .config(['$routeProvider', '$locationProvider',routes]);
// bootstrap angular
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
