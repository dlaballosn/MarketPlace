$(document).on("pageinit", "#productsPage", function( event ) 
{
	var controller = new ProductController();
	
	$( document ).on("click", "#addProduct", controller.addProductPhoto);
});