import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { map, Observable } from "rxjs";
import { StepperOrientation } from "@angular/material/stepper";
import { BreakpointObserver } from "@angular/cdk/layout";
import {
	PassportTemplate,
	PassportVariables
} from "../../models/passport-template.model";

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

	titularFormGroup = this.formBuilder.group({
		[PassportVariables.name_of_the_educational_institution]: [
			"",
			Validators.required
		]
	});
}
