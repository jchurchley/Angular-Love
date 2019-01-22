import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessHours } from './shared/businesshours';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule,
   MatCheckboxModule, 
   MatStepperModule,
   MatFormFieldModule,
   MatInputModule,
   MatRippleModule,
   MatIconModule,
   MatSelectModule,
   MatAutocompleteModule,
   MatSlideToggleModule
  } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    BusinessHours
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
