/**
 *	Javascript code for getting URL Parameter
 *
 *  The code is orignial from :
 *	https://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js*
 *
 *	@param string Param : The name of parameter
 *
 *  @return string : 
 *      IF parameter found, RETURN value.  
 *      IF parameter not found, RETURN false.
 */
function getURLParam(Param){
	
	var this_URL = decodeURIComponent(window.location.search.substring(1));
	var this_ParamArr = this_URL.split('&');
	var this_Param;
	
	// RETURN value
	for(var x = 0, len = this_ParamArr.length; x < len; x++){
		this_Param = this_ParamArr[x].split('=');
		if(this_Param[0] === Param){return this_Param[1];}
	}
	
	// RETURN FALSE if not found
	return false;
}
