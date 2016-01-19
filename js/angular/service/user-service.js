angular.
  module('grsApp').factory('userService', userService);

function userService(requestService, common, logger) {
  logger.info("init user service.");

  var userServices = common.activedApp.Service.User;

  var service = {
    getUserInfo : getUserInfo,
    login : login,
    register : register
  };
  return service;

  function getUserInfo() {
    var service = userServices.BaseInfo;
    return requestService.request(common.activedApp.BaseUrl + service.Url, service.Method);
  }

  function login(user) {
    var service = userServices.Login;
    return requestService.request(common.activedApp.BaseUrl + service.Url, service.Method, user);
  }

  function register(user) {
    var service = userServices.Register;
    return requestService.request(common.activedApp.BaseUrl + service.Url, service.Method, user);
  }
}