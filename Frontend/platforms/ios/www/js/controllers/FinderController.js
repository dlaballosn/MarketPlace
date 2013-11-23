FinderController = function()
{
	this.listResults = function()
	{
		var product = $('#searchProduct').val();
		
		if(product == "")
		{
			$('#searchList').css('display', 'none');
		}
		else
		{
			$('#searchList').css('display', 'block');
		}
	}
}