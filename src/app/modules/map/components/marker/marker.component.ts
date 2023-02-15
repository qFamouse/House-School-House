import { Component, Input } from "@angular/core";

@Component({
	selector: "app-marker",
	templateUrl: "./marker.component.html",
	styleUrls: ["./marker.component.scss"]
})
export class MarkerComponent {
	@Input() src: string;
	@Input() alt: string = "Маркер";
	@Input() title: string;
	@Input() description: string;
}
