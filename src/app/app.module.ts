import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalStoreService } from './shared/local-store.service';
import { MainComponent } from './main/main.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { MehfilComponent } from './mehfil/mehfil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NonVegComponent } from './non-veg/non-veg.component';
import { VegComponent } from './veg/veg.component';
import { CartviewComponent } from './cartview/cartview.component';
import { CartService } from './shared/cart.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SearchfilterPipe,
    MehfilComponent,
    NavbarComponent,
    NonVegComponent,
    VegComponent,
    CartviewComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LocalStoreService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
