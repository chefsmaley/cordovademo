/**
 * Created by smaley on 21/02/2016.
 */
(function () {
  'use strict';

  angular.module('ngApp').factory('barcodeSvc', ['$resource', barcodeSvc]);

    function barcodeSvc($resource) {

      var upcdbapi='http://api.upcdatabase.org/json/40602f07dad303c4f595379fb5da3826/';
      var upcapi = $resource(upcdbapi + '/:bcode', {bcode:'@bcode'});

      function getProductFromCode(bcode) {
        console.log("getting product data from barcode " + bcode);

        return upcapi.get({bcode:bcode}).$promise;
      }

      return {
        getProductFromCode: getProductFromCode
      }
    }
})();
