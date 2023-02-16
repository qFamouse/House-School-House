import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/material/stepper";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-passport-page',
  templateUrl: './passport-page.component.html',
  styleUrls: ['./passport-page.component.scss']
})
export class PassportPageComponent {
  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private formBuilder: FormBuilder, breakpointObserver:BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}
