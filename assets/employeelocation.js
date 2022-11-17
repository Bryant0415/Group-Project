//Get Employee Current Position in Lat/Lng Coordinates
navigator.geolocation.getCurrentPosition(
    function (position) {
        employeeLocation(position.coords.latitude, position.coords.longitude);
    function employeeLocation(lat, lng) {
        var employeeLatLng = {
            lat,
            lng,
        };

        //Opening Google Maps Api/ Plotting Employees Location
        var map = new google.maps.Map(document.getElementById("location"), {
        zoom: 15,
        center: employeeLatLng,
        });
        
        //Marker for Google Maps
        var marker = new google.maps.Marker({
        position: employeeLatLng,
        map: map,
        });
};
         //Coordinates are presented in the Console Log
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }
);


