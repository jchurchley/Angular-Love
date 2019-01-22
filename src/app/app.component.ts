import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _formBuilder: FormBuilder) {}

  showroomForm = this._formBuilder.group({
    name: ['', Validators.required],
    website: [''],
    phone: [''],
    addressLine1: [''],
    addressLine2: [''],
    addressLine3: [''],
    city: [''],
    county: [''],
    postcode: [''],
    country: [''],
    mondayOpen: [''] ,
    mondayClose: [''],
    cadService:false,
    disabledAccess:false,
    sampleService:false,
    onsideParking:false
});


 onSubmit() {
    console.warn(this.showroomForm.value);
  }
}