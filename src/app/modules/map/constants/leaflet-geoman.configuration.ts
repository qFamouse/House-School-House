import { PM } from "leaflet";
import "@geoman-io/leaflet-geoman-free";

export const geomanToolbarOptions: PM.ToolbarOptions = {
	position: "topleft",
	drawMarker: false,
	drawCircleMarker: false,
	drawPolyline: false,
	drawRectangle: false,
	drawPolygon: false,
	drawCircle: false,
	drawText: false
};

export const geomanGlobalOptions: PM.GlobalOptions = {
	hintlineStyle: {
		color: "red"
	},
	templineStyle: {
		color: "green"
	},
	pathOptions: {
		color: "black"
	}
};

export const routeControlOptions: PM.CustomControlOptions = {
	name: "Polyline",
	block: "draw",
	title: "Построение маршрута",
	className: "leaflet-pm-icon-route"
};

export const geomanRouteGlobalOptions_OSM: PM.GlobalOptions = {
	hintlineStyle: {
		color: "red"
	},
	templineStyle: {
		color: "green"
	},
	pathOptions: {
		color: "black"
	}
};

export const geomanRouteGlobalOptions_OTM: PM.GlobalOptions = {
	hintlineStyle: {
		color: "red"
	},
	templineStyle: {
		color: "green"
	},
	pathOptions: {
		color: "blue"
	}
};

// TODO: Изменить цвета
export const geomanRouteGlobalOptions_SAS: PM.GlobalOptions = {
	hintlineStyle: {
		color: "red"
	},
	templineStyle: {
		color: "green"
	},
	pathOptions: {
		color: "black"
	}
};

export const geomanRouteGlobalOptions_SASD: PM.GlobalOptions = {
	hintlineStyle: {
		color: "red"
	},
	templineStyle: {
		color: "green"
	},
	pathOptions: {
		color: "black"
	}
};

export const geomanRouteGlobalOptions_SOSMB: PM.GlobalOptions = {
	hintlineStyle: {
		color: "red"
	},
	templineStyle: {
		color: "green"
	},
	pathOptions: {
		color: "black"
	}
};

export const geomanRouteGlobalOptions_EWI: PM.GlobalOptions = {
	hintlineStyle: {
		color: "red"
	},
	templineStyle: {
		color: "green"
	},
	pathOptions: {
		color: "black"
	}
};
