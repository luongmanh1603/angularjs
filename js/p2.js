var validationApp = angular.module('validation',[]);

validationApp.controllder('mainController', function ($scope){
    $scope.submitForm = function (isValid){
        if(isValid){
            alert('form is Valid');
        }
    }
});;