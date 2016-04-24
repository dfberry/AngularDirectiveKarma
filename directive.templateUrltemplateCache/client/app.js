var controllers = require('./controllers');
var directives = require('./directives');
var _ = require('underscore');

// this never changes
angular.module('templates', []);

// templates added as dependency
var components = angular.module('app', ['ng','templates']);

_.each(controllers, function(controller, name) {
  components.controller(name, controller);
});

_.each(directives, function(directive, name) {
  components.directive(name, directive);
});

require('./templates')
