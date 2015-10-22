// ---------------------------------
// コントローラー HeaderCtrl
// ---------------------------------
interface HeaderCtrlScope extends ng.IScope {
    Title:string;
    Message:string;
    HeaderMenuClick():void;

}

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
nisApp.controller('HeaderCtrl', function HeaderCtrl($scope:HeaderCtrlScope, $state) {

    $scope.Title = "テストのタイトル";
    $scope.Message = "message";
    
	console.log("HeaderCtrl");
    
    $scope.HeaderMenuClick = function(){
	    console.log("HeaderMenuClick");
       $scope.Message = "Hello World";
    }

});