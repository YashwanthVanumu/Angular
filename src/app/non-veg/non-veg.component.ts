import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,products } from '../products';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent implements OnInit {
product = products;
  constructor(private route: ActivatedRoute,
    private cartService: CartService)
  {

  }
  ngOnInit(): void {
  }
  angleup='fa-solid fa-angle-up fa-2x';
  visible: boolean =true;
  onclick()
  {
    this.visible= !this.visible;
    this.angleup= ((this.angleup === 'fa-solid fa-angle-up fa-2x') ? 'fa-solid fa-angle-down fa-2x' : 'fa-solid fa-angle-up fa-2x')
  }
  addtoCart(product: Product)
  {
    this.cartService.addToCart(product);
    console.log(product);
    window.alert('Your product has been added to the cart!');
  }
}


