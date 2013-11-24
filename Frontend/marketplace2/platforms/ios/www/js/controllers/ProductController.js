ProductController = function()
{
	var showSuggestedProducts = function(json)
	{
		$.mobile.loading('hide');
		
		GlobalVars.lastIdentifiedProduct.name = json.found.name;
		GlobalVars.lastIdentifiedProduct.id = json.found.id;
		GlobalVars.lastIdentifiedProduct.photoUrl = json.found.url;
		GlobalVars.lastIdentifiedProduct.category = json.found.cateogry;
		GlobalVars.lastIdentifiedProduct.description = json.found.description;
		
		$.mobile.changePage('dialogs/suggestedProducts.html');
	}
	
	var onUploadPhotoSuccess = function(imageData)
	{
		$.mobile.loading('show');
		var photoManager = new Photo();
		photoManager.uploadPhoto(imageData, showSuggestedProducts);
	}
	
	var onUploadPhotoFail = function(err)
	{
		alert("Failed to upload image: " + err);
	}
	
	this.addProductPhoto = function()
	{
		navigator.camera.getPicture(onUploadPhotoSuccess, onUploadPhotoFail, {quality:50, destinationType : navigator.camera.DestinationType.DATA_URL});
	}
}
