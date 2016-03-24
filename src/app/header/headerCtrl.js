angular.module('schibsted.frontendTest')
.controller('HeaderCtrl',
['$state',
function ($state) {
  var Header = this;

  Header.isActiveLink = function (linkState) {
    return linkState === $state.current.name;
  }


}]);
