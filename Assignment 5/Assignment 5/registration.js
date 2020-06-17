function formValidation()
{
    clearErrors();
   
    if (username() && city() && streetName() && checkPassword() && confirmPassword())
    {
        return true;
    }
    else
    {
        return false;
    }
 
}

function checkPassword()
{
    var messages;
    console.log ("Check Pass");
    var passw = document.getElementById("passw").value;
    passw = passw.trim();
    var pass_length = passw.length;
    var letterReg = new RegExp("[a-zA-Z]");
    var checkNumber = false;
    var checkUppercase = false;
    var length = false;
    var checkFirst = false;
    
    //check parameters
    if(passw.length >= 8)
    {
        length = true;
    }
    
    
    else if(passw.length < 8)
    {
        messages += "<p> Password must contain 8 characters</p>"; 
        
    }

    for (var i = 0; i<pass_length;i++)
    {
        if (!((passw[i].charCodeAt(i) > 64) && (passw[i].charCodeAt(i) < 91)))
        checkNumber = true;
    }

    for (var i = 0; i<pass_length;i++)
    {
        if (passw[i] == passw[i].toUpperCase()) 
        {
            checkUppercase = true;
        }
    }

    if (letterReg.test(passw[0]) == true)
        checkFirst = true;
    

    //Print errors if pass is wrong
    if (!checkUppercase)
    {
        messages += "<p> Password must contain an uppercase letter</p>"; 
    }

    if (!checkNumber)
    {
        messages += "<p> Password must contain a number</p>"; 
    }

    if (!checkFirst)
    {
        messages += "<p> Password must begin with a letter</p>"; 
    }

    showErrors(messages);

    if (checkNumber && checkUppercase && length && checkFirst)
    {
        
        return true;

    }
    else
    {
        return false;
    }   
        }


function confirmPassword()
{
    var messages;
    var passw = document.getElementById("passw").value;
    passw = passw.trim();
    var cfm_pass = document.getElementById("cmpass").value;
    cfm_pass = cfm_pass.trim();

    if(passw == cfm_pass) 
    {
        return true;
    }
    else
    {
        messages += "<p>Password does'nt match with.</p>"; 
        showErrors(messages);
        return false;s
    }
}
function username()
{
    var allAlpha = true;
    var urname = document.getElementById("usname").value;
    var urname = urname.trim();
    urname = urname.toUpperCase();
    if(user_len != 6)
    {            
        messages += "Username should have 6 characters"; 
        showErrors(messages); 
    }
        
    for (var i = 0; i < urname.length; i++) 
    {    
         if (urname.charAt(i) < "A" || urname.charAt(i) > "Z" )  
         { 
            allAlpha = false;
         }
    } 

    if (!allAlpha)
    {
        messages = "Username start with characters";
        showErrors(messages);
        return false;
    }
    else
    {
        return true;
    } 
}  


function streetName()
{
    var allAlpha = true;
    var strname = document.getElementById("stname").value;
    strname = strname.trim();
    strname = strname.toUpperCase();

    for (var i = 0; i < strname.length; i++) 
    {     
	     if (strname.charAt(i) < "A" || strname.charAt(i) > "Z" )
          { 
              allAlpha = false;
         }
    }  
    if (!allAlpha)
    {
        messages = "street name should contain letters only";
        showErrors(messages);
	    return false;
    } 
    else
    {
        return true;
    }
}

function city()
{
  
    var allAlpha = true;
    var cityname = document.getElementById("city").value;
    var cityname = cityname.trim();
    cityname = cityname.toUpperCase();

    for (var i = 0; i < cityname.length; i++) 
    {
	   
         if (cityname.charAt(i) < "A" || cityname.charAt(i) > "Z" ) 
          { 
              allAlpha = false; 
          }
    }  
    if (!allAlpha)
    {
        messages = "city should contain letters only";
        showErrors(messages);
	    return false;
    } 
    return true;
}

function showErrors(messages)
{
    document.querySelector("#errors").innerHTML += messages;
}
function  clearErrors() 
{
    document.querySelector("#errors").innerHTML = "";
}