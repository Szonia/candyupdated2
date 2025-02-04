import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChipsekComponent } from './products/chipsek/chipsek.component';
import { SosChipsekComponent } from './products/sos-chipsek/sos-chipsek.component';
import { CsiposChipsekComponent } from './products/csipos-chipsek/csipos-chipsek.component';
import { GumicukrokComponent } from './products/gumicukrok/gumicukrok.component';
import { EdesGumicukrokComponent } from './products/edes-gumicukrok/edes-gumicukrok.component';
import { SavanyuGumicukrokComponent } from './products/savanyu-gumicukrok/savanyu-gumicukrok.component';
import { UditokComponent } from './products/uditok/uditok.component';
import { EdesUditokComponent } from './products/edes-uditok/edes-uditok.component';
import { SavanyuUditokComponent } from './products/savanyu-uditok/savanyu-uditok.component';
import { FiokomComponent } from './account/fiokom/fiokom.component';
import { KivansaglistamComponent } from './wishlist/kivansaglistam/kivansaglistam.component';
import { KapcsolatComponent } from './contact-us/kapcsolat/kapcsolat.component';
import { FooldalComponent } from './main-page/fooldal/fooldal.component';
import { KosarComponent } from './cart/kosar/kosar.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { LoginComponent } from './account/login/login.component';


const routes: Routes = [

  { path: '', redirectTo: '/fooldal', pathMatch: 'full' },

  { path: 'fiokom', component: FiokomComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },


  { path: 'kivansaglistam', component: KivansaglistamComponent },
  { path: 'kapcsolat', component: KapcsolatComponent },
  { path: 'fooldal', component: FooldalComponent },

  { path: 'kosar', component: KosarComponent },

  { path: 'chipsek', component: ChipsekComponent },
  { path: 'sos-chipsek', component: SosChipsekComponent },
  { path: 'csipos-chipsek', component: CsiposChipsekComponent },
  { path: 'gumicukrok', component: GumicukrokComponent },
  { path: 'edes-gumicukrok', component: EdesGumicukrokComponent },
  { path: 'savanyu-gumicukrok', component: SavanyuGumicukrokComponent },
  { path: 'uditok', component: UditokComponent },
  { path: 'edes-uditok', component: EdesUditokComponent },
  { path: 'savanyu-uditok', component: SavanyuUditokComponent },
  

  // { path: '**', redirectTo: '', pathMatch: 'full' }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
