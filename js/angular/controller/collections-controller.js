angular.module('grsApp').controller('collectionsController', collectionsCtrl);

function collectionsCtrl($rootScope, collectionsService, logger) {
  var vm = this;
  vm.items = [];

  activate();

  function activate() {
    return getCollections().then(function() {
      logger.info('Retrieved collections');
    });
  }

  function getCollections() {
    return collectionsService.getAllCollectionList($rootScope.currentUser.username).then(function(response) {
      if (response.status == 200) {
        vm.items = response.data.data;
      } else if (response.status == 403) {
        // TODO auth timeout broadcast
      } else {
        // TODO server unavailable
      }
    });
  }
}