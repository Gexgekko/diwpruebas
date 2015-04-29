var diwCookieApp = angular.module('diwCookieApp',['ngCookies']);
diwCookieApp.controller('CookieCtrl',['$scope','$cookieStore','$interval',function($scope,$cookieStore,$interval){
	//Cookies normales
	$scope.verTexto = function (){
		$scope.textoVer = $scope.textoIntroducido;
	}
	$scope.guardarCookie = function (){
		$cookieStore.put('DIWCookie1', $scope.cookieCargada);
	}
	$scope.cargarCookie = function (){
		$scope.cookieLeida = $cookieStore.get('DIWCookie1');
	}

	//Cookies con interval
	var guardado = $interval(function (){
		var cookieMeter = { "nombre":"cookiesita", "textito":$scope.cookieCargadaIntervalo }
		$cookieStore.put('DIWCookieIntervalo', cookieMeter);
	},10000);
	var cargado = $interval(function (){
		var cookieObjeto = $cookieStore.get('DIWCookieIntervalo');
		$scope.cookieLeidaIntervalo = cookieObjeto.textito
	},10000);


	//Cookies de INVENTARIO
	
	$scope.guardarInventario = function(){
		$cookieStore.put('DIWCookieInventario', $scope.inventario);
		console.log('Guardo inventario')
	}
	$scope.cargarInventario = function(){
		$scope.inventario = $cookieStore.get('DIWCookieInventario');
		console.log('Cargo inventario')
		console.log($scope.inventario);
	}
	$scope.cargarInventario();
	var contador = 0;
	$scope.$watch('inventario.itemCabeza',function(newValue, oldValue){
		if(contador>0){
			if(oldValue == 'CaritaFelis' && newValue == 'CaritaTriste'){
				console.log('Has pasado de '+oldValue+' a '+newValue+', estás deprimido? (Easter Egg de caritas)');
				contador++;
			}else{
				console.log('Cambiaste de '+oldValue+' a '+newValue+' el item de la cabeza');
				contador++;
			}
		}
	})
	$scope.cargarInventario();
}]);
