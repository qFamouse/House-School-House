/// <reference types='leaflet-sidebar-v2' />
import { Component } from "@angular/core";
import {Map, MapOptions, Icon, IconOptions, Control} from "leaflet";
import {
	attributionControl,
	geomanToolbarOptions,
	mapOptions,
	sidebarControl,
	zoomControl
} from "../../configuration/map";
import "@geoman-io/leaflet-geoman-free";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Sign } from "../../../../shared/models/sign";
import { signs } from "../../configuration/signs";

@Component({
	selector: "app-map-page",
	templateUrl: "./map-page.component.html",
	styleUrls: ["./map-page.component.scss"]
})
export class MapPageComponent {
	map!: Map;
	mapOptions: MapOptions = mapOptions;
	signs: Sign[] = signs;
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
    // TODO: Bug with sidebar when we adding control from configuration
		// map.addControl(sidebarControl);
    new Control.Sidebar({
      position: "right",
      autopan: true,
      closeButton: true,
      container: "sidebar"
    }).addTo(map);

		this.map = map;
	}

	drawSign(iconUrl: string) {
		this.map.pm.enableDraw("Marker", {
			markerStyle: {
				icon: new Icon<IconOptions>({
					iconUrl: iconUrl,
					iconSize: [35, 35],
					iconAnchor: [20, 25]
				})
			},
			continueDrawing: false
		});
	}
}
