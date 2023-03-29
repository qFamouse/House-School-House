/// <reference types='leaflet-sidebar-v2' />
import {
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild
} from "@angular/core";
import { Map as LeafletMap, Icon, IconOptions, Control, map } from "leaflet";
import "@geoman-io/leaflet-geoman-free";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { SignStorageService } from "../../../../shared/services/sign-storage.service";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import {
	mapOptions,
	controlLayersConfig,
	layersControlOptions,
	zoomControl,
	attributionControl
} from "../../configuration";
import { routeControlOptions } from "../../configuration";
import { geomanGlobalOptions, geomanToolbarOptions } from "../../configuration";
import { locateControl } from "../../configuration";
import { bigImageControl } from "../../configuration";
import { SignService } from "../../../../shared/services/sign.service";
import { Sign } from "../../../../shared/models/sign";

@Component({
	selector: "app-map-page",
	templateUrl: "./map-page.component.html",
	styleUrls: ["./map-page.component.scss"]
})
export class MapPageComponent implements OnInit, OnDestroy {
	@ViewChild("legendRef", { read: ElementRef })
	public legendRef: ElementRef<HTMLDivElement>;

	map!: LeafletMap;
	mapOptions = mapOptions;
	controlLayersConfig = controlLayersConfig;
	layersControlOptions = layersControlOptions;
	signs: Map<number, Sign> = null;
	constructor(
		matIconRegistry: MatIconRegistry,
		domSanitizer: DomSanitizer,
		public signStorageService: SignStorageService,
		public signService: SignService
	) {
		matIconRegistry.addSvgIcon(
			"github",
			domSanitizer.bypassSecurityTrustResourceUrl("assets/github.svg")
		);

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

	ngOnInit(): void {
		// setTimeout(this.map.invalidateSize.bind(this.map));
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
