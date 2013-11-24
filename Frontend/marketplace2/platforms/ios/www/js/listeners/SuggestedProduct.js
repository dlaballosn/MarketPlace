$(document).on("pageinit", "#suggestedProductsPage", function( event ) 
{
	//Metemos la mierda
	$("#product_name").html(GlobalVars.lastIdentifiedProduct.name)
	$("#product_image").attr("src", GlobalVars.lastIdentifiedProduct.photoUrl)
	$("#product_description").val(GlobalVars.lastIdentifiedProduct.description)
	$("#product_category").val(GlobalVars.lastIdentifiedProduct.category)
	$('#listProduct').listview('refresh');
	
	/*$("#listViewProduct").append("<li><a href='#'><img src='" + GlobalVars.lastIdentifiedProduct.photoUrl + "'/>");
	$("#listViewProduct").append("<h2>" + GlobalVars.lastIdentifiedProduct.name + "</h2>");
	$("#listViewProduct").append("<label><strong>Category: </strong>" + GlobalVars.lastIdentifiedProduct.category + "</label><br/>");
	$("#listViewProduct").append("<label><strong>Description: </strong>" + GlobalVars.lastIdentifiedProduct.description + "</label>");
	$("#listViewProduct").append("</a></li>");
	alert($("#listViewProduct").html());
	
	
	$("#listViewProduct").listview('refresh');*/
});