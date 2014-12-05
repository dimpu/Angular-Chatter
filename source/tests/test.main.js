var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

    paths: {
    'jquery'          : '../js/vendor/jquery/dist/jquery'    
    'angular'         : '../js/vendor/angular/angular',
    'angular-animate' : '../js/vendor/angular-animate/angular-animate',
    'angular-aria'    : '../js/vendor/angular-aria/angular-aria',
    'angular-cookies' : '../js/vendor/angular-cookies/angular-cookies',
    'angular-messages': '../js/vendor/angular-messages/angular-messages',
    'angular-mocks'   : '../js/vendor/angular-mocks/angular-mocks',
    'angular-resource': '../js/vendor/angular-resource/angular-resource',
    'angular-route'   : '../js/vendor/angular-route/angular-route',
    'angular-sanitize': '../js/vendor/angular-sanitize/angular-sanitize',
    'angular-scenario': '../js/vendor/angular-scenario/angular-scenario',
    'angular-touch'   : '../js/vendor/angular-touch/angular-touch',
    'bootstrap'       : '../js/vendor/bootstrap-sass-official/assets/javascript/bootstrap'
  },

    shim: {
        'angular'      : {'exports' : 'angular'},
        'angular-route'  : ['angular'],
        'angular-cookies': ['angular'],
        'angular-sanitize': ['angular'],
        'angular-resource': ['angular'],
        'angular-animate': ['angular'],
        'angular-touch': ['angular'],
        'angular-mocks': {
          deps:['angular'],
          'exports':'angular.mock'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
