import { Component } from "@angular/core";
import { latLng, MapOptions, tileLayer } from "leaflet";

@Component({
	selector: "app-map-page",
	templateUrl: "./map-page.component.html",
	styleUrls: ["./map-page.component.scss"]
})
export class MapPageComponent {
	options: MapOptions = {
		layers: [
			tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				maxZoom: 18,
				attribution: "..."
			})
		],
		zoom: 5,
		center: latLng(46.879966, -121.726909)
	};
}
