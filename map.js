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
	
	olm.initialize = function() {
		var mapOptions = {
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};
		olm.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		olm.groceryLayer = new google.maps.KmlLayer({
			url: 'https://sites.google.com/site/daveschindler/home/files/grocery-data.kmz?attredirects=0&d=1'
		});
		olm.placesLayer = new google.maps.KmlLayer({
			url: 'https://sites.google.com/site/daveschindler/home/files/places-data.kmz?attredirects=0&d=1'
		});
		olm.schoolLayer = new google.maps.KmlLayer({
			url: 'https://sites.google.com/site/daveschindler/home/files/school-data.kmz?attredirects=0&d=1'
		});
		olm.transitLayer = new google.maps.KmlLayer({
			url: 'https://sites.google.com/site/daveschindler/home/files/transit-data.kmz?attredirects=0&d=1'
		});
		//olm.groceryLayer.setMap(olm.map);
		olm.placesLayer.setMap(olm.map);
		olm.schoolLayer.setMap(olm.map);
		//olm.transitLayer.setMap(olm.map);
		google.maps.event.addListenerOnce(olm.map, 'tilesloaded', olm.onKmlLoad);
		
	}
	
	olm.onKmlLoad = function() {
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