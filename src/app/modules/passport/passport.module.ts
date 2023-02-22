import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PassportPageComponent } from "./components/passport-page/passport-page.component";
import { MatStepperModule } from "@angular/material/stepper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { PassportInputComponent } from "./components/passport-input/passport-input.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
	declarations: [PassportPageComponent, PassportInputComponent],
	imports: [
		CommonModule,
		MatStepperModule,
		ReactiveFormsModule,
		MatInputModule,
		FormsModule,
		MatButtonModule
	]
})
export class PassportModule {}
