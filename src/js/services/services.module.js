/* Services */

import {HelloService}     from './hello.service';

export default angular.module('app.services', [])
    .service('helloService',['$http',HelloService])
