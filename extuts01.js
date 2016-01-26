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

    // dla danego zbioru zdarzeń uruchamiamy listenery

    var events = ["click", "dragend", "rightclick", "zoom_changed"];

    for (var i = 0; i < events.length; i++) {
        // musimy mieć osobny EC (też closure) dla każdej funkcji
        (function () {
            var evt = events[i];

            map._on({
                obj: map.gMap,
                event: evt,
                callback: function (e) {
                    map.logMsg(e, evt);
                }
            });
        }());
    }

    // możemy dodawać nowe właściwości, ktore potem będą częścią obiektu mapy (tutaj np. id)
    var marker = map.addMarker({
        lat: 37.791350,
        lng: -122.435883,
        draggable: true,
        icon: "icons/chess_orange.png",
        visible: true,
        id: 1,
        content: '<div id="markerChessSF">I love SF</div>'
        // trzeba by się zdecydować czy obsługujemy konkretne zdarzenie rozpoznając content czy też sprawdzamy istnienie jakiegokolwiek zdarzenia (Mapste.js); można dodać obsługę wielu zdarzeń (np. przekazywanie tabeli ze zdarzeniami i potem jej odczytywanie w Mapster.js)
        /*
        event: {
            name: "click",
            callback: function () {
                //console.log("marker clicked");

                var infoWindow = new google.maps.InfoWindow({
                    content: "I love SF"
                });

                // drugi argument - miejsce centrowania infoBoxa
                infoWindow.open(map.gMap, marker);
            }
        }
        */
    });

    var marker2 = map.addMarker({
        lat: 37.781350,
        lng: -122.485883,
        draggable: true,
        icon: "icons/chess_orange.png",
        visible: true,
        id: 1,
        content: '<div id="markerChessLA">I love LA</div>'
    });

}(window, window.Mapster || (window.Mapster = {})));
