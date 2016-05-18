/**
 * Created by smaley on 08/02/2016.
 */
(function() {
  'use strict';

  angular.module('ngApp').controller('BarcodeCtrl', ['$cordovaBarcodeScanner', '$scope',
    'barcodeSvc', BarcodeCtrl]);

  function BarcodeCtrl($cordovaBarcodeScanner, barcodeSvc, $scope) {
    var vm=this;

    vm.error="No Error";
    vm.barCodeUrl="";
    vm.productDescription="Scan to show";

      vm.scanBarcode = function () {
        document.addEventListener("deviceready", function () {
          $cordovaBarcodeScanner.scan().then(function (barcodeData) {
            // Success! barcode data here
            vm.barCode = "data: " + JSON.stringify(barcodeData);
            vm.barCodeUrl = "" + barcodeData.text;
          }, function (err) {
            alert("An error occurred: " + err);
            vm.error=JSON.stringify(err);
          });
        }, false);
      };

    vm.gotoBarcodeUrl = function () {
      document.addEventListener("deviceready", function () {
      $cordovaBarcodeScanner.scan().then(function (barcodeData) {
        // Success! barcode data here
        vm.barCodeUrl = "http://api.upcdatabase.org/json/40602f07dad303c4f595379fb5da3826/" + barcodeData.text;
        barcodeSvc.getProductFromCode(barcodeData.text).then(
          function(bcodeData) {
            console.log("Got " + JSON.stringify(bcodeData));
            vm.productDescription=bcodeData.description;
          },
          function (err) {
            console.log("Error getting product " + JSON.stringify(err));
            vm.error="Error getting product " + JSON.stringify(err);
          }
        )
      }, function (err) {
        alert("An error occurred: " + err);
      });
      }, false);
    };

    // http://api.upcdatabase.org/json/40602f07dad303c4f595379fb5da3826/CODE

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
