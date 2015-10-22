/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
nisApp.controller('AppCtrl', function AppCtrl($scope, $state) {
    $scope.Title = "AppCtrlテストのタイトル";
    console.log("AppCtrl");
    //$state.go("home");
    //$state.go("home.home2");
    //$state.go("home2");
});
