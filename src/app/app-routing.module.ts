import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ServicesComponent } from './Pages/services/services.component';
import { CareersComponent } from './Pages/careers/careers.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactComponent } from './Pages/contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'careers',component:CareersComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
