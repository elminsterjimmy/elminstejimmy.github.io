/**
 * Created by jgu on 9/28/2015.
 */
angular.module('grsApp').
  constant('URLConstants', {
    "Dummy" : {
      "BaseUrl" : ".",
      "Service" : {
        "Meta" : {
          "Url" : "/json/dummy/meta.json",
          "Method" : "GET"
        },
        "User" : {
          "BaseInfo" : {
            "Url" : "/json/dummy/user.json",
            "Method" : "GET"
          },
          "Login" : {
            "Url" : "/json/dummy/login.json",
            "Method" : "GET"
          },
          "Register" : {
            "Url" : "/json/dummy/register.json",
            "Method" : "GET"
          },
        },
        "Collection" : {
          "GetUserCollection" : {
            "Url" : "/json/dummy/%s/collections.json",
            "Method" : "GET"
          },
        },
        "Profile" : {
          "GetUserProfile" : {
            "Url" : "/json/dummy/%s/profile.json",
            "Method" : "GET"
          },
          "UpdateUserBasicProfile" : {
            "Url" : "/user/profile/%s/postDummy.json",
            "Method" : "POST"
          },
          "UpdateUserGameProfile" : {
            "Url" : "/user/profile/%s/postDummy.json",
            "Method" : "POST"
          },
          "UpdateUserPassword" : {
            "Url" : "/user/profile/%s/postDummy.json",
            "Method" : "POST"
          }
        },
      }
    },
    "Test" : {
      "BaseUrl" : "http://localhost:8080/v1.0",
      "Service" : {
        "Meta" : {
          "Url" : "/test",
          "Method" : "GET"
        },
        "User" : {
          "BaseInfo" : {
            "Url" : "/user/current",
            "Method" : "GET"
          },
          "Login" : {
            "Url" : "/user/login",
            "Method" : "POST"
          },
          "Register" : {
            "Url" : "/user",
            "Method" : "POST"
          },
        },
        "Profile" : {
          "GetUserProfile" : {
            "Url" : "/user/profile/%s",
            "Method" : "GET"
          },
          "UpdateUserBasicProfile" : {
            "Url" : "/user/profile/%s/basic",
            "Method" : "POST"
          },
          "UpdateUserGameProfile" : {
            "Url" : "/user/profile/%s/game",
            "Method" : "POST"
          },
          "UpdateUserPassword" : {
            "Url" : "/user/profile/%s/password",
            "Method" : "POST"
          }
        },
        "Collection" : {
          "GetUserCollection" : {
            "Url" : "/collection/%s",
            "Method" : "GET"
          },
        },
      }
    }
  })
  .constant('Static', {
    "BaseUrl" : "./json/static",
    "json" : {
      "locations" : "/locations.json"
    }
  })
  .constant('EventConstants', {
    "authAvailableEvent" : 'authAvailableEvent',
    "authUnavailableEvent" : 'authUnavailableEvent',
    "serverUnavailableEvent" : 'serverUnavailableEvent'
  });
