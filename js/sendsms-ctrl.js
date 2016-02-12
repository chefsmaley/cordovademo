/**
 * Created by smaley on 12/02/2016.
 */
(function() {
  'use strict';

  angular.module('ngApp').controller('SendSmsCtrl', ['$cordovaSms', SendSmsCtrl]);

  function SendSmsCtrl($cordovaSms) {
    var vm=this;

    vm.sendres='unknown';

    vm.messages = ['Thank you for your interest in our App. ' +
    'Please reply to this message with YES to opt in to receiving updates ' +
    'or reply STOP to stop further texts'];

    console.log("Trying to send SMS");

    vm.sendsms = function(mobnum, msgnum) {
      document.addEventListener("deviceready", function () {
//CONFIGURATION
        var options = {
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
            intent: 'INTENT'  // send SMS with the native android SMS messaging
            //intent: '' // send SMS without open any other app - but wont work on v23 SDK
          }
        };

        var success = function () { vm.sendres='success :) ' + msgnum;
          alert('Message sent successfully ' + msgnum); };
        var error = function (e) { vm.sendres='failed :-( ' + msgnum;
          alert('Message Failed:' + e); };

        //sms.send(number, message, options, success, error);

        $cordovaSms
          .send(mobnum, 'Thank you for your interest in our App. ' +
            'Please reply to this message with YES to opt in to receiving updates ' +
            'or reply STOP to stop further texts', options, success, error);
          //.then(function() {
          //  vm.sendres='success :)';
          //}, function(error) {
          //  vm.sendres='failed :-(';
          //});

      });
    }
  }
})();
