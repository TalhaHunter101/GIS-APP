require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/layers/FeatureLayer",
    "esri/widgets/Search"
  ], function(Map, MapView, BasemapToggle, BasemapGallery, FeatureLayer, Search) {
      
    var map = new Map({
      basemap: "topo-vector"
    });
    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [74.329376, 31.582045], // longitude, latitude
      zoom: 13
    });


    var search = new Search({
      view: view
    });
    view.ui.add(search, "top-right");
    var basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "satellite"
      });

      view.ui.add(basemapToggle, "bottom-right");

      var basemapGallery = new BasemapGallery({
        view: view,
        source: {
          portal: {
            url: "http://www.arcgis.com",
            useVectorBasemaps: false, // Load vector tile basemap group
          },
        } 
      });

      view.ui.add(basemapGallery, "top-right"); // Add to the view
   // Trailheads feature layer (points)
   var trailheadsLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
  });

  map.add(trailheadsLayer);
  
  // Trails feature layer (lines)
  var trailsLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
  });

  map.add(trailsLayer, 0);

  // Parks and open spaces (polygons)
  var parksLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
  });

  map.add(parksLayer, 0);

  });

  