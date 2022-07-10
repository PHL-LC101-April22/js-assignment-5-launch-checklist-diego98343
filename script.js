



// Write your JavaScript code here!

 












window.addEventListener("load", function() {
 
   let listedPlanets;

   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse=myFetch();
   listedPlanetsResponse.then(function (result) {
    listedPlanets= result;
     console.log(listedPlanets);
   }).then(function () {
    console.log(listedPlanets);
    function pickPlanet(listedPlanets) {
     return listedPlanets;
    }
      console.log(pickPlanet(listedPlanets));
   })
   
});

