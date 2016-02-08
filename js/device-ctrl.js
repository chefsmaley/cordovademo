/**
 * Created by smaley on 08/02/2016.
 */
(function() {
  'use strict';

  angular.module('ngApp').controller('DeviceCtrl', ['$cordovaDevice', DeviceCtrl]);

  function DeviceCtrl($cordovaDevice) {
    var vm=this;

    vm.deviceModel = function() {
      vm.results = $cordovaDevice.getModel();
    };

    vm.devicePlatform = function() {
      vm.results = $cordovaDevice.getPlatform();
    };

    vm.deviceUUID = function() {
      vm.results = $cordovaDevice.getUUID();
    };

    vm.deviceVersion = function() {
      vm.results = $cordovaDevice.getVersion();
    };

    vm.cordovaVersion = function() {
      vm.results = $cordovaDevice.getCordova();
    };

    vm.device = function() {
      vm.results = JSON.stringify($cordovaDevice.getDevice());
    };

  }
})();
