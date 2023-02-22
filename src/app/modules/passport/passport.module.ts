import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PassportPageComponent } from "./components/passport-page/passport-page.component";
import { MatStepperModule } from "@angular/material/stepper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@NgModule({
	declarations: [PassportPageComponent],
	imports: [
		CommonModule,
		MatStepperModule,
		ReactiveFormsModule,
		MatInputModule,
		FormsModule
	]
})
export class PassportModule {}
