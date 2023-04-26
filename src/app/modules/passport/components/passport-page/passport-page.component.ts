import { Component } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	ValidatorFn,
	Validators
} from "@angular/forms";
import { map, Observable } from "rxjs";
import { StepperOrientation } from "@angular/material/stepper";
import { BreakpointObserver } from "@angular/cdk/layout";
import PizZipUtils from "pizzip/utils";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import * as PizZip from "pizzip";
import { titularConfig } from "../../configuration/passport-configs/titular-config";
import { vehicleConfig } from "../../configuration/passport-configs/vehicle-config";
import { generalConfig } from "../../configuration/passport-configs/general-config";
import { PassportTemplateModel } from "../../models/passport-template.model";

@Component({
	selector: "app-passport-page",
	templateUrl: "./passport-page.component.html",
	styleUrls: ["./passport-page.component.scss"]
})
export class PassportPageComponent {
	passport = new PassportTemplateModel();

	stepperOrientation: Observable<StepperOrientation>;
	generate() {
		PizZipUtils.getBinaryContent(
			"/assets/passport-template.docx",
			(error: Error | null, content: string) => {
				if (error) {
					throw error;
				}

				const zip = new PizZip(content);
				const doc = new Docxtemplater(zip, {});

				let docPassport = new PassportTemplateModel();

				for (let key in this.passport) {
					docPassport[key] = this.passport[key] || "";
				}

				doc.setData(docPassport);
				doc.render();

				const out = doc.getZip().generate({
					type: "blob",
					mimeType:
						"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
				});

				saveAs(out, "passport.docx");
			}
		);
	}

	titularFormGroup: FormGroup;
	generalFormGroup: FormGroup;
	vehicleFormGroup: FormGroup;

	unsorted() {
		return 0;
	}

	titularConfig = titularConfig;
	generalConfig = generalConfig;
	vehicleConfig = vehicleConfig;

	constructor(
		private formBuilder: FormBuilder,
		breakpointObserver: BreakpointObserver
	) {
		this.stepperOrientation = breakpointObserver
			.observe("(min-width: 800px)")
			.pipe(map(({ matches }) => (matches ? "horizontal" : "vertical")));

		this.titularFormGroup = this.generateFormGroupByConfig(titularConfig);
		this.generalFormGroup = this.generateFormGroupByConfig(generalConfig);
		this.vehicleFormGroup = this.generateFormGroupByConfig(vehicleConfig);
	}

	generateFormGroupByConfig(config: object) {
		let controls: object = {};

		for (const key in config) {
			const item = config[key];

			let control: (string | ValidatorFn | ValidatorFn[])[] = [""];
			let validators: ValidatorFn | ValidatorFn[] = [];

			if (item.required) {
				validators.push(Validators.required);
			}

			if (item.maxLength) {
				validators.push(Validators.maxLength(item.maxLength));
			}

			if (item.minLength) {
				validators.push(Validators.minLength(item.minLength));
			}

			control.push(validators);

			controls[key] = control;
		}

		return this.formBuilder.group(controls);
	}
}
