import { Control } from "leaflet";
import "leaflet.locatecontrol";

export let locateControl = new Control.Locate({
	drawCircle: true,
	initialZoomLevel: 16,
	strings: {
		title: "Моё местоположение",
		popup: undefined
	}
});
