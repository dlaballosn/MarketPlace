StoresController = function()
{
	var storeName = "";
	
	var onGeolocationSuccess = function(position)
	{
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		
		alert(lat + " " + lon + " " + storeName + " " + GlobalVars.owner);
	}
	
	var onGeolocationFail = function(err)
	{
		alert("Error getting location: " + err); 
	}
	
	
	this.addNewStore = function()
	{
		storeName = $('#newStoreName').val();
		//Get geolocation
		navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationFail);
	}
}