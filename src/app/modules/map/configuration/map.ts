import { Control, latLng, MapOptions, tileLayer, PM } from "leaflet";
import { LeafletControlLayersConfig } from "@asymmetrik/ngx-leaflet";
import "@geoman-io/leaflet-geoman-free";
import "node_modules/leaflet-sidebar-v2/js/leaflet-sidebar.min.js";

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
	position: "bottomleft"
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

export let sidebarControl = new Control.Sidebar({
	position: "right",
	autopan: true,
	closeButton: true,
	container: "sidebar"
});

export const routeControlOptions: PM.CustomControlOptions = {
	name: "Polyline",
	block: "draw",
	title: "Построение маршрута",
	className: "leaflet-pm-icon-route"
};

export const geomanGlobalOptions: PM.GlobalOptions = {
	hintlineStyle: {
		color: "red"
	},
	templineStyle: {
		color: "green"
	},
	pathOptions: {
		color: "black"
	}
};
