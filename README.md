Map Icons
=========

## Map Icons is deprecated [read the thread](https://github.com/scottdejonge/map-icons/issues/60)

Map Icons is an icon font for use with Google Maps API and Google Places API using SVG markers and icon labels

Map Icons makes [Google Maps Markers](https://developers.google.com/maps/documentation/javascript/reference#Marker) dynamic with control over shape, color, size, and icon easily changed using options in the marker object as well as simple [SVG Notation](http://www.w3.org/TR/SVG/paths.html#PathData) and CSS.

## Quick start

There are three quick start ways to download Map Icons available:

- [Download the latest release](https://github.com/scottdejonge/map-icons/archive/master.zip).
- Clone the repo: `git clone https://github.com/scottdejonge/map-icons.git`.

## Documentation

<http://map-icons.com>

## Updates

Keep track development updates by following [@map_icons](https://twitter.com/map_icons) on Twitter.

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Map Icons is maintained under [the Semantic Versioning guidelines](http://semver.org/).

## Creators

**Scott de Jonge**

- Twitter: [@scottdejonge](https://twitter.com/scottdejonge)
- Github: [@scottdejonge](https://github.com/scottdejonge)

## Usage
Map Icons extends the [Google Maps Marker](https://developers.google.com/maps/documentation/javascript/reference#Marker) Object to enable either an image or SVG marker to be used with the icon placed on top as a label.

### Include

Include the fonts in the `dist/font` directory as well as the `dist/css/map-icons.css` stylesheet to use icons in markup as an icon font.

To use the icons with Google Maps include `dist/js/map-icons.js`


### Classes

Icon class names are to be used with the `map-icon` class prefix.

```
<span class="map-icon map-icon-point-of-interest"></span>
```

### Styling the Icon

Styles to icons can be applied with the `.map-icon` CSS selector.


```
.map-icon {
	...
}
```

Explict styles to icons being used on a Google Map should be applied with `.map-icon-label .map-icon` CSS selector.


```
.map-icon-label .map-icon {
	font-size: 24px;
	color: #FFFFFF;
	line-height: 48px;
	text-align: center;
	white-space: nowrap;
}
```

### Creating a Marker

Markers are created just like a normal Google Maps Marker, however, the class is extended for the `map_icon_label` property to add in markup for marker labels.

**Note:** You should be creating an instance of `mapIcons.Marker` rather than `google.maps.Marker` in order for the functionality added by `map_icon_label` to work.

```
var marker = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(-27.46577, 153.02303),
	icon: {
		path: mapIcons.shapes.SQUARE_PIN,
		fillColor: '#00CCBB',
		fillOpacity: 1,
		strokeColor: '',
		strokeWeight: 0
	},
	map_icon_label: '<span class="map-icon map-icon-point-of-interest"></span>'
});
```

## License
### Font License

Applies to font files inside: `dist` directory.

Map Icons licensed under [SIL OFL 1.1](http://scripts.sil.org/OFL)

### Code License

Applies to code inside: `dist` directory.

Code licensed under [MIT License](http://opensource.org/licenses/mit-license.html)

### Documentation License

Applies to files not a part of other licenses.

Documentation licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
