'use strict';

import * as angular from 'angular';
import {appName} from './constants';

let app = angular.module(appName);


  app.config(($locationProvider: ng.ILocationProvider) => {
    $locationProvider.html5Mode(true);
  })


  .config(($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider
      .when('/', {
        template: '<sample-main></sample-main>'
      });
  });
