LogginController = function()
{
	//Shows the loggin form when account type is selected
	this.showLogginForm = function(accountType)
	{
		$('#accountType').val(accountType);
		
		if($('#logginInfo').css('display') == 'none')
		{
			$('#logginInfo').css('display', 'block');
		}
	}
	
	//Submit the information
	this.submitForm = function(username, mail, password, repeatPassword, accountType)
	{
		var username = $('#usernameLoggin').val();
		var mail = $('#emailLoggin').val();
		var password = $('#passwordLoggin').val();
		var repeatPassword = $('#repeatPasswordLoggin').val();
		var accountType = $('#accountType').val();
		
		$.mobile.changePage("seller/products.html");
	}
};