/// <reference path="../../typings/tsd.d.ts" />

'use strict';

import angular = require('angular');
import {appName, externalModules} from './constants';

angular.module(appName, externalModules);

import './routes';
import './directives/index';
import './views/index';
