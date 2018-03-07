/**
 *	Javascript code for getting Checkbox value
 *	
 *	@param HTMLElement Elem : Array of Checkbox Button Elements returned from getElementsByClassName or getElementsByName
 *	@return : Value in Array, FALSE if non of them checked
 */
function getCheckBoxValue(Elem){
	
	// Variable
	var Arr = [];
	
	// Push value into the Array if checked
	for (var i = 0, len = Elem.length; i < len; i++){
		if (Elem[i].checked){Arr.push(Elem[i].value);}
	}
	
	// RETURN FALSE if Array is empty (no box checked), ELSE RETURN Array
	if (Arr.length === 0){return false;}
	else{return Arr;}
}
