/**
 * Created by smaley on 08/02/2016.
 */
(function() {
  'use strict';

  angular.module('ngApp').controller('VibrationCtrl', ['$cordovaVibration', VibrationCtrl]);

  function VibrationCtrl($cordovaVibration) {
    var vm=this;

    vm.vibrate = function() {
      console.log("Called vibrate");
      $cordovaVibration.vibrate(500);
    }

  }
})();
