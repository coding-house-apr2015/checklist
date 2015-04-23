'use strict';

angular.module('checklist')
.controller('UsersCtrl', ['$scope', 'User', '$state', function($scope, User, $state){
  $scope.name = $state.current.name;

  $scope.submit = function(user){
    if($scope.name === 'register'){
      User.register(user)
      .then(function(data){
        console.info(data);
      })
      .catch(function(err){
        console.error(err);
      });
    }else{
      User.login(user)
      .then(function(data){
        console.info(data);
      })
      .catch(function(err){
        console.error(err);
      });
    }
  };
}]);
