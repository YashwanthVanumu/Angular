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
    // function count_duplicate(a: Product[]){
    //   let counts : any = {}
     
    //   for(let i =0; i < a.length; i++){ 
    //       if (counts[a[i].quantity]){
    //       counts[a[i].quantity] += 1
    //       } else {
    //       counts[a[i].quantity] = 1
    //       }
    //      }  
    //      for (let prop in counts){
    //          if (counts[prop] >= 2){
    //              console.log(prop + " counted: " + counts[prop] + " times.")
    //          }
    //      }
    //    console.log(counts)
    //  }
     
    //  count_duplicate(this.items)
    console.log(this.items);
}
  getItems() {
    return this.items;
  }
  getlength()
  {
    return this.items.length;
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
     map((item) => item.price)
     .reduce((prev, current) => prev + current, 0);
  }

  Totalprice(items: Array<Product>) : number{
     return this.getTotal(items) + this.deliveryfee + this.govttax;
  }

  Countinc(id: any, data: any)
  {
    const objWithIdIndex = data.findIndex((obj : {id : any;}) => obj.id === id);
    if(objWithIdIndex > -1)
    {
      data[objWithIdIndex].quantity+=1;
      data[objWithIdIndex].price = data[objWithIdIndex].quantity * data[objWithIdIndex].Actualprice;
    }

    return data;
  }

  Countdec(id: any, data: any)
  {
    const objWithIdInd = data.findIndex((obj: { id: any; }) => obj.id === id);
    if(objWithIdInd > -1)
    {
      if(data[objWithIdInd].quantity>=2)
      {
        data[objWithIdInd].quantity-=1;
      data[objWithIdInd].price = data[objWithIdInd].quantity * data[objWithIdInd].Actualprice;
      }
      else
      {
        this.removefromCart(data[objWithIdInd].id, data);
      }
    }

    return data;
  }

  removefromCart(id: any, data: any)
  {
    const objWithIdIndex = data.findIndex((obj: { id: any; }) => obj.id === id);

  if (objWithIdIndex > -1) {
    this.items.splice(objWithIdIndex, 1);
  }

  return data;
  }
}
