var app = angular.module('mybank', []);
app.controller('MainCtrl', function($scope) {
//alertBox
  var myFunction = function() {
    prompt("WELCOME TO CREATIVE BANK, Please enter your code:", 'Any code is valid of the demo :D');
     //any code is aceptable to this demo
    }
    //execute the function
    myFunction();

// Actual Balance
  var cleanAccount = function() {
    var account = {
      name: 'Fernando Wertt',
      startingBalace: 100.00,
      runningBalance: 73.34
    }
    return account;
  };

  //transactions from scratch
   var cleanTransaction = function() {
    var transaction = {
      name: 'Fernando Wertt',
      type: 'deposit',
      amount: 0.00,
      description: ''
    }

    return transaction;
  };

//transactions by default
  var transactions = [{
    name: 'Fernando Wertt',
    amount: 100.00,
    description: 'Deposit',
    type: 'deposit'
  }, {
    name: 'Fernando Wertt',
    amount: 50.00,
    description: 'Best Buy',
    type: 'spend'
  }, {
    name: 'Fernando Wertt',
    amount: 50.26,
    description: 'Nintendo Store',
    type: 'spend'
  }, {
    name: 'Fernando Wertt',
    amount: 20.15,
    description: 'StarBucks',
    type: 'spend'
  }];

//clear from zero
  $scope.transaction = cleanTransaction();
  $scope.account = cleanAccount();

  $scope.transactionList = transactions;
 //Submit trans
  $scope.saveTransaction = function() {
    var amount = parseFloat($scope.transaction.amount);
    var num = parseFloat($scope.account.runningBalance);
    var answer = 0;
 
    if ($scope.transaction.type === 'deposit') {
      answer = num + amount
    } else {
      answer = num - amount
    }
    if($scope.transaction.description === ''){
      alert('Please fill the description');
      transactions($scope.transaction);
    }else{
      alert('Transaction complete');
      transactions.push($scope.transaction);
      
    }
    $scope.account.runningBalance = answer;
    $scope.transaction.amount = amount;
    $scope.transaction = cleanTransaction();
  };

});
//negative balance
app.directive('warning', function() {
  var staticWarningLevel = .2;

  return {
    restrict: 'A',
    scope: {
      val: '=warning'
    },
    link: function(scope, element, attrs) {
      scope.$watch('val', function(newValue) {
        var startBalance = parseInt(attrs.startbalance);
        var warningLevel = startBalance * staticWarningLevel;
        if (newValue === warningLevel) {
          element.addClass('alert-warning');
           element.removeClass('alert-danger');
        } else if (newValue < warningLevel) {
          element.addClass('alert-danger');
        } else {
          element.removeClass('alert-warning');
          element.removeClass('alert-danger');
        }

      }, true);
    }
  }

});