/// <reference path="../../typings/tsd.d.ts" />

'use strict';

import * as angular from 'angular';
import {appName, externalModules} from './constants';

angular.module(appName, externalModules);

import './routes';
import './directives/index';
import './views/index';
