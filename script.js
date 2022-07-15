

let form =document.forms[0];
let list = display.innerHTML += `<ol> 
                                  <li>${pilotname[0].value}<li>
                                  <li>${copilotname[1].value}</li>
                                  <li>${fuellevels[2].value}</li>
                                  <li>${cargomass[3].value} kg</li>
                               </ol>`;
 

form.addEventListener("submit", function(e) {
    e.preventDefault();  

    validateInput(list);
   
  });


window.addEventListener("load", function() {
 
    myFetch()

 });



 











