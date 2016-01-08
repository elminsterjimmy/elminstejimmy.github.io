angular.module('grsApp').controller('mainController', mainCtrl).controller('metaController', metaCtrl);

function mainCtrl($rootScope, $scope, $state, $stateParams, $uibModal, common, EventConstants, userService, logger) {

  activate();

  function activate() {
    userService.getUserInfo().then(function(response) {
      if (200 === response.status) {
        $rootScope.loggedIn = true;
        // only invoke children
        $scope.$broadcast(EventConstants.authAvailableEvent);
      } else {
        $rootScope.loggedIn = false;
      }
    });
  }

  $scope.$on(EventConstants.serverUnavailableEvent, handleServerUnavailable);
  $scope.$on(EventConstants.authAvailableEvent, handleAuthAvailable);
  $scope.$on(EventConstants.authUnavailableEvent, handleAuthUnavailable);

  function handleAuthAvailable() {
    $rootScope.loggedIn = true;
    common.reloadState($state, $stateParams);
  }

  function handleServerUnavailable() {

  }

  function handleAuthUnavailable() {
    $rootScope.loggedIn = false;
    $uibModal.open({
      animation: true,
      templateUrl: './tpl/dialog/authUnavailable.html'
    });
    common.reloadState($state, $stateParams);
  }
}

function metaCtrl(metaService, logger) {
  var vm = this;
  vm.meta = [];

  activate();

  function activate() {
    return getMeta().then(function() {
      logger.info('Got meta data.');
    });
  }

  function getMeta() {
    return metaService.getMetaData().then(function(data) {
      vm.meta = data;
      return vm.meta;
    });
  }
}