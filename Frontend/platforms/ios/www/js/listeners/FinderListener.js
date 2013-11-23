$(document).on("pageinit", "#finderPage", function( event ) 
{
	var controller = new FinderController();
	
	$( document ).on( "change", "#searchProduct", controller.listResults);
});