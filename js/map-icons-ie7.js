/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'map-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-train_station' : '&#xe000;',
			'icon-taxi_stand' : '&#xe001;',
			'icon-subway_station' : '&#xe002;',
			'icon-car_repair' : '&#xe003;',
			'icon-car_wash' : '&#xe004;',
			'icon-transit_station' : '&#xe005;',
			'icon-airport' : '&#xe006;',
			'icon-gas_station' : '&#xe007;',
			'icon-car_rental' : '&#xe008;',
			'icon-doctor' : '&#xe009;',
			'icon-health' : '&#xe00a;',
			'icon-dentist' : '&#xe00b;',
			'icon-hospital' : '&#xe00c;',
			'icon-pharmacy' : '&#xe00d;',
			'icon-physiotherapist' : '&#xe00e;',
			'icon-veterinary_care' : '&#xe00f;',
			'icon-point_of_interest' : '&#xe010;',
			'icon-natural_feature' : '&#xe011;',
			'icon-political' : '&#xe012;',
			'icon-embassy' : '&#xe013;',
			'icon-city_hall' : '&#xe014;',
			'icon-local_government' : '&#xe015;',
			'icon-gym' : '&#xe016;',
			'icon-spa' : '&#xe017;',
			'icon-painter' : '&#xe018;',
			'icon-night_club' : '&#xe019;',
			'icon-store' : '&#xe01a;',
			'icon-electronics_store' : '&#xe01b;',
			'icon-movie_rental' : '&#xe01c;',
			'icon-plumber' : '&#xe01d;',
			'icon-school' : '&#xe01e;',
			'icon-courthouse' : '&#xe01f;',
			'icon-amusement_park' : '&#xe020;',
			'icon-university' : '&#xe021;',
			'icon-roofing_contractor' : '&#xe022;',
			'icon-clothing_store' : '&#xe023;',
			'icon-convenience_store' : '&#xe024;',
			'icon-cemetery' : '&#xe025;',
			'icon-atm' : '&#xe026;',
			'icon-aquarium' : '&#xe027;',
			'icon-bar' : '&#xe028;',
			'icon-bank' : '&#xe029;',
			'icon-funeral_home' : '&#xe02a;',
			'icon-furniture_store' : '&#xe02b;',
			'icon-grocery_or_supermarket' : '&#xe02c;',
			'icon-lodging' : '&#xe02d;',
			'icon-finance' : '&#xe02e;',
			'icon-casino' : '&#xe02f;',
			'icon-movie_theater' : '&#xe030;',
			'icon-bowling_alley' : '&#xe031;',
			'icon-department_store' : '&#xe032;',
			'icon-park' : '&#xe033;',
			'icon-bus_station' : '&#xe034;',
			'icon-zoo' : '&#xe035;',
			'icon-stadium' : '&#xe036;',
			'icon-shopping_mall' : '&#xe037;',
			'icon-jewelry_store' : '&#xe038;',
			'icon-parking' : '&#xe039;',
			'icon-church' : '&#xe03a;',
			'icon-bakery' : '&#xe03b;',
			'icon-cafe' : '&#xe03c;',
			'icon-hindu_temple' : '&#xe03d;',
			'icon-liquor_store' : '&#xe03e;',
			'icon-pet_store' : '&#xe03f;',
			'icon-car_dealer' : '&#xe040;',
			'icon-bicycle_store' : '&#xe041;',
			'icon-mosque' : '&#xe042;',
			'icon-food' : '&#xe043;',
			'icon-restaurant' : '&#xe044;',
			'icon-place_of_worship' : '&#xe045;',
			'icon-book_store' : '&#xe046;',
			'icon-florist' : '&#xe047;',
			'icon-hardware_store' : '&#xe048;',
			'icon-synagogue' : '&#xe049;',
			'icon-campground' : '&#xe04a;',
			'icon-laundry' : '&#xe04b;',
			'icon-post_office' : '&#xe04c;',
			'icon-travel_agency' : '&#xe04d;',
			'icon-fire_station' : '&#xe04e;',
			'icon-rv_park' : '&#xe04f;',
			'icon-art_gallery' : '&#xe050;',
			'icon-insurance_agency' : '&#xe051;',
			'icon-police' : '&#xe052;',
			'icon-post_box' : '&#xe053;',
			'icon-route' : '&#xe054;',
			'icon-lawyer' : '&#xe055;',
			'icon-electrician' : '&#xe056;',
			'icon-library' : '&#xe057;',
			'icon-museum' : '&#xe058;',
			'icon-general_contractor' : '&#xe059;',
			'icon-real_estate_agency' : '&#xe05a;',
			'icon-postal_code' : '&#xe05b;',
			'icon-postal_code_prefix' : '&#xe05c;',
			'icon-accounting' : '&#xe05d;',
			'icon-locksmith' : '&#xe05e;',
			'icon-beauty_salon' : '&#xe05f;',
			'icon-hair_care' : '&#xe060;',
			'icon-moving_company' : '&#xe061;',
			'icon-storage' : '&#xe062;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};