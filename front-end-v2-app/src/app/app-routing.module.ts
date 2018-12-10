import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InitialPageComponent} from './initial-page/initial-page.component';
import {OptionsSectionComponent} from './options-section/options-section.component';
import {LoginComponent} from './login/login.component';
import {DoctorProfileTemplateComponent} from './doctor-profile-template/doctor-profile-template.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ZipcodePageComponent} from './zipcode-page/zipcode-page.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ClientRoutes} from './routes/ClientRoutes';
import {CustomerInfoInputComponent} from './customer-info-input/customer-info-input.component';
import {InitialOptionsComponent} from './initial-options/initial-options.component';


const appRoutes: Routes = [
  {
    path: ClientRoutes.initialPage, component: InitialPageComponent,
    children: [
      {path: '', component: InitialOptionsComponent},
      {path: ClientRoutes.login, component: LoginComponent},
      {path: ClientRoutes.signUp, component: SignUpComponent},
      {path: ClientRoutes.customerInfoInput, component: CustomerInfoInputComponent},
    ]
  },
  // {path: ClientRoutes.options, component: OptionsSectionComponent},
  {path: '', component: OptionsSectionComponent},
  // {path: ClientRoutes.customerInfoInput, component: CustomerInfoInputComponent},
  // {path: ClientRoutes.login, component: LoginComponent},
  {path: ClientRoutes.doctorProfile, component: DoctorProfileTemplateComponent},
  {path: ClientRoutes.about, component: AboutPageComponent},
  {path: ClientRoutes.zipCodeNotFound, component: ZipcodePageComponent},
  // {path: ClientRoutes.signUp, component: SignUpComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
