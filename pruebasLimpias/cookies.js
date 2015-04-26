var diwCookieApp = angular.module('diwCookieApp',['ngCookies']);
diwCookieApp.controller('CookieCtrl',function($scope,$cookieStore,$interval){
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
	$interval(function (){
		$cookieStore.put('DIWCookieIntervalo', $scope.cookieCargadaIntervalo);
	},10000);
	$interval(function (){
		$scope.cookieLeidaIntervalo = $cookieStore.get('DIWCookieIntervalo');
	},10000);
});
