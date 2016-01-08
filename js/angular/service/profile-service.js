angular.module('grsApp').factory('profileService', profileService);

function profileService(requestService, common, logger, URLConstants, Static) {
  logger.info("init profile service.");

  var service = {
    "getCurrentUserProfile" : getCurrentUserProfile,
    "getAllLocations" : getAllLocations,
    "getUserProfile" : getUserProfile,
    "updateUserProfile" : updateUserProfile,
  };

  function getCurrentUserProfile() {
    var service = common.activedApp.Service.Profile;
    return requestService.request(common.activedApp.BaseUrl + service.Url, service.Method);
  }

  function getUserProfile() {
  }

  function updateUserProfile() {

  }

  function getAllLocations() {
    return requestService.request(Static.BaseUrl + Static.json.locations);
  }

  return service;
}