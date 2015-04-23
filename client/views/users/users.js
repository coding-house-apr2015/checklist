'use strict';

angular.module('checklist')
.controller('UsersCtrl', ['$scope', 'User', '$state', '$rootScope', function($scope, User, $state, $rootScope){
  $scope.name = $state.current.name;

  $scope.submit = function(user){
    if($scope.name === 'register'){
      User.register(user)
      .then(function(data){
        $state.go('login');
      })
      .catch(function(err){
        console.error(err);
      });
    }else{
      User.login(user)
      .then(function(data){
        $rootScope.activeUser = data;
        $state.go('home');
      })
      .catch(function(err){
        console.error(err);
      });
    }
  };
}]);
