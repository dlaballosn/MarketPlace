//Register phonegap ready event
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
	GlobalVars.isPhoneGapReady = true;
}

$(document).on("pageinit", "#logginPage", function( event ) 
{
	var controller = new LogginController();
		
	$( document ).on( "click", "#buyerAccount", function(){ controller.showLogginForm("buyer");});
	$( document ).on( "click", "#sellerAccount", function(){ controller.showLogginForm("seller");});
	$( document ).on( "click", "#submitLoggin", controller.submitForm);
});

