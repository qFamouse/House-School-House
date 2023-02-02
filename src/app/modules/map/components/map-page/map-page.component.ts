import { Component } from "@angular/core";
import { MapOptions, Map } from "leaflet";
import {
	attributionControl,
	controlLayersConfig,
	mapOptions,
	zoomControl
} from "../../configuration/map";
import { LeafletControlLayersConfig } from "@asymmetrik/ngx-leaflet";

@Component({
	selector: "app-map-page",
	templateUrl: "./map-page.component.html",
	styleUrls: ["./map-page.component.scss"]
})
export class MapPageComponent {
	mapOptions: MapOptions = mapOptions;
	controlLayersConfig: LeafletControlLayersConfig = controlLayersConfig;

	onMapReady(map: Map) {
		map.addControl(zoomControl);
		map.addControl(attributionControl);
	}
}
