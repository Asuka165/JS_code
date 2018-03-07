/**
 *	Javascript code for getting Radio value
 *	
 *	@param HTMLElement Elem : Array of Radio Button Elements returned from getElementsByClassName or getElementsByName
 *	@return : The value of selected element or FALSE if none of them is selected.
 */
function getRadioValue(Elem){
	// Loop though elements & RETURN value if found
	for (var i = 0, len = Elem.length; i < len; i++){
		if (Elem[i].checked){return Elem[i].value;}
	}
	// RETURN false if nothing found
	return false;
}
