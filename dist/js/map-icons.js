/**
 * Map Icons created by Scott de Jonge
 *
 * @version 3.0.0
 * @url http://map-icons.com
 *
 */

var mapIcons = {};

+function () {

    'use strict';

    // Define Marker Shapes
    mapIcons.shapes = {
        MAP_PIN : 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
        SQUARE_PIN : 'M22-48h-44v43h16l6 5 6-5h16z',
        SHIELD : 'M18.8-31.8c.3-3.4 1.3-6.6 3.2-9.5l-7-6.7c-2.2 1.8-4.8 2.8-7.6 3-2.6.2-5.1-.2-7.5-1.4-2.4 1.1-4.9 1.6-7.5 1.4-2.7-.2-5.1-1.1-7.3-2.7l-7.1 6.7c1.7 2.9 2.7 6 2.9 9.2.1 1.5-.3 3.5-1.3 6.1-.5 1.5-.9 2.7-1.2 3.8-.2 1-.4 1.9-.5 2.5 0 2.8.8 5.3 2.5 7.5 1.3 1.6 3.5 3.4 6.5 5.4 3.3 1.6 5.8 2.6 7.6 3.1.5.2 1 .4 1.5.7l1.5.6c1.2.7 2 1.4 2.4 2.1.5-.8 1.3-1.5 2.4-2.1.7-.3 1.3-.5 1.9-.8.5-.2.9-.4 1.1-.5.4-.1.9-.3 1.5-.6.6-.2 1.3-.5 2.2-.8 1.7-.6 3-1.1 3.8-1.6 2.9-2 5.1-3.8 6.4-5.3 1.7-2.2 2.6-4.8 2.5-7.6-.1-1.3-.7-3.3-1.7-6.1-.9-2.8-1.3-4.9-1.2-6.4z',
        ROUTE : 'M24-28.3c-.2-13.3-7.9-18.5-8.3-18.7l-1.2-.8-1.2.8c-2 1.4-4.1 2-6.1 2-3.4 0-5.8-1.9-5.9-1.9l-1.3-1.1-1.3 1.1c-.1.1-2.5 1.9-5.9 1.9-2.1 0-4.1-.7-6.1-2l-1.2-.8-1.2.8c-.8.6-8 5.9-8.2 18.7-.2 1.1 2.9 22.2 23.9 28.3 22.9-6.7 24.1-26.9 24-28.3z',
        SQUARE : 'M-24-48h48v48h-48z',
        SQUARE_ROUNDED : 'M24-8c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v32z'
    };


    // Marker constructor
    mapIcons.Marker = function (options) {

        var Marker = function (options) {
            // draw marker (shape)
            google.maps.Marker.apply(this, [options]);
            // draw label (html)
            if (options.map_icon_label) {
                this.MarkerLabel = new mapIcons.MarkerLabel({
                        map : this.map,
                        marker : this,
                        text : options.map_icon_label
                    });
                this.MarkerLabel.bindTo('position', this, 'position');
            }
        };

		// Apply the inheritance
        mapIcons.fn.inherits(Marker, google.maps.Marker);

        // Custom Marker SetMap
        Marker.prototype.setMap = mapIcons.fn.setMap;

        return new Marker(options);
    };


	// Marker label overlay constructor
    mapIcons.MarkerLabel = function (options) {

		var Label = function (options) {

			var self = this;
			this.setValues(options);

			// Create the label container
			this.div = document.createElement('div');
			this.div.className = 'map-icon-label';

			// Trigger the marker click handler if clicking on the label
			google.maps.event.addDomListener(this.div, 'click', function (e) {
				(e.stopPropagation) && e.stopPropagation();
				google.maps.event.trigger(self.marker, 'click');
			});
		};

        Label.prototype = new google.maps.OverlayView();
        Label.prototype.onRemove = mapIcons.fn.labelOnRemove;
        Label.prototype.draw = mapIcons.fn.labelDraw;
        Label.prototype.onAdd = mapIcons.fn.labelOnAdd;

        return new Label(options);
    }


	// Helper functions
    mapIcons.fn = {

        // Function to do the inheritance properly
        // Inspired by: http://stackoverflow.com/questions/9812783/cannot-inherit-google-maps-map-v3-in-my-custom-class-javascript
        inherits : function (childCtor, parentCtor) {
            function tempCtor() {};
            tempCtor.prototype = parentCtor.prototype;
            childCtor.superClass_ = parentCtor.prototype;
            childCtor.prototype = new tempCtor();
            childCtor.prototype.constructor = childCtor;
        },

		// Custom Marker SetMap
        setMap : function (options) {
            google.maps.Marker.prototype.setMap.apply(this, [options]);
            (this.MarkerLabel) && this.MarkerLabel.setMap.apply(this.MarkerLabel, [options]);
        },

        // Marker Label onAdd
        labelOnAdd : function () {
            var pane = this.getPanes().overlayImage.appendChild(this.div);
            var self = this;

            this.listeners = [
                google.maps.event.addListener(this, 'position_changed', function () {
                    self.draw();
                }),
                google.maps.event.addListener(this, 'text_changed', function () {
                    self.draw();
                }),
                google.maps.event.addListener(this, 'zindex_changed', function () {
                    self.draw();
                })
            ];
        },

        // Marker Label onRemove
        labelOnRemove : function () {
            this.div.parentNode.removeChild(this.div);

            for (var i = 0, I = this.listeners.length; i < I; ++i) {
                google.maps.event.removeListener(this.listeners[i]);
            }
        },

        // Implement draw
        labelDraw : function () {

            var projection = this.getProjection();
            var position = projection.fromLatLngToDivPixel(this.get('position'));
            var div = this.div;

            this.div.innerHTML = this.get('text').toString();

            div.style.zIndex = this.get('zIndex'); // Allow label to overlay marker
            div.style.position = 'absolute';
            div.style.display = 'block';
            div.style.left = (position.x - (div.offsetWidth / 2)) + 'px';
            div.style.top = (position.y - div.offsetHeight) + 'px';
        }
    }

}();
