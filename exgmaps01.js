// konsola api goole: code.google.com/apis/console

// domyślnie dostajemy experimental API - teraz jest to wersja 3.23
// wymuszenie użycia innego api (tutaj wersja 3.21 - frozen):
// <script async defer src="https://maps.googleapis.com/maps/api/js?v=3.21&key=AIzaSyBHSG-Df1yid3lb9d_IFmqxwZgdpvtXlOc&callback=initialize"></script>

function initialize() {
    // panControl i overviewMapControl - deprecated
    var mapOptions = {
        center: new google.maps.LatLng(52.408333, 16.934167),
        zoom: 10,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.BOTTOM_LEFT
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.HYBRID
            ],
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
    };
    
    var map = new google.maps.Map(
        document.getElementById("gmap"),
        mapOptions
    );
    
    addButtons(map);
}

function addButtons(map) {
    document.getElementById("btnTerrain").addEventListener(
        "click",
        function () {
            map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
        }
    );
    
    document.getElementById("btnRoadmap").addEventListener(
        "click",
        function () {
            map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        }
    );
    
    document.getElementById("btnSatellite").addEventListener(
        "click",
        function () {
            map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
        }
    );
    
    document.getElementById("btnHybrid").addEventListener(
        "click",
        function () {
            map.setMapTypeId(google.maps.MapTypeId.HYBRID);
        }
    );
}

google.maps.event.addDomListener(window, "load", initialize); 