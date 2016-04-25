describe('userDirective', function() {
  var scope;

  beforeEach(angular.mock.module("app"));
  
  beforeEach(angular.mock.module('ngMockE2E'));

  beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));
    
  it('should exist', inject(function ($compile) {
    element = angular.element('<user></user>');
    compiledElement = $compile(element)(scope);
 
    scope.$digest();

    var dataFromHtml = compiledElement.find('.user').text().trim();
    var dataFromScope = scope.data;
    
    console.log(dataFromHtml + " == " + dataFromScope);

    expect(dataFromHtml).to.equal(dataFromScope);
  }));
});