var epck = document.getElementById("inviteType");


epck.addEventListener("change", function() { 

    

    if(epck.options.selectedIndex === 1){
       let eo = document.getElementById("email");
       eo.style.display = "inline-block";
       
    } else if( epck.options.selectedIndex === 2){
        let eo = document.getElementById("email");
        eo.style.display = "none";
    } else if( epck.options.selectedIndex === 0){
        let eo = document.getElementById("email");
        eo.style.display = "none";
    }


}, false)




