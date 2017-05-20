'use strict';

angular.module('myApp.version', [
  'diveLog.version.interpolate-filter',
  'diveLog.version.version-directive'
])

.value('version', '0.1');
