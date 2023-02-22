import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { map, Observable } from "rxjs";
import { StepperOrientation } from "@angular/material/stepper";
import { BreakpointObserver } from "@angular/cdk/layout";
import {
	PassportTemplate,
	PassportVariables
} from "../../models/passport-template.model";
import PizZipUtils from "pizzip/utils";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import * as PizZip from "pizzip";

@Component({
	selector: "app-passport-page",
	templateUrl: "./passport-page.component.html",
	styleUrls: ["./passport-page.component.scss"]
})
export class PassportPageComponent {
	passportVariables = PassportVariables;
	passportTemplate = new PassportTemplate();

	stepperOrientation: Observable<StepperOrientation>;
	constructor(
		private formBuilder: FormBuilder,
		breakpointObserver: BreakpointObserver
	) {
		this.stepperOrientation = breakpointObserver
			.observe("(min-width: 800px)")
			.pipe(map(({ matches }) => (matches ? "horizontal" : "vertical")));
	}

	generate() {
		PizZipUtils.getBinaryContent(
			"/assets/passport-template.docx",
			(error: Error | null, content: string) => {
				if (error) {
					throw error;
				}

				const zip = new PizZip(content);
				const doc = new Docxtemplater(zip, {});

				doc.setData(this.passportTemplate);
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

	titularFormGroup = this.formBuilder.group({
		[PassportVariables.name_of_the_educational_institution]: [
			"",
			Validators.required
		]
	});
}
