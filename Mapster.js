(function (window, google) {

    // moduł
    var Mapster = (function () {
        function Mapster(element, options) {
            this.gMap = new google.maps.Map(element, options);
        }

        // funkcje wspolne dla wszstkich instancji obiektu
        // _ funkcje prywatne w bibliotece, można ich używać poza biblioteką - to tylko konwencja
        Mapster.prototype = {
            zoom: function (level) {
                if (level) {
                    this.gMap.setZoom(level);
                } else {
                    return this.gMap.getZoom();
                }
            },
            logMsg: function (e, msg) {
                console.log(msg);
                //console.log(this);
            },
            _on: function (options) {
                // normalnie this to obiekt mapy, bo event jest w obiekcie gMap
                // wywołaliśmy callback w bibliotece za pomocą call() w nowej funkcji
                // this będzie pokazywało na window (funkcja zdefiniowana w funkcji)
                // dodajemy self i this będzie pokazywała na Mapster
                var self = this;
                google.maps.event.addListener(
                    options.obj,
                    options.event,
                    function (e, msg) {
                        options.callback.call(self, e, msg);
                });
            },
            addMarker: function (options) {
                var marker;

                options.position = {
                    lat: options.lat,
                    lng: options.lng
                };

                marker = this._createMarker(options);

                if (options.event) {
                    this._on({
                        obj: marker,
                        event: options.event.name,
                        callback: options.event.callback
                    });
                }

                if (options.content) {
                    this._on({
                        obj: marker,
                        event: "click",
                        callback: function () {
                            var infoWindow = new google.maps.InfoWindow({
                                content: options.content
                            });

                            infoWindow.open(this.gMap, marker);
                        }
                    });
                }

                return marker;
            },
            _createMarker: function (options) {
                // można też zdefiniować obiekt LatLng, jeśli podamy literał, to jest on tworzony automatycznie przez google
                /*
                var latLng = new google.maps.LatLng({
                    lat: 37.791350,
                    lng: -122.435883
                });
                */

                // zbior ikon: mapicons.nicolasmollet.com

                options.map = this.gMap;
                return new google.maps.Marker(options);
            }
        };

        // zwracamy funkcję, zmienna Mapster będzie zawierała funkcję
        return Mapster;
    }());

    // obiekt funkcji Mapster będzie zawierał funkcję create()
    // factory function, zwraca instancję obiektu
    Mapster.create = function (element, options) {
        return new Mapster(element, options);
    };

    window.Mapster = Mapster;

}(window, google));
