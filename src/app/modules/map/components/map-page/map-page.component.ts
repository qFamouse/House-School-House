/// <reference types='leaflet-sidebar-v2' />
import { Component } from "@angular/core";
import { Map, MapOptions } from "leaflet";
import {
	attributionControl,
	controlLayersConfig,
	geomanToolbarOptions,
	mapOptions,
	sidebarControl,
	zoomControl
} from "../../configuration/map";
import { LeafletControlLayersConfig } from "@asymmetrik/ngx-leaflet";
import "@geoman-io/leaflet-geoman-free";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
	selector: "app-map-page",
	templateUrl: "./map-page.component.html",
	styleUrls: ["./map-page.component.scss"]
})
export class MapPageComponent {
	mapOptions: MapOptions = mapOptions;
	controlLayersConfig: LeafletControlLayersConfig = controlLayersConfig;
	constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
		matIconRegistry.addSvgIcon(
			"github",
			domSanitizer.bypassSecurityTrustResourceUrl("assets/github.svg")
		);
	}

	onMapReady(map: Map) {
		map.addControl(zoomControl);
		map.addControl(attributionControl);
		map.pm.addControls(geomanToolbarOptions);
		map.addControl(sidebarControl);
	}
}
