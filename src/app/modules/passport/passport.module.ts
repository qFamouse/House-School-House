import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassportPageComponent } from './components/passport-page/passport-page.component';
import {MatStepperModule, } from "@angular/material/stepper";
import { ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PassportPageComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule
  ]
})
export class PassportModule {}

