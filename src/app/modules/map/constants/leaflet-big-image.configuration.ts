import * as L from "leaflet";
import { Control } from "leaflet";
import "leaflet.bigimage";

export let bigImageControl = new Control.BigImage({
	position: "topright",
	title: "Сохранить карту",
	maxScale: 10,
	minScale: 1,
	inputTitle: "Масштаб",
	downloadTitle: "Скачать"
});

declare module "leaflet" {
	namespace Control {
		interface BigImageOptions {
			/**
			 * Position the print button
			 */
			position?: "topright" | "topleft" | "bottomleft" | "bottomright";
			/**
			 * 	Sets the text which appears as the tooltip of the control button
			 */
			title?: string;
			/**
			 * Sets icon to the control button
			 */
			printControlLabel?: string;
			/**
			 * Sets classes to the control button
			 */
			printControlClasses?: Array<string>;
			/**
			 * Max image scale
			 */
			maxScale?: number;
			/**
			 * Min image scale
			 */
			minScale?: number;
			/**
			 * Title before scale input
			 */
			inputTitle?: string;
			/**
			 * Text on the download button
			 */
			downloadTitle?: string;
		}

		export class BigImage extends L.Control {
			constructor(options?: BigImageOptions);
		}
	}
}
