import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

@Component({
	selector: "app-passport-input",
	templateUrl: "./passport-input.component.html",
	styleUrls: ["./passport-input.component.scss"]
})
export class PassportInputComponent {
	private _value: string;
	@Input() set value(value: string) {
		this._value = value;
		this.valueChange.emit(value);
	}
	get value(): string {
		return this._value;
	}
	@Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

	@Input() psLabel: string = "";
	@Input() psFormControlName: string = "";
	@Input() psFormGroup: FormGroup = undefined;
	@Input() abstractControl: AbstractControl<any, any>;

	constructor() {}
}
