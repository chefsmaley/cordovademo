/**
 * Created by smaley on 11/02/2016.
 */
(function() {
  'use strict';

  angular.module('ngApp').controller('ActionSheetCtrl', ['$cordovaActionSheet', '$cordovaDialogs', ActionSheetCtrl]);

  function ActionSheetCtrl($cordovaActionSheet, $cordovaDialogs) {
    var vm = this;
    vm.result = null;

    vm.action = function () {
      console.log("Called Action Sheet");

      var options = {
        title: 'Select your option?',
        buttonLabels: ['Share via Facebook', 'Share via Twitter'],
        addCancelButtonWithLabel: 'Cancel',
        androidEnableCancelButton: true,
        winphoneEnableCancelButton: true,
        addDestructiveButtonWithLabel: 'Delete it'
      };

      document.addEventListener("deviceready", function () {

        $cordovaActionSheet.show(options)
          .then(function (btnIndex) {
            vm.result = btnIndex;
            actionClosed(btnIndex);
          });
      }, false);
    };

    function actionClosed(i) {
      $cordovaDialogs.alert('Selected Action no. ' + i);
    }
  }
})();
