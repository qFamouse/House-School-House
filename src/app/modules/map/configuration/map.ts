import { Control, latLng, MapOptions, tileLayer, PM } from "leaflet";
import { LeafletControlLayersConfig } from "@asymmetrik/ngx-leaflet";
import "@geoman-io/leaflet-geoman-free";

export const mapOptions: MapOptions = {
	layers: [
		tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 18,
			attribution: ""
		})
	],
	attributionControl: false,
	zoomControl: false,
	zoom: 9,
	center: latLng(53.8922, 27.5592) // Minsk
};

export const controlLayersConfig: LeafletControlLayersConfig = {
	baseLayers: {},

	overlays: {}
};

export const zoomControl = new Control.Zoom({});

export const attributionControl = new Control.Attribution({
	prefix:
		'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet</a>',
	position: "bottomright"
});

export const geomanToolbarOptions: PM.ToolbarOptions = {
	position: "topleft",
	drawMarker: false,
	drawCircleMarker: false,
	drawPolyline: false,
	drawRectangle: false,
	drawPolygon: false,
	drawCircle: false,
	drawText: false
};
