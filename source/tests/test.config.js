var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return (/spec\.js$/).test(file);
});

requirejs.config({
    paths: {
        // External libraries
        'angular'  : '../source/js/vendor/angular/angular',
        'templates': '../templates'
    },
    baseUrl: '../source/js/app',
    shim: {
        'angular': {
        	'exports': 'angular'
        },
        // // ...
        // 'angular-ui.utils': {deps: ['angular']},
        // 'angularMocks': {deps: ['angular'], 'exports': 'angular.mock'},
        // // Each template to be included in tests should be included below.
        // 'templates/status-chart.html': {deps: ['angular']}
    },

    // Ask Require.js to load these files (all our tests).
    deps: tests,

    // Set test to start run once Require.js is done.
    callback: window.__karma__.start
});