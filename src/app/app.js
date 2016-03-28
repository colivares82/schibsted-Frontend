angular.module('schibsted.frontendTest', ['ui.router'])
.constant('_', _)
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('landing');

    $stateProvider.state('Base', {
        url: '/',
        abstract: true,
        views: {
        // This view represents the abstract base state.
        '@': {
          templateUrl: 'app/base/base.html'
        },
        // Header view in the base state.
        'header@Base': {
          controller: 'HeaderCtrl as Header',
          templateUrl: 'app/header/header.html'
        },
        // Footer view in the base state.
        'footer@Base': {
          // controller: 'FooterCtrl as Footer',
          templateUrl: 'app/footer/footer.html'
        }
      }
    })
    .state('landing', {
      parent: 'Base',
      url: 'landing',
      views: {
        'content@Base': {
          templateUrl: 'app/landing/landing.html'
        }
      }
    })
    .state('requirements', {
      parent: 'Base',
      url: 'requirements',
      views: {
        'content@Base': {
          templateUrl: 'app/requirements/requirements.html'
        }
      }
    })
    .state('solution', {
      parent: 'Base',
      url: 'solution',
      views: {
        'content@Base': {
          controller: 'SolutionCtrl as Solution',
          templateUrl: 'app/solution/solution.html'
        }
      }
    });


})
.run(['$rootScope', '$state',
  function ($rootScope, $state) {

}]);
