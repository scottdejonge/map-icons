/*
 * Variables
 */

var mapCanvas = document.getElementById('map-canvas');

/*
 * Initialise
 */

function initialise() {
	google.maps.event.addDomListener(window, 'load', createMap);
};

function createMap() {

	// Center
	var center = new google.maps.LatLng(-33.9, 151.2);

	// Map Options		
	var mapOptions = {
		zoom: 11,
		center: center,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
			{stylers: [{ visibility: 'simplified' }]},
			{elementType: 'labels', stylers: [{ visibility: 'off' }]}
		]
	};
	
	// Create the Map
	map = new google.maps.Map(mapCanvas, mapOptions);

	var marker1 = new Marker({
		map: map,
		zIndex: 10,
		title: 'Map Icons',
		position:  new google.maps.LatLng(-33.890542, 151.274856),
		icon: {
			path: MAP_PIN,
			fillColor: '#0E77E9',
			fillOpacity: 1,
			strokeColor: '',
			strokeWeight: 0,
			scale: 1/2
		},
		custom_label: '<i class="map-icon-walking"></i>'
	});
	
	var marker2 = new Marker({
		map: map,
		zIndex: 20,
		title: 'Map Icons',
		position:  new google.maps.LatLng(-33.923036, 151.259052),
		icon: {
			path: SQUARE_PIN,
			fillColor: '#0E77E9',
			fillOpacity: 1,
			strokeColor: '',
			strokeWeight: 0,
			scale: 1/2
		},
		custom_label: '<i class="map-icon-cafe"></i>'
	});
	
	var marker3 = new Marker({
		map: map,
		zIndex: 30,
		title: 'Map Icons',
		position:  new google.maps.LatLng(-34.028249, 151.157507),
		icon: {
			path: SHIELD,
			fillColor: '#0E77E9',
			fillOpacity: 1,
			strokeColor: '',
			strokeWeight: 0,
			scale: 1/2
		},
		custom_label: '<i class="map-icon-car-wash"></i>'
	});
	
	var marker4 = new Marker({
		map: map,
		zIndex: 40,
		title: 'Map Icons',
		position:  new google.maps.LatLng(-33.80010128657071, 151.28747820854187),
		icon: {
			path: ROUTE,
			fillColor: '#0E77E9',
			fillOpacity: 1,
			strokeColor: '',
			strokeWeight: 0,
			scale: 1/2
		},
		custom_label: '<i class="map-icon-male"></i>'
	});
};

module.exports = {
	initialise: initialise
};