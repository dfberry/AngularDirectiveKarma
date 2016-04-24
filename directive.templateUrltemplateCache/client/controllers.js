exports.systemController = function ($scope) {

    $scope.data = "System";

    setTimeout(function () {
        $scope.$emit('systemController');
    }, 0);

};
