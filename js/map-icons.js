/**
 * Map Icons created by Scott de Jonge
 *
 * @version 1.0 
 * @url http://map-icons.com
 *
 */

var Marker = function(options) {
	google.maps.Marker.apply(this, arguments);
	if (options.label) {
		this.MarkerLabel = new MarkerLabel({
			map: this.map,
			marker: this,
			text: options.label
		});
		this.MarkerLabel.bindTo('position', this, 'position');
	}
};

// Create Custom Marker Object
Marker.prototype = new google.maps.Marker();

// Custom Marker SetMap
Marker.prototype.setMap = function() {
	google.maps.Marker.prototype.setMap.apply(this, arguments);
	(this.MarkerLabel) && this.MarkerLabel.setMap.apply(this.MarkerLabel, arguments);
};
 
// Marker Label Overlay
var MarkerLabel = function(options) {
	var self = this;
	this.setValues(options);
	
	// Create the label container
	this.div = document.createElement('div');
	this.div.className = 'marker-label';
	var span = document.createElement('span');
	span.className = "marker-icon";
	this.div.appendChild(span);
 
	// Trigger the marker click handler if clicking on the label
	google.maps.event.addDomListener(this.div, 'click', function(e){
		(e.stopPropagation) && e.stopPropagation();
		google.maps.event.trigger(self.marker, 'click');
	});
};

// Create MarkerLabel Object
MarkerLabel.prototype = new google.maps.OverlayView;

// Marker Label onAdd
MarkerLabel.prototype.onAdd = function() {
     var pane = this.getPanes().overlayImage.appendChild(this.div);
     var self = this;
     this.listeners = [
          google.maps.event.addListener(this, 'position_changed', function() { self.draw(); }),
          google.maps.event.addListener(this, 'text_changed', function() { self.draw(); }),
          google.maps.event.addListener(this, 'zindex_changed', function() { self.draw(); })
     ];
};
 
// Marker Label onRemove
MarkerLabel.prototype.onRemove = function() {
     this.div.parentNode.removeChild(this.div);
     for (var i = 0, I = this.listeners.length; i < I; ++i) {
          google.maps.event.removeListener(this.listeners[i]);
     }
};
 
// Implement draw
MarkerLabel.prototype.draw = function() {
     var projection = this.getProjection();
     var position = projection.fromLatLngToDivPixel(this.get('position'));
     var div = this.div;
     div.style.left = position.x + 'px';
     div.style.top = position.y + 'px';
     div.style.display = 'block';
     div.style.zIndex = this.get('zIndex'); //ALLOW LABEL TO OVERLAY MARKER
     this.div.innerHTML = this.get('text').toString();
};