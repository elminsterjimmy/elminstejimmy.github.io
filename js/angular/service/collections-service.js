angular.
  module('grsApp').factory('collectionsService', collectionService);

function collectionService(requestService, logger, common) {
  logger.info("init collection service.");
  
  var service = {
      getAllCollectionList: getAllCollectionList,
      markRating: markRating,
      markFavorite: markFavorite
  };
  return service;

  function getAllCollectionList(user) {
    logger.info("getAllCollectionList");
    var service = common.activedApp.Service.Collection;
    return requestService.request(common.activedApp.BaseUrl + service.Url, service.Method);
  }
  
  function markRating(user, item) {
    logger.info("markRating");
  }
  
  function markFavorite(user, item) {
    logger.info("markFavorite");
  }
}