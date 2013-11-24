$(document).on("pageinit", "#storesPage", function( event ) 
{
	var controller = new StoresController();
	
	//Get stores
	controller.getStores();
	
	$( document ).on("click", "#submitNewStore", controller.addNewStore);
});