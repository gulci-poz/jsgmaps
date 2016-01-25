(function (window, google, mapster) {
    
    // opcje mapy
    mapster.MAP_OPTIONS = {
        center: {
            lat: 37.791350,
            lng: -122.435883
        },
        zoom: 10,
        disableDefaultUI: false,
        scrollwheel: true,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        maxZoom: 11,
        minZoom: 9,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        }
    };
    
    // od wersji 3.22 nie ma slidera dla Zoom
    // nie trzeba ustawiać ZoomControlStyle
    // LEFT_BOTTOM - bardziej na lewo niż BOTTOM_LEFT
    
}(window, google, window.Mapster || (window.Mapster = {})));

// Mapster - namespace wykorzystywana do utworzenia biblioteki
// jeśli Mapster nie istnieje, to tworzymy taki obiekt (namespace)