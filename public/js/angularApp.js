var app = angular.module('tabMinder', []);

app.factory('patron', [function(){
    var p = {
      firstName: "Kevin",
      lastName: "Coleman",
      username: "kevincoleman",
      email: "kevin.coleman@stuff.com",
      balance: 200.01,
      delinquent: false,
      transactions: []
    };
  return p;
}]);

app.controller('MainCtrl', [
  '$scope',
  'patron',
  function($scope, patron){
    $scope.delinquentAmount = patron.delinquentAmount;
    $scope.patronName = patron.firstName + " " + patron.lastName;
    $scope.lineItems = patron.transactions;
    $scope.balance = patron.balance;
    
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
