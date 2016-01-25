// tworzymy osobny scope, przekazujemy sobie window i google (window.google)
(function (window, google, mapster) {
    
    // opcje mapy
    var options = mapster.MAP_OPTIONS;
    
    // kontener dla mapy
    var element = document.getElementById('gmap');
    
    // mapa
    var map = new google.maps.Map(element, options);
    
}(window, google, window.Mapster || (window.Mapster = {})));