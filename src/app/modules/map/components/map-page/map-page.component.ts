/// <reference types='leaflet-sidebar-v2' />
import { Component } from "@angular/core";
import {
	Map as LeafletMap,
	MapOptions,
	Icon,
	IconOptions,
	Control
} from "leaflet";
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
	map!: LeafletMap;
	mapOptions: MapOptions = mapOptions;
	signs: Sign[] = signs;
	constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
		matIconRegistry.addSvgIcon(
			"github",
			domSanitizer.bypassSecurityTrustResourceUrl("assets/github.svg")
		);
	}

	onMapReady(map: LeafletMap) {
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

		map.on("pm:remove", (event: any) => {
			if (event.shape != "Marker") {
				return;
			}

			let key = event.layer.options.icon.options.iconUrl;
			let value = this.signStorage.get(key);
			if (value.count > 1) {
				value.count--;
			} else {
				this.signStorage.delete(key);
			}
		});

		map.on("pm:create", (event: any) => {
			if (event.shape != "Marker") {
				return;
			}

			let key = event.layer.options.icon.options.iconUrl;
			let value = this.signStorage.get(key);
			if (value) {
				value.count++;
			} else {
				this.signStorage.set(key, {
					count: 1,
					title: event.layer.options.title
				});
			}

			console.log(this.signStorage);
		});

		map.pm.Toolbar.copyDrawControl("Polyline", {
			name: "Polyline",
			block: "draw",
			title: "Построение маршрута",
			className: "leaflet-pm-icon-route"
		});

		map.pm.setGlobalOptions({
			hintlineStyle: {
				color: "red"
			},
			templineStyle: {
				color: "green"
			},
			pathOptions: {
				color: "black"
			}
		});
	}

	signStorage = new Map<
		string,
		{
			count: number;
			title: string;
		}
	>();

	drawSign(iconUrl: string, title: string) {
		this.map.pm.enableDraw("Marker", {
			markerStyle: {
				icon: new Icon<IconOptions>({
					iconUrl: iconUrl,
					iconSize: [35, 35],
					iconAnchor: [20, 25]
				}),
				title: title
			},
			continueDrawing: false
		});
	}
}
