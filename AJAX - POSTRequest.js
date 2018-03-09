/**
 *	Javascript code for AJAX POST request
 *	
 *	@param string url : URL of the AJAX Page
 *	@param obj param : Object of variables that going to send with AJAX request
 *	@param function callback : function for callback. Use this.responseText to get result from request.
 */
function AJAX_POSTRequest(url, param = false, callback = false){
	
	// Variable
	var xhr = new XMLHttpRequest();
	var fd;
	
	// Put parameters into FormData
	if(param !== false){
		fd = new FormData();
		for(x in param){fd.append(x,param[x]);}
	}
	
	// Callback
	if(callback !== false){
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {callback(this);}
		};		
	}
	
	// AJAX
	xhr.open("POST", url);
	xhr.send(fd);
}
