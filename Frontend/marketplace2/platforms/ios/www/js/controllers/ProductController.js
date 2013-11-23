ProductController = function()
{
	var onUploadPhotoSuccess = function(imageData)
	{
		var photoManager = new Photo();
		photoManager.uploadPhoto(imageData, function(){alert("Subida");})
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
