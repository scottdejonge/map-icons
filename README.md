Map-Icons
=========

Version 1.2

Website: <http://map-icons.com/>

Demo: <http://map-icons.com/demo.html>

##Summary

Map Icons is an icon font for use with Google Maps API and Google Places API using SVG markers and icon labels

Map Icons makes [Google Maps Markers](https://developers.google.com/maps/documentation/javascript/reference#Marker) dynamic with control over shape, color, size, and icon easily changed using options in the marker object as well as simple [SVG Notation](http://www.w3.org/TR/SVG/paths.html#PathData) and CSS.

##Markers

* MAP_PIN
* SQUARE_PIN
* SHEILD
* ROUTE

##Usage
Map Icons extends the [Google Maps Marker](https://developers.google.com/maps/documentation/javascript/reference#Marker) Object to enable either an image or SVG marker to be used with the icon placed on top as a label.

###Creating a Marker

```
var marker = new Marker({
	map: map,
	title: 'Map Icons',
	position: userLocation,
	zIndex: 9,
	icon: {
		path: MAP_PIN,
		fillColor: '#0E77E9',
		fillOpacity: 1,
		strokeColor: '',
		strokeWeight: 0,
		scale: 1/2
	},
	label: '<i class="icon-parking"></i>'
});
```

###Styling the Icon
```
.marker-label {
	z-index: 99;
	position: absolute;
	display: block;
	width: 50px;
	height: 50px;
	white-space: nowrap;
	color: #FFFFFF;
	font-size: 30px;
	line-height: 50px;
	text-align: center;
}
```

##Changelog

#### Version 1.2

* Fixed Icons to be Pixel Grid Aligned
* Added User Interface Icons
* Added Marker Icons
 
#### Version 1.1

* Added Marker Shapes

#### Version 1.0

* Initial Commit

##Author

Email: <scott@map-icons.com>

Twitter: [@scottdejonge](http://twitter.com/scottdejonge)

GitHub: <https://github.com/scottdejonge>


##License
###Font License

Applies to all desktop and webfont files in the following directory: `map-icon/font/`

Map Icons licensed under [SIL OFL 1.1](http://scripts.sil.org/OFL)

###Code License

Applies to code inside: `map-icons.css`, `map-icons.js` and `map-icons-min.js`.

Code licensed under [MIT License](http://opensource.org/licenses/mit-license.html)

###Documentation License

Applies to all Map Icons project files that are not a part of the Font or Code licenses.

Documentation licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)