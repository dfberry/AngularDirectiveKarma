
exports.userController = function ($scope) {

    $scope.data = "user";

    setTimeout(function () {
        $scope.$emit('userController');
    }, 0);

};