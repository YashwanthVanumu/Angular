import { Component } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { LocalStoreService } from '../shared/local-store.service';
import { Product } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.component.html',
  styleUrls: ['./cartview.component.css']
})
export class CartviewComponent {
  user!: string | null;
  deliveryfee: number= 26;
  govttax: number= 16;
  items : Product[]=this.cartservice.getItems();
  constructor(private cartservice: CartService, private localstore: LocalStoreService, public router : Router)
  {
     this.user=this.cartservice.getname();
     console.log(this.items);
  }
  countinc(id : any)
  {
    this.items=this.cartservice.Countinc(id , this.items);
    // this.j++;
    // for(let i=0;i<this.items.length;i++)
    // {
    //   this.items[i].price+= this.items[i].price;
    // }
  }
  countdec(id : any)
  {
    this.items=this.cartservice.Countdec(id , this.items);
  }

  getTotal(items: Array<Product>) : number {
    return this.cartservice.getTotal(items);
  }

  Totalprice(items: Array<Product>): number{
    return this.cartservice.Totalprice(items);
  }
  
  removefromcart(id : any)
  {
    this.items=this.cartservice.removefromCart(id, this.items);
    this.getTotal(this.items);
    this.Totalprice;
  }
}
