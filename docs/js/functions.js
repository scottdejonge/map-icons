/**
 * Copyright 2013 Scott de Jonge
 *
 * @version 1.0
 * @url map-icons.com
 *
 */
 
$(document).ready( function() {
	prettyPrint();
	
	$(window).scroll(function() {
	    if($(this).scrollTop() >= '100' ) {
	    	$('.navbar').addClass('navbar-inverse');
	    } else {
	    	$('.navbar').removeClass('navbar-inverse');
	    }
	});
});
 

// Global Variables
var map;
var mapBounds;
var markers = [];
var sidebar = document.getElementById('sidebar');

function initialize() {
	
	// Get User Location
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(createMap, function() {
			handleNoGeolocation(true);
		});
	} else {
		browserSupportFlag = false;
		handleNoGeolocation(browserSupportFlag);
	}
	
	// Create Map at User Position
	function createMap(position) {	
		userLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		mapCenter = new google.maps.LatLng(position.coords.latitude-0.003, position.coords.longitude-0.003);
		
		// Google Map Options		
		var mapOptions = {
			zoom: 16,
			center: mapCenter,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			mapTypeControl: false,
			panControl: false,
			zoomControl: false,
			scaleControl: false,
			streetViewControl: false,
			styles: [
				{stylers: [{ visibility: 'simplified' }]},
				{elementType: 'labels', stylers: [{ visibility: 'off' }]}
			]
		}
		
		// Create the Map
		map = new google.maps.Map(document.getElementById('map'), mapOptions);
		
		// Create the Marker
		var marker = new Marker({
			map: map,
			title: 'Map Icons',
			position: userLocation,
			zIndex: 9,
			icon: {
				path: SQUARE_PIN,
				fillColor: '#428BCA',
				fillOpacity: 1,
				strokeColor: '',
				strokeWeight: 0,
				scale: 1/2
			},
			label: '<i class="map-icon-male"></i>'
		});
	}
}


/*
function loadScript() {
	// Google Maps API
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = '/web/20150804042139/https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&sensor=true&' + 'callback=initialize';
	document.body.appendChild(script);
}
*/

google.maps.event.addDomListener(window, 'load', initialize);