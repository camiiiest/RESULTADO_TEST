ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([759689.117880, 5940348.860487, 764217.339880, 5944937.095068]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cord_utm_1 = new ol.format.GeoJSON();
var features_cord_utm_1 = format_cord_utm_1.readFeatures(json_cord_utm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_cord_utm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cord_utm_1.addFeatures(features_cord_utm_1);
cluster_cord_utm_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_cord_utm_1
});
var lyr_cord_utm_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_cord_utm_1, 
                style: style_cord_utm_1,
                popuplayertitle: 'cord_utm',
                interactive: true,
                title: '<img src="styles/legend/cord_utm_1.png" /> cord_utm'
            });

lyr_OSMStandard_0.setVisible(true);lyr_cord_utm_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_cord_utm_1];
lyr_cord_utm_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_PREG': 'T_PREG', 'N_BUENAS': 'N_BUENAS', 'N_MALAS': 'N_MALAS', 'VIDEO': 'VIDEO', });
lyr_cord_utm_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_PREG': 'Range', 'N_BUENAS': 'Range', 'N_MALAS': 'Range', 'VIDEO': 'TextEdit', });
lyr_cord_utm_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_PREG': 'inline label - always visible', 'N_BUENAS': 'inline label - always visible', 'N_MALAS': 'inline label - always visible', 'VIDEO': 'inline label - always visible', });
lyr_cord_utm_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});