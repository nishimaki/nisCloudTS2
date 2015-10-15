/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
nisApp.controller('HeaderCtrl', function HeaderCtrl($scope, $routeParams) {
    $scope.Title = "テストのタイトル";
});
