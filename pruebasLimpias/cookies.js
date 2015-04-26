var diwCookieApp = angular.module('diwCookieApp',[]);
diwCookieApp.controller('CookieCtrl',function($scope){
	$scope.verTexto = function (){
		$scope.textoVer = $scope.textoIntroducido;
	}
});
