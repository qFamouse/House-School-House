import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { map, Observable } from "rxjs";
import { StepperOrientation } from "@angular/material/stepper";
import { BreakpointObserver } from "@angular/cdk/layout";
import {
	PassportTemplateModel,
	PassportVariables
} from "../../models/passport-template.model";

@Component({
	selector: "app-passport-page",
	templateUrl: "./passport-page.component.html",
	styleUrls: ["./passport-page.component.scss"]
})
export class PassportPageComponent implements OnInit {
	titularFormGroup = this.formBuilder.group({
		[PassportVariables.name_of_the_educational_institution]: [
			"",
			Validators.required
		]
	});

	passportVariables = PassportVariables;

	stepperOrientation: Observable<StepperOrientation>;
	passportTemplate: PassportTemplateModel;
	constructor(
		private formBuilder: FormBuilder,
		breakpointObserver: BreakpointObserver
	) {
		this.stepperOrientation = breakpointObserver
			.observe("(min-width: 800px)")
			.pipe(map(({ matches }) => (matches ? "horizontal" : "vertical")));
	}

	ngOnInit(): void {}
}
