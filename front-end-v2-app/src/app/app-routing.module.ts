import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InitialPageComponent} from './initial-page/initial-page.component';
import {OptionsSectionComponent} from './options-section/options-section.component';
import {LoginComponent} from './login/login.component';
import {DoctorProfileTemplateComponent} from './doctor-profile-template/doctor-profile-template.component';


const appRoutes: Routes = [
  // {path: 'a', component: InitialPageComponent},
  // {path: 'options', component: OptionsSectionComponent},
  {path: '', component: OptionsSectionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'doctor-profile/:id', component: DoctorProfileTemplateComponent},
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
