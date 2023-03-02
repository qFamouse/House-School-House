import * as L from "leaflet";
import {
	Control,
	latLng,
	MapOptions,
	tileLayer,
	PM,
	ControlOptions
} from "leaflet";
import { LeafletControlLayersConfig } from "@asymmetrik/ngx-leaflet";
import "@geoman-io/leaflet-geoman-free";
import "node_modules/leaflet-sidebar-v2/js/leaflet-sidebar.min.js";
import "leaflet.bigimage";

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

export const leafletControlLayersConfig: LeafletControlLayersConfig = {
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

export const leafletLayersControlOptions: ControlOptions = {
	position: "bottomleft"
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
