/**
 * Created by smaley on 11/02/2016.
 */
(function() {
  'use strict';

  angular.module('ngApp').controller('AppAvailCtrl', ['$cordovaAppAvailability', '$cordovaDevice', AppAvailCtrl]);

  function AppAvailCtrl($cordovaAppAvailability, $cordovaDevice) {
    var vm=this;

    vm.twitter='unknown';
    vm.platform='iOS'; // default to iOS

    //(function devicePlatform () {
    //  vm.platform = $cordovaDevice.getPlatform();
    //})();

    vm.check = function(schemename) {
      console.log('Checking... ' + schemename);
      document.addEventListener("deviceready", function () {
// iOS specific for now - use if (vm.platform.equals('iOS')( {} later
        $cordovaAppAvailability.check('twitter://')
          .then(function() {
            vm.twitter = 'yes';
            vm.alert('twitter');
          }, function () {
            vm.twitter = 'no';
            vm.alert('twitter');
          });
      }, false);
    };

    vm.checkandroidtwit = function(schemename) {
      console.log('Checking... ' + schemename);
      document.addEventListener("deviceready", function () {
// Android specific for now - use if (vm.platform.equals('android')( {} later
        $cordovaAppAvailability.check('com.twitter.android')
          .then(function() {
            vm.twitter = 'yes';
            vm.alert('twitter');
          }, function () {
            vm.twitter = 'no';
            vm.alert('twitter');
          });
      }, false);
    };

    vm.alert = function(res) {
      console.log("Called alert");

      $cordovaDialogs.alert(res, "Check 4 App", "OK");
    };
  }
})();
