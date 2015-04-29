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
	$scope.inventario = { "itemCabeza":"Nada.", "itemCodoIzquierdo":"Nada", "itemCodoDerecho":"Universo." };
	$scope.guardarInventario = function(){
		$cookieStore.put('DIWCookieInventario', $scope.inventario);
	}
	$scope.cargarInventario = function(){
		var inventario = $cookieStore.get('DIWCookieInventario');
		console.log(inventario);
	}

}]);
