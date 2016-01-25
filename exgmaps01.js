// konsola api goole: code.google.com/apis/console

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(52.408333, 16.934167),
        zoom: 10
    };
    
    var map = new google.maps.Map(
        document.getElementById("gmap"),
        mapOptions
    );
}

google.maps.event.addDomListener(window, "load", initialize);