import {
	Control,
	ControlOptions,
	latLng,
	MapOptions,
	tileLayer
} from "leaflet";
import { LeafletControlLayersConfig } from "@asymmetrik/ngx-leaflet";

let defaultTileLayer = tileLayer(
	"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
	{ maxZoom: 20, attribution: "" }
);

export const mapOptions: MapOptions = {
	layers: [defaultTileLayer],
	attributionControl: false,
	zoomControl: false,
	zoom: 9,
	center: latLng(53.8922, 27.5592) // Minsk
};

export const zoomControl = new Control.Zoom({});

export const controlLayersConfig: LeafletControlLayersConfig = {
	baseLayers: {
		"Open Street Map": defaultTileLayer,

		OpenTopoMap: tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
			maxZoom: 17,
			attribution:
				'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
		}),

		"Stadia AlidadeSmooth": tileLayer(
			"https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
			{
				attribution:
					'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
			}
		),

		"Stadia AlidadeSmooth Dark": tileLayer(
			"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
			{
				attribution:
					'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
			}
		),

		"Stadia OSMBright": tileLayer(
			"https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
			{
				attribution:
					'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
			}
		),

		"Esri WorldImagery": tileLayer(
			"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
			{
				attribution: `Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community`
			}
		)
	},

	overlays: {}
};

export const layersControlOptions: ControlOptions = {
	position: "bottomleft"
};

export const attributionControl = new Control.Attribution({
	prefix:
		'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet</a>',
	position: "bottomleft"
});
