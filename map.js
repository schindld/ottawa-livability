/**
 * Ottawa Livability Map
 * @author Dave Schindler (dave.schindler@gmail.com)
 */
(function(olm) {

	olm.map = {};
	olm.groceryLayer = {};
	olm.placesLayer = {};
	olm.schoolLayer = {};
	olm.transitLayer = {};
    olm.wardsLayer = {};
	
	olm.initialize = function() {
		var mapOptions = {
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};
		olm.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        olm.wardsLayer = new google.maps.KmlLayer({
			url: 'https://github.com/schindld/ottawa-livability/raw/master/data/wards-data.kml'
		});
		olm.groceryLayer = new google.maps.KmlLayer({
			url: 'https://github.com/schindld/ottawa-livability/raw/master/data/grocery-data.kml'
		});
		olm.placesLayer = new google.maps.KmlLayer({
			url: 'https://github.com/schindld/ottawa-livability/raw/master/data/places-data.kml'
		});
		olm.schoolLayer = new google.maps.KmlLayer({
			url: 'https://github.com/schindld/ottawa-livability/raw/master/data/school-data.kml'
		});
		olm.transitLayer = new google.maps.KmlLayer({
			url: 'https://github.com/schindld/ottawa-livability/raw/master/data/transit-data.kml'
		});
        //olm.wardsLayer.setMap(olm.map);
		//olm.groceryLayer.setMap(olm.map);
		olm.placesLayer.setMap(olm.map);
		olm.schoolLayer.setMap(olm.map);
		//olm.transitLayer.setMap(olm.map);
		google.maps.event.addListenerOnce(olm.map, 'tilesloaded', olm.onKmlLoad);
		
	}
	
	olm.onKmlLoad = function() {
        olm.wardsLayer.setOptions({'preserveViewport':true});
		olm.groceryLayer.setOptions({'preserveViewport':true});
		olm.placesLayer.setOptions({'preserveViewport':true});
		olm.schoolLayer.setOptions({'preserveViewport':true});
		olm.transitLayer.setOptions({'preserveViewport':true});
	};

	google.maps.event.addDomListener(window, 'load', olm.initialize);
	
	olm.toggleLayer = function(layer) {
		if (!layer.getMap()) {
			layer.setMap(olm.map);
		} else {
			layer.setMap(null);
		}
	};

}(window.olm = window.olm || {}));