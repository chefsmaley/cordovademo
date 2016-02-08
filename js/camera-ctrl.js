/**
 * Created by smaley on 08/02/2016.
 */
(function() {
  'use strict';

  angular.module('ngApp').controller('CameraCtrl', ['$cordovaCamera', '$scope', CameraCtrl]);

  function CameraCtrl($cordovaCamera, $scope) {
    var vm = this;

    vm.takePicture = function () {
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingTRype.JPEG,
        targetWidth: 300,
        taregetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        savePhoitoToAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function (imageData) {
        // Success! Image data here
        vm.imgSrc = "data.image/jpeg;base64," + imageData;
      }, function (err) {
        alert("An error occurred: " + err);
      });
    };

    vm.selectPicture = function () {
      var options = {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      };

      $cordovaCamera.getPicture(options).then(function (imageUri) {
        // Success! Image data here
        vm.imgSrc = imageUri;
      }, function (err) {
        alert("An error occurred: " + err);
      });
    }
  }
})();
