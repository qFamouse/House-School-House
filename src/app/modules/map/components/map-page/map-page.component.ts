/// <reference types='leaflet-sidebar-v2' />
import { Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";
import { Map as LeafletMap, Icon, IconOptions, Control } from "leaflet";
import "@geoman-io/leaflet-geoman-free";
import { SignStorageService } from "../../../../shared/services/sign-storage.service";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import {
	mapOptions,
	controlLayersConfig,
	layersControlOptions,
	zoomControl,
	attributionControl
} from "../../constants";
import { routeControlOptions } from "../../constants";
import { geomanGlobalOptions, geomanToolbarOptions } from "../../constants";
import { locateControl } from "../../constants";
import { bigImageControl } from "../../constants";
import { SignService } from "../../../../shared/services/sign.service";
import { Sign } from "../../../../shared/models/sign";
import { assets } from "../../../../shared/constants/assets";
import { getRouteOptionsByMapProvider } from "../../utils/get-route-options-by-map-provider";

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
	controlLayersConfig = controlLayersConfig;
	layersControlOptions = layersControlOptions;
	signs: Map<number, Sign> = null;
	assets = assets;
	constructor(
		public signStorageService: SignStorageService,
		public signService: SignService
	) {
		signService.getAll().subscribe(signs => {
			this.signs = signs;
		});
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
		map.pm.setLang("ru");
		map.on("pm:create", event => this.saveMarkerToLegend(event));
		map.on("pm:remove", event => this.removeMarkerFromLegend(event));

		map.on("baselayerchange", event => {
			this.map.pm.setGlobalOptions(getRouteOptionsByMapProvider(event.name));
		});

		this.map = map;
		setTimeout(this.map.invalidateSize.bind(this.map));
	}

	drawSign(icon: string, title: string) {
		this.map.pm.enableDraw("Marker", {
			markerStyle: {
				icon: new Icon<IconOptions>({
					iconUrl: `${assets.signs.compressed}/${icon}`,
					iconAnchor: [20, 25]
				}),
				title: title
			},
			continueDrawing: false
		});
	}

	saveMarkerToLegend(event: any) {
		if (event.shape != "Marker") {
			return;
		}
		let key = event.layer.options.icon.options.iconUrl;
		let title = event.layer.options.title;
		this.signStorageService.add(key, title);
	}

	removeMarkerFromLegend(event: any) {
		if (event.shape != "Marker") {
			return;
		}
		let key = event.layer.options.icon.options.iconUrl;
		this.signStorageService.remove(key);
	}

	ngOnDestroy(): void {
		this.signStorageService.clear();
	}

	saveMapLegend() {
		html2canvas(this.legendRef.nativeElement, {
			useCORS: true
		}).then(canvas => {
			const img = canvas.toDataURL("image/png");
			saveAs(img, "legend.png");
		});
	}
}
