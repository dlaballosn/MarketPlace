StoresController = function()
{
	var storeName = "";
	
	var onStoreCreated = function()
	{
		$('.ui-dialog').dialog('close');
	}
	
	var onGeolocationSuccess = function(position)
	{
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		
		var storeManager = new Store();
		storeManager.createStore(storeName, lat + ',' + lon, GlobalVars.owner, onStoreCreated);
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