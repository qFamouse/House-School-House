import {
	geomanRouteGlobalOptions_EWI,
	geomanRouteGlobalOptions_OSM,
	geomanRouteGlobalOptions_OTM,
	geomanRouteGlobalOptions_SAS,
	geomanRouteGlobalOptions_SASD,
	geomanRouteGlobalOptions_SOSMB
} from "../constants";

export function getRouteOptionsByMapProvider(name: string) {
	switch (name) {
		case "Open Street Map":
			return geomanRouteGlobalOptions_OSM;

		case "OpenTopoMap":
			return geomanRouteGlobalOptions_OTM;

		case "Stadia AlidadeSmooth":
			return geomanRouteGlobalOptions_SAS;

		case "Stadia AlidadeSmooth Dark":
			return geomanRouteGlobalOptions_SASD;

		case "Stadia OSMBright":
			return geomanRouteGlobalOptions_SOSMB;

		case "Esri WorldImagery":
			return geomanRouteGlobalOptions_EWI;

		default:
			throw new Error(`No settings for ${name} provider`);
	}
}
