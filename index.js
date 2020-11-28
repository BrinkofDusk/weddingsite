var epck = document.getElementById("inviteType"); //variable for the email option
var x, i, j, l, ll, selEl, a, b, c; //variables for custom select

x = document.getElementsByClassName("ns");
l = x.length;
for(i = 0; i < l; i++){
    selEl = x[i].getElementsByTagName("select")[0];
    ll = selEl.length;
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selEl.options[selEl.selectedIndex].innerHTML;
    x[i].appendChild(a);
    //for each element create a new div that will contain the options list

    b = document.createElement("div");
    b.setAttribute("class","select-items select-hide");
    for(j = 1; j < ll; j++){
        //For each item in the original select elemetn, create a new DIV that will act as an option element.
        c = document.createElement("DIV");
        c.innerHTML = selEl.options[j].innerHTML;
        c.addEventListener("click", function(e){
            //Update the select box and the selected item when selection occurs
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for(i = 0;i < sl; i++){
                if(s.options[i].innerHTML == this.innerHTML){
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for(k = 0; k < yl; k++){
                        y[k].removeAttribute("class")
                    }                   

                    this.setAttribute("class","same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        //when a select box is clicked, close all other select boxes.
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrows-active");

    });
}

function closeAllSelect(elmnt){
    //Closes all select boxes, less the one that is selected.uh duh...
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for(i = 0; i < yl; i++){
        if(elmnt == y[i]){
            arrNo.push(i);
        }else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for(i = 0; i < x; i++){
        if(arrNo.indexOf(i)){
            x[i].classList.add("select-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);

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




