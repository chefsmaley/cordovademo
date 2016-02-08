/**
 * Created by smaley on 08/02/2016.
 */
(function() {
  'use strict';

  angular.module('ngApp').controller('NetworkCtrl', ['$cordovaNetwork', NetworkCtrl]);

  function NetworkCtrl($cordovaNetwork) {
    var vm=this;

    vm.isOnline = ($cordovaNetwork.isOnline() ? "Y" : "N");

    vm.isOffline = ($cordovaNetwork.isOffline() ? "Y" : "N");

  }
})();
