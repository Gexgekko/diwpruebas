diwApp.controller('baseCtrl',function($scope, $state){
	$state.go('inicio');
	$scope.vivo = 1;
	if($state.current == 'inicio'){
		$scope.tituloAventura = 'Inicio';	
	}
	if($state.current == 'segundo'){
		$scope.tituloAventura = 'Cuidado!';	
	}
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