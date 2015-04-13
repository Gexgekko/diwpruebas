var diwApp = angular.module('diwApp',['ui.router']);

diwApp.controller('inicioCtrl',function($scope){
	$scope.muerte = function(numero){
		vm.nuerteNum = numero;
	}
})