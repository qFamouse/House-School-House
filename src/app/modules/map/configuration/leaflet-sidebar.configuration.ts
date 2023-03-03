import { Control } from "leaflet";
import "node_modules/leaflet-sidebar-v2/js/leaflet-sidebar.min.js";

export let sidebarControl = new Control.Sidebar({
	position: "right",
	autopan: true,
	closeButton: true,
	container: "sidebar"
});
