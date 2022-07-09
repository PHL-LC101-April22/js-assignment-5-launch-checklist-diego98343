// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}


let pilotname = document.forms[0];
let copilotname= document.forms[0];
let fuellevels = document.forms[0];
let cargomass = document.forms[0];

let display = document.getElementById("faultyItems");
let colorchange= document.getElementById("launchStatus");
let form =document.forms[0];
let list = display.innerHTML= `<ol>
                                  <li>${pilotname[0].value}<li>
                                  <li>${copilotname[1].value}</li>
                                  <li>${fuellevels[2].value}</li>
                                  <li>${cargomass[3].value}</li>
                               <ol>`;
 

function validateInput(testInput) {

    if ( pilotname[0].value===""){
        display.style.visibility="hidden"
        window.confirm(" input is empty. Please try again");
        return null

    } else if (isNaN(pilotname[0].value)=== false ){
        window.confirm(" You entered a number input in pilot name. Please try again");
        display.style.visibility="hidden"
        return null

    } else if (copilotname[1].value===""){
        display.style.visibility="hidden"
        window.confirm(" input is empty. Please try again");
        return null

    } else if (isNaN(copilotname[1].value)=== false ){
        window.confirm(" You entered a number input in copilot name. Please try again");
        display.style.visibility="hidden"
        return null

    } else if (fuellevels[2].value=== ""){
        display.style.visibility="hidden"
        window.confirm(" input is empty. Please try again");
        return null

    } else if(isNaN(fuellevels[2].value)=== true) {
        window.confirm(" You entered a letter input in the wrong spot. Please try again");
        display.style.visibility="hidden"
        return null ;

    } else if(cargomass[3].value=== ""){
        display.style.visibility="hidden"
        window.confirm(" input is empty Please try again");
        return null;

    } else if (isNaN(cargomass[3].value)=== true){
        window.confirm(" You entered a letter input in the wrong spot Please try again");
        display.style.visibility="hidden"
        return null ;

    } else if ( fuellevels[2].value<100000){
        window.confirm("Fuel level too LOW Fill tank");
        display.style.visibility="hidden"
        return null ;

    } else if (cargomass[3].value>5000000){
        window.confirm("Ship is too HEAVY!! Please unload");
        display.style.visibility="hidden"
        return null ;
    }
    
    
    
    else {
        colorchange.innerHTML=" READY TO LAUNCH"
        colorchange.style.color="red"
        display.style.visibility="visible"
        return display.innerHTML= `<ol>
                                     <li>${pilotname[0].value}<li>
                                     <li>${copilotname[1].value}</li>
                                     <li>${fuellevels[2].value}</li>
                                     <li>${cargomass[3].value}</li>
                                </ol> `;
    }
    
};



form.addEventListener("submit", function(e) {
    e.preventDefault();  

    validateInput(list);
   
  });



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}



function pickPlanet(planets) {
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;



