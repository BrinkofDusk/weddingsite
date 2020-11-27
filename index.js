var epck = document.getElementById("inviteType");
var x, i, j, l, ll, selEl, a, b, c;

x = document.getElementsByClassName("nf");
l = x.length;
for(i = 0; i < l, i++){
    selEl = x[i].getElementsByTagName("select")[0];
    ll = selEl.length;
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected")
}

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




