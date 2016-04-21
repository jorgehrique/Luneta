app
.controller('indexCtrl', function($scope){
	
})
.controller('apodCtrl', function($scope, apodService){
	$scope.buscar = function(){
		apodService.getApod($scope.data, $scope.api_key).then(function(response){
			$scope.apod = response.data;
		});
	};

	$scope.buscar();
});