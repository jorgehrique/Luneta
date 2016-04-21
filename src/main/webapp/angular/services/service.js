app
.service('apodService', function($http){
	var base = "https://api.nasa.gov/planetary/apod";
	this.getApod = function (data, api_key) {
		var dataUrl;
		var api_keyUrl;

		if (api_key == undefined)
			api_keyUrl = "api_key=3UHaUeUYc90MwSkbmXUl0Lyk2sWiTwkXb7QTppKD";
		else
			api_keyUrl = "api_key="+api_key;

		if (data == undefined)
			dataUrl = "";
		else
			dataUrl = "date=" + data;

		var url = base + "?" + dataUrl + "&"+ api_keyUrl + "&hd=true";
		return $http.get(url);
	};
});