import { Component } from '@angular/core';
import { LocalStoreService } from '../shared/local-store.service';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  FFYimg='../assets/FFY3-removebg.png';
  Offersimg='../assets/offer-icon.png';
  user: string | null;
  constructor(private crud: LocalStoreService , private cart: CartService)
  {
      this.user=this.cart.getname();
  }

}
