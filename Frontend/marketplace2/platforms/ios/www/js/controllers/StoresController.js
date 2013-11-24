StoresController = function()
{
	var that = this;
	var storeName = "";
	
	var onStoreCreated = function()
	{
		$('.ui-dialog').dialog('close');
		that.getStores();
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
	
	var addNewStoreToDom = function(id, name)
	{
		$('#storesListView').append("<li><a href='#'>" + name +"</a></li>");
	}
	
	this.addNewStore = function()
	{
		storeName = $('#newStoreName').val();
		//Get geolocation
		navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationFail);
	}
	
	this.getStores = function()
	{
		var storeManager = new Store();
		storeManager.getStores(1, function(stores)
		{
			$('#storesListView').html("");
			
			for(var storeId in stores.stores)
			{
				var store = stores.stores[storeId];
				addNewStoreToDom(store.id, store.name);
			}
			
			$('#storesListView').listview('refresh');
		});
	}
}