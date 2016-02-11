/**
 * Created by smaley on 08/02/2016.
 */
(function() {
  'use strict';

  angular.module('ngApp').controller('BarcodeCtrl', ['$cordovaBarcodeScanner', '$scope', BarcodeCtrl]);

  function BarcodeCtrl($cordovaBarcodeScanner, $scope) {
    var vm=this;

      vm.scanBarcode = function () {
        document.addEventListener("deviceready", function () {
          $cordovaBarcodeScanner.scan().then(function (barcodeData) {
            // Success! barcode data here
            vm.barCode = "data: " + JSON.stringify(barcodeData);
          }, function (err) {
            alert("An error occurred: " + err);
          });
        }, false);
      };

    vm.gotoBarcodeUrl = function () {
      document.addEventListener("deviceready", function () {
      $cordovaBarcodeScanner.scan().then(function (barcodeData) {
        // Success! barcode data here
        vm.barCodeUrl = "<a href=\'" + barcodeData + "\'>click</a>";
      }, function (err) {
        alert("An error occurred: " + err);
      });
      }, false);
    };

    //document.addEventListener("deviceready", function () {
    // $cordovaBarcodeScanner.scan().then(function (barcodeData) {
    //    // Success! barcode data here
    //    vm.barCode = "data: " + barcodeData;
    //  }, function (err) {
    //    alert("An error occurred: " + err);
    //  });
    //};

// NOTE: encoding not functioning yet
//    $cordovaBarcodeScanner
//      .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
//      .then(function(success) {
//        // Success!
//      }, function(error) {
//        // An error occurred
//      });
//
//  }, false);
  }
})();
