var diwApp = angular.module('diwApp',['ui.router']);

diwApp.controller('baseCtrl',function($scope, $state, $stateParams){
	$scope.vivo = 1;
	$scope.tituloAventura = 'Inicio';
	$scope.muerte = function(numero, texto){
		$scope.muerteNum = numero;
		$scope.tituloAventura = texto;
		$scope.vivo = 0;
	}
	$scope.resucitar = function(){
		$scope.muerteNum = 0;
		$scope.vivo = 1;
	}
})