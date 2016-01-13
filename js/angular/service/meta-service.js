angular.
  module('grsApp').factory('metaService', metaService);

function metaService(requestService, logger, common) {
  
  logger.info("init common service.");
  
  var service = {
      getMetaData : getMetaData
  };
  return service;

  function getMetaData() {
    var service = common.activedApp.Service.Meta;
    return requestService.request(common.activedApp.BaseUrl + service.Url, service.Method);
  }
}