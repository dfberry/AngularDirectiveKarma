describe('menuDirective', function() {
  var mockScope;
  var compileService;
  var template;

  beforeEach(angular.mock.module("app"));
  
  beforeEach(angular.mock.module('ngMockE2E'));

  // Karma test setup - load template
  // Mocha beforeEach - load http response for template into templateCache
  // IT test - grabs template from templateCache as part of directive compilation
  beforeEach(preloadTemplate('/templates/menu.html'));

  beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));
    
  it('should exist', inject(function ($compile) {
    element = angular.element('<menu></menu>');
    compiledElement = $compile(element)(scope);
 
    scope.$digest();

    var dataFromHtml = compiledElement.find('.menu').text().trim();
    var dataFromScope = scope.data;
    
    console.log(dataFromHtml + " == " + dataFromScope);

    expect(dataFromHtml).to.equal(dataFromScope);
  }));
});