interface NisCtrlScope extends ng.IScope {
    newTodo:string;

}

interface NisCtrlRouteParams {
    status:string;
}

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
nisApp.controller('NisCtrl', function NisCtrl($scope:NisCtrlScope, $routeParams:NisCtrlRouteParams) {

    $scope.newTodo = ""
});