var app = angular.module('tabMinder', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.patronName = 'Kevin Coleman';
    $scope.lineItems = [];
    $scope.addLineItem = function() {
      if(
        (!$scope.credit && !$scope.debit) ||
        ($scope.credit === '' && $scope.debit === '')
      ) {return;}
      
      var enterLine = function(amount, type) {
        if (!isNaN(amount)) {
          amount = parseFloat(amount).toFixed(2);
          if (amount !== '0.00' && !isNaN(amount)) {
            $scope.lineItems.push({amount: amount, type: type});
          }
        }
        return;
      }

      enterLine($scope.credit, 'credit');
      enterLine($scope.debit, 'debit');

      $scope.credit = '';
      $scope.debit = '';
    }
  }
]);
