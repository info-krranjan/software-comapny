import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Pages/home/home.component';
import { ServicesComponent } from './Pages/services/services.component';
import { CareersComponent } from './Pages/careers/careers.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactComponent } from './Pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    CareersComponent,
    AboutUsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
