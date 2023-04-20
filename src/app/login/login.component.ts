import { Component,OnInit, Input } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { LocalStoreService } from '../shared/local-store.service';
import { MainComponent } from '../main/main.component';
import { CartService } from '../shared/cart.service';

interface  Logins {
  id: Number;
  phnnum: String;
  name: String;
  email: String;
  password: String;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myvar = '../assets/Food For You-logos.jpeg';
  my_var = '../assets/food2.jpg';
  nominord='../assets/no-minimum-order.jpg';
  liveord='../assets/live-order-tracking2.jpg';
  fastdel='../assets/fast-delivery4.png';
  swigonphn='../assets/swiggyonphn.jpg';
  playstore='../assets/play-store2.png';
  appstore='../assets/appleimg2.png';


  // searchText = '';
  // locationdetails = [
  //   'Secunderabad',
  //   'Parade grounds',
  //   'Madhapur',
  //   'Ameerpet',
  //   'Borabanda',
  // ]

  
  @Input() taskObj = { phnnum: '',name: '', email: '', password:''}

  @Input() enterObj={phonenum: '', passwd: ''}

  LogObj: any = [];

  username: string = '';

  constructor(public crudService: LocalStoreService, 
    public router: Router,public cartservice: CartService) {
      this.LoadLogin();
     }

  ngOnInit(): void {
  }

  savelogin(){
    console.log("controller");
  this.crudService.saveLogin(this.taskObj)
  .subscribe((data: {}) => {
      alert("Successfully registered");
      
    })
  
  }

 LoadLogin()
  {
    return this.crudService.getLogin().subscribe((data: {}) => {
      this.LogObj = data;

      console.log(this.LogObj)
    
    });

   }

// This is for Logging in
  enterlogin()
  {
    for(let i=0;i<this.LogObj.length;i++)
    {
      if(this.enterObj.phonenum==this.LogObj[i].phnnum && this.enterObj.passwd==this.LogObj[i].password)
      {
        this.router.navigate(['/','main']).then(()=>
        {
          window.location.reload();
        });
        this.username=this.LogObj[i].name;
      }
       this.cartservice.setname(this.username);
        console.log(this.username);
      }
    }
   
      // else
      // {
      //   alert("login failed");
      // }    
   

  } 
