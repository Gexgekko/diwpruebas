diwApp.controller('baseCtrl',function($scope, $state){
	$state.go('inicio');
	$scope.vivo = 1;
	$scope.tituloAventura = 'Inicio';
	$scope.titAv = function(titulo){
		$scope.tituloAventura = titulo;
	}
	$scope.muerte = function(numero, texto){
		$scope.muerteNum = numero;
		$scope.tituloAventura = texto;
		$scope.vivo = 0;
	}
	$scope.resucitar = function(titulo){
		$scope.muerteNum = 0;
		$scope.vivo = 1;
		$scope.tituloAventura = titulo;
	}
})