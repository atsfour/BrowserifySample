'use strict';

import * as angular from 'angular';
import {appName, prefix} from '../../constants';

class MainCtrl {
  public comment: string;

  constructor() {
    this.comment = 'world';
  }
}

class MainDifinition {
  public static ddo(): ng.IDirective {
    return {
      restrict: 'E',
      controller: MainCtrl,
      controllerAs: 'main',
      scope: {},
      templateUrl: 'templates/views/main.html'
    };
  }
}

let app = angular.module(appName);
app.directive(prefix + 'Main', MainDifinition.ddo);
