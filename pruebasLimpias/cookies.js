var diwCookieApp = angular.module('diwCookieApp',['ngCookies']);
diwCookieApp.controller('CookieCtrl',function($scope,$cookieStore){
	$scope.verTexto = function (){
		$scope.textoVer = $scope.textoIntroducido;
	}
	$scope.guardarCookie = function (){
		$cookieStore.put('DIWCookie1', $scope.cookieCargada);
	}
	$scope.cargarCookie = function (){
		$scope.cookieLeida = $cookieStore.get('DIWCookie1');
	}
});
