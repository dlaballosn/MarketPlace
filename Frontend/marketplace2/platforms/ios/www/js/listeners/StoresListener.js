$(document).on("pageinit", "#storesPage", function( event ) 
{
	var controller = new StoresController();
	
	$( document ).on("click", "#submitNewStore", controller.addNewStore);
});