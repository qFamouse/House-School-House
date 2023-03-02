/// <reference types='leaflet-sidebar-v2' />
import { Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";
import { Map as LeafletMap, Icon, IconOptions, Control } from "leaflet";
import {
	attributionControl,
	bigImageControl,
	geomanGlobalOptions,
	geomanToolbarOptions,
	leafletControlLayersConfig,
	leafletLayersControlOptions,
	locateControl,
	mapOptions,
	routeControlOptions,
	sidebarControl,
	zoomControl
} from "../../configuration/map";
import "@geoman-io/leaflet-geoman-free";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Sign } from "../../../../shared/models/sign";
import { signs } from "../../configuration/signs";
import { SignStorageService } from "../../../../shared/services/sign-storage.service";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

@Component({
	selector: "app-map-page",
	templateUrl: "./map-page.component.html",
	styleUrls: ["./map-page.component.scss"]
})
export class MapPageComponent implements OnDestroy {
	@ViewChild("legendRef", { read: ElementRef })
	public legendRef: ElementRef<HTMLDivElement>;

	map!: LeafletMap;
	mapOptions = mapOptions;
	leafletControlLayersConfig = leafletControlLayersConfig;
	leafletLayersControlOptions = leafletLayersControlOptions;
	signs: Sign[] = signs;
	constructor(
		matIconRegistry: MatIconRegistry,
		domSanitizer: DomSanitizer,
		public signStorageService: SignStorageService
	) {
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
		map.addControl(bigImageControl);
		map.addControl(locateControl);

		map.pm.Toolbar.copyDrawControl("Polyline", routeControlOptions);
		map.pm.setGlobalOptions(geomanGlobalOptions);
		map.on("pm:create", event => this.pmCreate(event));
		map.on("pm:remove", event => this.pmRemove(event));

		this.map = map;
	}

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

	pmCreate(event: any) {
		if (event.shape != "Marker") {
			return;
		}
		let key = event.layer.options.icon.options.iconUrl;
		let title = event.layer.options.title;
		this.signStorageService.add(key, title);
	}

	pmRemove(event: any) {
		if (event.shape != "Marker") {
			return;
		}
		let key = event.layer.options.icon.options.iconUrl;
		this.signStorageService.remove(key);
	}

	ngOnDestroy(): void {
		this.signStorageService.clear();
	}

	legend2image() {
		html2canvas(this.legendRef.nativeElement, {
			useCORS: true
		}).then(canvas => {
			const img = canvas.toDataURL("image/png");
			saveAs(img, "legend.png");
		});
	}
}
