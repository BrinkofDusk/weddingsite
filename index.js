var epck = document.getElementById("inviteType");


epck.addEventListener("change", function() { 

    if(epck.options.selectedIndex === 0){
        console.log("Email is selected!");
    } else {
        console.log("Paper is selected");
    }

    if(epck.options.selectedIndex === 0){
       let eo = document.getElementById("email");
       eo.style.display = "inline-block";
       
    } else {
        
    }


}, false)




