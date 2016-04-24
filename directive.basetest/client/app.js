var controllers = require('./controllers');
var directives = require('./directives');
var _ = require('underscore');

var components = angular.module('app', ['ng']);

_.each(controllers, function(controller, name) {
  components.controller(name, controller);
});

_.each(directives, function(directive, name) {
  components.directive(name, directive);
});
