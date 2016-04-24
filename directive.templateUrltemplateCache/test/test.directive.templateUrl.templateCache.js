describe('menuDirective', function() {
  var mockScope;
  var compileService;
  var template;

  beforeEach(angular.mock.module("app"));
  
  beforeEach(angular.mock.module('ngMockE2E'));

  beforeEach(preloadTemplate('/templates/menu.html'));

  beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));
    
  it('should exist', inject(function ($compile, $templateCache) {
    element = angular.element('<system></system>');
    compiledElement = $compile(element)(scope); 

    template = $templateCache.get('/templates/system.html'); 
 
    scope.$digest();

    var dataFromHtml = compiledElement.find('.menu').text().trim();
    var dataFromScope = scope.data;
    
    console.log(dataFromHtml + " == " + dataFromScope);

    expect(dataFromHtml).to.equal(dataFromScope);
  }));
});