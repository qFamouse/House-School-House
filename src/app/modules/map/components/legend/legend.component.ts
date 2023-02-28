import { Component } from "@angular/core";
import { SignStorageService } from "../../../../shared/services/sign-storage.service";

@Component({
	selector: "app-legend",
	templateUrl: "./legend.component.html",
	styleUrls: ["./legend.component.scss"]
})
export class LegendComponent {
	constructor(public signStorageService: SignStorageService) {}
}
