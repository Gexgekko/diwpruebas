var diwApp = angular.module('diwApp',['ui.router']);

diwApp.controller('inicioCtrl',function($scope){
	var vm = $scope;
	vm.muerte = function(numero){
		vm.nuerteNum = numero;
	}
})