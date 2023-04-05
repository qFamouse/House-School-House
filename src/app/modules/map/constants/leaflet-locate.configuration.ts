import { Control } from "leaflet";
import "leaflet.locatecontrol";

export let locateControl = new Control.Locate({
	drawCircle: true,
	initialZoomLevel: 16,
	showPopup: false,
	strings: {
		title: "Моё местоположение"
	}
});
