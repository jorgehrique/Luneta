var url = "templates/";

app.config(function($routeProvider){
	$routeProvider
	.when('/', 
		{
			controller : 'indexCtrl',
			templateUrl: url + 'index.html'
		})
	.when('/Apod', 
		{
			controller : 'apodCtrl',
			templateUrl: url + 'apod.html'
		});
});