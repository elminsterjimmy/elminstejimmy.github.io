angular.
  module('grsApp').factory('collectionsService', collectionService);

function collectionService(requestService, logger, common) {
  logger.info("init collection service.");

  var collectionServices = common.activedApp.Service.Collection;

  var service = {
      getAllCollectionList: getAllCollectionList,
      markRating: markRating,
      markFavorite: markFavorite
  };
  return service;

  function getAllCollectionList(username) {
    logger.info("getAllCollectionList");
    var service = collectionServices.GetUserCollection;
    return requestService.request(common.activedApp.BaseUrl + sprintf(service.Url, username), service.Method);
  }
  
  function markRating(user, item) {
    logger.info("markRating");
  }
  
  function markFavorite(user, item) {
    logger.info("markFavorite");
  }
}