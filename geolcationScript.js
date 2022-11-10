//Get User Location
//User Must Allow Location to sign in?? Ask Group 
const successCallback = (position) => {
  console.log(successCallback)
}
const errorCallback = (position) => {
  
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


function initMap(){

  //Searches for location 

  var options = {
    center: {lat: 38.3460, lng: -0.4907},
    zoom: 10
  }

  //Displays location
  map = new google.maps.Map(document.getElementById('map'), options)
}
