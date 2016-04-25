exports.menuController = function ($scope) {

    $scope.data = "menu";

    setTimeout(function () {
        $scope.$emit('menuController');
    }, 0);

};