import * as L from "leaflet";
import { Control, latLng, MapOptions, tileLayer, PM } from "leaflet";
import { LeafletControlLayersConfig } from "@asymmetrik/ngx-leaflet";
import "@geoman-io/leaflet-geoman-free";
import "node_modules/leaflet-sidebar-v2/js/leaflet-sidebar.min.js";
import "leaflet.bigimage";

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

declare module "leaflet" {
	namespace Control {
		interface BigImageOptions {
			/**
			 * Position the print button
			 */
			position?: "topright" | "topleft" | "bottomleft" | "bottomright";
			/**
			 * 	Sets the text which appears as the tooltip of the control button
			 */
			title?: string;
			/**
			 * Sets icon to the control button
			 */
			printControlLabel?: string;
			/**
			 * Sets classes to the control button
			 */
			printControlClasses?: Array<string>;
			/**
			 * Max image scale
			 */
			maxScale?: number;
			/**
			 * Min image scale
			 */
			minScale?: number;
			/**
			 * Title before scale input
			 */
			inputTitle?: string;
			/**
			 * Text on the download button
			 */
			downloadTitle?: string;
		}

		export class BigImage extends L.Control {
			constructor(options?: BigImageOptions);
		}
	}
}

export let bigImageControl = new Control.BigImage({
	position: "topright",
	title: "Сохранить карту",
	maxScale: 10,
	minScale: 1,
	inputTitle: "Масштаб",
	downloadTitle: "Скачать"
});
