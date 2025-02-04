import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChipsekComponent } from './products/chipsek/chipsek.component';
import { GumicukrokComponent } from './products/gumicukrok/gumicukrok.component';
import { EdesGumicukrokComponent } from './products/edes-gumicukrok/edes-gumicukrok.component';
import { SavanyuGumicukrokComponent } from './products/savanyu-gumicukrok/savanyu-gumicukrok.component';
import { SosChipsekComponent } from './products/sos-chipsek/sos-chipsek.component';
import { CsiposChipsekComponent } from './products/csipos-chipsek/csipos-chipsek.component';
import { UditokComponent } from './products/uditok/uditok.component';
import { EdesUditokComponent } from './products/edes-uditok/edes-uditok.component';
import { SavanyuUditokComponent } from './products/savanyu-uditok/savanyu-uditok.component';
import { FiokomComponent } from './account/fiokom/fiokom.component';
import { KapcsolatComponent } from './contact-us/kapcsolat/kapcsolat.component';
import { KivansaglistamComponent } from './wishlist/kivansaglistam/kivansaglistam.component';
import { FooldalComponent } from './main-page/fooldal/fooldal.component';
import { KosarComponent } from './cart/kosar/kosar.component';
import { LoginComponent } from './account/login/login.component';
import { RegistrationComponent } from './account/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductlistComponent,
    
    FiokomComponent,
    KapcsolatComponent,
    FooldalComponent,
    KivansaglistamComponent,
    KosarComponent,

    ChipsekComponent,
    GumicukrokComponent,
    EdesGumicukrokComponent,
    SavanyuGumicukrokComponent,
    SosChipsekComponent,
    CsiposChipsekComponent,
    UditokComponent,
    EdesUditokComponent,
    SavanyuUditokComponent,
    FiokomComponent,
    KapcsolatComponent,
    KivansaglistamComponent,
    FooldalComponent,
    KosarComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
