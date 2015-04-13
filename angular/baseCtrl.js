diwApp.controller('baseCtrl',function($scope, $state){
	$state.go('inicio');
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
		$scope.tituloAventura = 'Inicio';
	}
})