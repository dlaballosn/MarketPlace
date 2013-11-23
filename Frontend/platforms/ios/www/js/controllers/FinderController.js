FinderController = function()
{
	var keywords = "";
	var category = "";
	
	var onGeolocationSuccess = function(position)
	{
		//Get latitude and longitude
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		
		alert("You are searching for a : " + keywords + ". With category: " + category + ". At lat: " + latitude + " lon: " + longitude + ".Congratulations!!");
	}
	
	this.listResults = function()
	{
		keywords = $('#searchProduct').val();
		category = $('#selectedCategory').val();
		alert("Going to geo");
		navigator.geolocation.getCurrentPosition(onGeolocationSuccess, function(err){alert(err);});
	}
}