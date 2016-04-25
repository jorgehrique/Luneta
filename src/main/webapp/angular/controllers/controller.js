var mudarMenu = function (li){		
		$("#home").removeClass("active");		
		$("#apod").removeClass("active");
		$("#other").removeClass("active");
		$("#"+li).addClass("active");
};

app
.controller('indexCtrl', function($scope){	
	mudarMenu("home");
})
.controller('apodCtrl', function($scope, apodService){
	mudarMenu("apod");

	$scope.buscar = function(){
		apodService.getApod($scope.data, $scope.api_key).then(function(response){
			if(response.status == 200){
				var image = document.images[1];
				image.src = "imgs/loading.gif";
				var downloadingImage = new Image();
				downloadingImage.onload = function(){
				    image.src = this.src;   
				};

				$scope.apod = response.data;			
				downloadingImage.src = $scope.apod.hdurl;
			}			
		});
	};

	$scope.buscar();
})
.controller('otherCtrl', function($scope){
	mudarMenu("other");
});


// Exemplo de img loading adaptado de :
// http://blog.teamtreehouse.com/learn-asynchronous-image-loading-javascript
// Min : 1995-06-16
// Max : Hoje