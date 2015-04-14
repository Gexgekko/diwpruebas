diwApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
	{
    	$urlRouterProvider.otherwise('/');
    	$stateProvider
    	.state('inicio',
    	{ 
    		templateUrl: '../plantillas/inicio.html'
            //controller: 'InicioCtrl'
    	})
    	.state('segundo',
    	{
    		templateUrl: "../plantillas/segundo.html"
    	})
        .state('tercero',
        {
            templateUrl: "../plantillas/tercero.html"
        })
	}
]);