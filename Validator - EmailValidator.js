/**
 *	Email Validator
 *
 *	Function for checking the email is valid or not
 *
 *  @param string mail : the email
 *
 *  @return boolean :
 *      IF bad email, return false
 *      IF good email, return true
 */
function ValidatingEmail(mail){
	if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail)){return false;}
	else{return true;}
}
