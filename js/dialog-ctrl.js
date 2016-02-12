/**
 * Created by smaley on 08/02/2016.
 */
(function() {
  'use strict';

  angular.module('ngApp').controller('DialogCtrl', ['$cordovaDialogs', DialogCtrl]);

  function DialogCtrl($cordovaDialogs) {
    var vm=this;

    vm.results={};

    vm.alert = function() {
      console.log("Called alert");

      $cordovaDialogs.alert('Whassup!', "Alert Witter", "Dismiss");
    };

    function alertClosed() {
      $cordovaDialogs.alert('Alert was closed');
    }

    vm.confirm = function() {
      console.log("Called confirm");

      $cordovaDialogs.confirm('Are you sure?', "Confirmation Witter", ['OK', 'No', 'Dunno'])
        .then(function(buttonIndex) {
          confirmClosed(buttonIndex);
        });
    };

    function confirmClosed(buttonIndex) {
      $cordovaDialogs.alert('You selected option: ' + buttonIndex);
    }

    vm.prompt = function() {
      console.log("Called prompt");

      $cordovaDialogs.prompt('Please Enter userId', "Just Witter", ['Enter', 'Reset'], "user")
        .then(function(result) {
          vm.results = result;
        });

    };

    function promptClosed(results) {
      $cordovaDialogs.alert('You entered ' + results.buttonIndex + " - " + results.input1);
    }

    vm.beep = function() {
      console.log("Called beep");
      //beep 3 times
      $cordovaDialogs.beep(3);
    };

  }
})();
