import { Injectable } from '@angular/core';
import { Product } from '../products';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  username: string | null='';
  deliveryfee: number= 26;
  govttax: number= 16;

  constructor() { }
  items: Product[]= [];
  addToCart(product: Product) {
    this.items.push(product);
    console.log(this.items);
  }
  getItems() {
    return this.items;
  }

  setname(data: any)
  {
     localStorage.setItem('key', data);
  }

  getname(){
    this.username=localStorage.getItem('key');
    return this.username;
  }

  getTotal(items: Array<Product>) : number{
     return items.
     map((item) => item.price * item.quantity)
     .reduce((prev, current) => prev + current, 0);
  }

  Totalprice(items: Array<Product>) : number{
     return this.getTotal(this.items) + this.deliveryfee + this.govttax;
  }

  Countinc(id: any, data: any)
  {
    const objWithIdIndex = this.items.findIndex((obj) => obj.id === id);
    if(objWithIdIndex > -1)
    {
      this.items[objWithIdIndex].quantity+=1;
      this.items[objWithIdIndex].price = this.items[objWithIdIndex].quantity * this.items[objWithIdIndex].price;
    }

    return this.items;
  }

  Countdec(id: any, data: any)
  {
    const objWithIdIndex = this.items.findIndex((obj) => obj.id === id);
    if(objWithIdIndex > -1)
    {
      this.items[objWithIdIndex].quantity-=1;
      this.items[objWithIdIndex].price = this.items[objWithIdIndex].quantity * this.items[objWithIdIndex].price;
    }

    return this.items;
  }

  removefromCart(id: any, data: any)
  {
    const objWithIdIndex = this.items.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    this.items.splice(objWithIdIndex, 1);
  }

  return this.items;
  }
}
