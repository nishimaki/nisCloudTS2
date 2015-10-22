// ---------------------------------
// コントローラー AppCtrl
// ---------------------------------
interface AppCtrlScope extends ng.IScope {
    Title:string;

}

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
nisApp.controller('AppCtrl', function AppCtrl($scope:AppCtrlScope, $state) {

    $scope.Title = "AppCtrlテストのタイトル"
    
	console.log("AppCtrl");
    
    //$state.go("home");
    //$state.go("home.home2");
    //$state.go("home2");
    
    
});