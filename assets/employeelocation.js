navigator.geolocation.getCurrentPosition(
    function (position) {
        employeeLocation(position.coords.latitude, position.coords.longitude);
    function employeeLocation(lat, lng) {
        var employeeLatLng = {
            lat,
            lng,
        };

        var map = new google.maps.Map(document.getElementById("location"), {
        zoom: 15,
        center: employeeLatLng,
        });
        
        var marker = new google.maps.Marker({
        position: employeeLatLng,
        map: map,
        });
};
         //Console Loggin Coordinates Aswell
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }
);


