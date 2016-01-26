// tworzymy osobny scope, przekazujemy sobie window i google (window.google)
(function (window, mapster) {

    // opcje mapy
    var options = mapster.MAP_OPTIONS;

    // kontener dla mapy
    var element = document.getElementById('gmap');

    // mapa
    var map = mapster.create(element, options);

    //map.zoom(18);

    // w wyniku kliknięcia dostaniemy obiekt eventu e, ktorego możemy użyć w funkcji callback
    // this pokazuje na Mapster (wyjaśnienie w Mapster.js)
    // dla dragend nie ma obiektu, jest m. in. dla click
    /*
    map._on("click", function (e) {
        console.log(this);
        console.log(e);
        console.log("clicked");
    });
    */

    var optionsClick = {
        obj: map.gMap,
        event: "click",
        callback: function (e) {
            map.logMsg(e, "clicked");
        }
    };

    var optionsDragend = {
        obj: map.gMap,
        event: "dragend",
        callback: function (e) {
            map.logMsg(e, "finished dragging");
        }
    };

    var optionsClickRight = {
        obj: map.gMap,
        event: "rightclick",
        callback: function (e) {
            map.logMsg(e, "clicked right");
        }
    };

    var optionsZoomChange = {
        obj: map.gMap,
        event: "zoom_changed",
        callback: function (e) {
            map.logMsg(e, "zoom changed");
        }
    };

    map._on(optionsClick);
    map._on(optionsDragend);
    map._on(optionsClickRight);
    map._on(optionsZoomChange);

    // możemy dodawać nowe właściwości, ktore potem będą częścią obiektu mapy (tutaj np. id)
    map.addMarker({
        lat: 37.791350,
        lng: -122.435883,
        draggable: true,
        icon: "icons/chess_orange.png",
        visible: true,
        id: 1,
        event: {
            name: "click",
            callback: function () {
                console.log("marker clicked");
            }
        }
    });

}(window, window.Mapster || (window.Mapster = {})));
