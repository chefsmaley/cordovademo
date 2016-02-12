/**
 * Created by smaley on 12/02/2016.
 */
(function() {
  'use strict';

  angular.module('ngApp').controller('DateTimePickCtrl', ['$cordovaDatePicker', '$cordovaDialogs', DateTimePickCtrl]);

  function DateTimePickCtrl($cordovaDatePicker, $cordovaDialogs) {
    var vm = this;
    vm.thedate = new Date();
    vm.thetime = new Date();

    vm.pickdate = function () {
      console.log("Called Date Picker");

      var options = {
        date: new Date(),
        mode: 'date', // or 'time'
        minDate: new Date() - 10000,
        maxDate: new Date() + 10000,
        allowOldDates: true,
        allowFutureDates: true,
        doneButtonLabel: 'Set Date',
        doneButtonColor: '#F2F3F4',
        cancelButtonLabel: 'CANCEL',
        cancelButtonColor: '#000000'
      };

      document.addEventListener("deviceready", function () {

        $cordovaDatePicker.show(options).then(function (date) {
          vm.thedate=date;
          picked(thedate);
        });

      }, false);
    };

    vm.picktime = function () {
      console.log("Called Time Picker");

      var options = {
        date: new Date(),
        mode: 'time', // or 'date'
        minDate: new Date() - 1000,
        maxDate: new Date() + 1000,
        is24Hour: true,
        minuteInterval: 5,
        allowOldDates: true,
        allowFutureDates: true,
        doneButtonLabel: 'Save Time',
        doneButtonColor: '#22F3F4',
        cancelButtonLabel: 'CANCEL',
        cancelButtonColor: '#000000'
      };

      document.addEventListener("deviceready", function () {

        $cordovaDatePicker.show(options).then(function (date) {
          vm.thetime=date;
          picked(thetime);
        });

      }, false);
    };

    function picked(data) {
      $cordovaDialogs.alert('Selected ' + data);
    }
  }
})();
