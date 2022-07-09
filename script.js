



// Write your JavaScript code here!






window.addEventListener("load", function() {
 
   let listedPlanets;

   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
       function pickPlanet(listedPlanets){
       let planet= listedPlanets[Math.floor(Math.random()*listedPlanets.length)];
       return planet
    }
    
   })
   
});