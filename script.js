function check() { 
    
    var CSPressed = document.getElementById("CSbtnPressed");
    var CSMPressed = document.getElementById("CSMbtnPressed");
    
    if (document.getElementById("CSbtn").checked == true ) {
        CSPressed.innerHTML = "show";
    } else if (document.getElementById("CSMbtn").checked  == true ) {  
        CSMPressed.innerHTML = "show";
    }
}
