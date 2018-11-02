import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDatepicker, MatDatepickerModule, MatDividerModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenu,
  MatMenuModule, MatNativeDateModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {AppRoutingModule} from './/app-routing.module';
import {OptionsSectionComponent} from './options-section/options-section.component';
import {InitialPageComponent} from './initial-page/initial-page.component';
import {LoginComponent} from './login/login.component';
import {DoctorCardComponent} from './cards/doctor-card/doctor-card.component';
import {DoctorProfileTemplateComponent} from './doctor-profile-template/doctor-profile-template.component';
import {DoctorProfileInfoService} from './doctor-profile-template/doctor-profile-info.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AddressComponent} from './address/address.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ZipcodePageComponent} from './zipcode-page/zipcode-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from './_services/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsSectionComponent,
    InitialPageComponent,
    LoginComponent,
    DoctorCardComponent,
    DoctorProfileTemplateComponent,
    AddressComponent,
    AboutPageComponent,
    ZipcodePageComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DoctorProfileInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
