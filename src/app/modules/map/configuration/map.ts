import { Control, latLng, MapOptions, tileLayer } from "leaflet";
import { LeafletControlLayersConfig } from "@asymmetrik/ngx-leaflet";

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
