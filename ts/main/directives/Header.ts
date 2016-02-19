/// <reference path="../../../typings/angularjs/angular-route.d.ts" />

'use strict';

import * as angular from 'angular';
import {appName, prefix} from '../constants';

class HeaderDifinition {
  public static ddo(): ng.IDirective {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'templates/directives/header.html'
    };
  }
}

let app = angular.module(appName);
app.directive(prefix + 'Header', HeaderDifinition.ddo);
