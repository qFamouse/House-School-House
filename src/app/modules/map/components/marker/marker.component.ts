import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-marker",
	templateUrl: "./marker.component.html",
	styleUrls: ["./marker.component.scss"]
})
export class MarkerComponent {
	@Input() iconSrc: string;
	@Input() iconTitle: string;
	@Input() iconAlt: string = "Маркер";
	@Input() MarkerTitle: string;
	@Input() MarkerDescription: string;
	@Input() isFavourite: boolean;

	@Output() onLike = new EventEmitter<MouseEvent>();
	like(event: MouseEvent) {
		this.onLike.emit(event);
		event.stopPropagation();
	}
}
