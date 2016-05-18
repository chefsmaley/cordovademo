/**
 * Created by smaley on 17/05/2016.
 */
(function() {
  'use strict';

  angular.module('ngApp').controller('AppVersionCtrl', ['$cordovaAppVersion', AppVersionCtrl]);

  function AppVersionCtrl($cordovaAppVersion) {
    var vm = this;
    vm.result = null;

    vm.getappdata = function () {
      console.log("Called App Version Controller");

      document.addEventListener("deviceready", function () {

        $cordovaAppVersion.getVersionNumber().then(function (version) {
          vm.appVersion = version;
        });

        $cordovaAppVersion.getVersionCode().then(function (build) {
          vm.appBuild = build;
        });

        $cordovaAppVersion.getVersionCode().then(function (name) {
          vm.appName = name;
        });

        $cordovaAppVersion.getVersionCode().then(function (apackage) {
          vm.appPackage = apackage;
        });
      }, false);
    };
  }
})();
