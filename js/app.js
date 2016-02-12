// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ngApp', ['ngCordova', 'ionic','ionic.service.core', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
    .state('tab.cordova', {
      url: '/cordova',
      views: {
        'cordova': {
          templateUrl: 'templates/cordova.html',
          controller: 'CordovaDemoCtrl'
        }
      }
    })
    .state('tab.dialog', {
      url: '/dialog',
      views: {
        'cordova': {
          templateUrl: 'templates/dialog.html',
          controller: 'DialogCtrl'
        }
      }
    })
    .state('tab.vibration', {
      url: '/vibration',
      views: {
        'cordova': {
          templateUrl: 'templates/vibration.html',
          controller: 'VibrationCtrl'
        }
      }
    })
    .state('tab.camera', {
      url: '/camera',
      views: {
        'cordova': {
          templateUrl: 'templates/camera.html',
          controller: 'CameraCtrl'
        }
      }
    })
    .state('tab.barcode', {
      url: '/barcode',
      views: {
        'cordova': {
          templateUrl: 'templates/barcode.html',
          controller: 'BarcodeCtrl'
        }
      }
    })
    .state('tab.device', {
      url: '/device',
      views: {
        'cordova': {
          templateUrl: 'templates/device.html',
          controller: 'DeviceCtrl'
        }
      }
    })
    .state('tab.network', {
      url: '/network',
      views: {
        'cordova': {
          templateUrl: 'templates/network.html',
          controller: 'NetworkCtrl'
        }
      }
    })
    .state('tab.actionsheet', {
      url: '/actionsheet',
      views: {
        'cordova': {
          templateUrl: 'templates/actionsheet.html',
          controller: 'ActionSheetCtrl'
        }
      }
    })
    .state('tab.appavail', {
      url: '/appavail',
      views: {
        'cordova': {
          templateUrl: 'templates/appavail.html',
          controller: 'AppAvailCtrl'
        }
      }
    })
    .state('tab.sendsms', {
      url: '/sendsms',
      views: {
        'cordova': {
          templateUrl: 'templates/sendsms.html',
          controller: 'SendSmsCtrl'
        }
      }
    })
    .state('tab.datetimepick', {
      url: '/datetimepick',
      views: {
        'cordova': {
          templateUrl: 'templates/datetimepick.html',
          controller: 'DateTimePickCtrl'
        }
      }
    })
    .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
