angular.module('grsApp').factory('profileService', profileService);

function profileService(requestService, common, logger, URLConstants, Static) {
  logger.info("init profile service.");

  var profileServices = common.activedApp.Service.Profile;

  var service = {
    "getUserProfile" : getUserProfile,
    "getAllLocations" : getAllLocations,
    "updateUserBasicProfile" : updateUserBasicProfile,
    "updateUserGameProfile" : updateUserGameProfile,
    "updateUserPassword" : updateUserPassword,
  };

  function getUserProfile(username) {
    var service = profileServices.GetUserProfile;
    return requestService.request(common.activedApp.BaseUrl + sprintf(service.Url, username), service.Method);
  }

  function updateUserBasicProfile(data) {
    var service = profileServices.UpdateUserBasicProfile;
    return requestService.request(common.activedApp.BaseUrl + sprintf(service.Url, data.username), service.Method, data);
  }

  function updateUserGameProfile(data) {
    var service = profileServices.UpdateUserGameProfile;
    return requestService.request(common.activedApp.BaseUrl + sprintf(service.Url, data.username), service.Method, data);
  }

  function updateUserPassword(data) {
  }


  function getAllLocations() {
    return requestService.request(Static.BaseUrl + Static.json.locations);
  }

  return service;
}