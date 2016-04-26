describe('menuDirective', function() {
  var mockScope;
  var compileService;
  var template;

  beforeEach(angular.mock.module("app"));
  
  beforeEach(angular.mock.module('ngMockE2E'));

  beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));
    
  it('should exist', inject(function ($compile, $templateCache) {
    element = angular.element('<system></system>');
    compiledElement = $compile(element)(scope); 

    // APP - app.js used templates dependency which loads template
    // into templateCache
    // TEST - this test pulls template from templateCache 
    template = $templateCache.get('/templates/system.html'); 
 
    scope.$digest();

    var dataFromHtml = compiledElement.find('.menu').text().trim();
    var dataFromScope = scope.data;
    
    console.log(dataFromHtml + " == " + dataFromScope);

    expect(dataFromHtml).to.equal(dataFromScope);
  }));
});