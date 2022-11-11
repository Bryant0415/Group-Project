// //Get User Location
// //User Must Allow Location to sign in?? Ask Group 

// if ('geolocation' in navigator) {
//   console.log('geolocation is available');
//   navigator.geolocation.getCurrentPosition(position => {
//   console.log(position.coords.latitude);
//   console.log(position.coords.longitude);
//     });

// } else {
//   console.log('geolocation IS NOT available');
// }

//Get Employee Location
function employeeLocation() {

  const location = document.querySelector('#location');
  const mapLocation = document.querySelector('#map-location');

  mapLocation.href = '';
  mapLocation.textContent = '';

  //Generating Users current Position (Latitude and Longitude Coordinates)
  function current(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    //Console Loggin Coordinates Aswell
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    //Plotting Employee Location (Lat/Lon) On a Map
    location.textContent = '';
    mapLocation.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLocation.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }
    navigator.geolocation.getCurrentPosition(current);
  }

//When Employee Clicks their Lat/Lon Coordinates are presented
//When Employee Clicks on their Lat/Lon Coordinates they are directed to map of their location
document.querySelector('#employee-location').addEventListener('click', employeeLocation);
