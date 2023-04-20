
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mehfil',
  templateUrl: './mehfil.component.html',
  styleUrls: ['./mehfil.component.css']
})
export class MehfilComponent {
  FFYimg='../assets/FFY3-removebg.png';
  Offersimg='../assets/offer-icon.png';
  federalbankimg='../assets/Federalbank.jpg';
  audebit='../assets/AUdebitcard.jpg';
  veg1: boolean= false;
  veg()
  {
    this.veg1= !this.veg1;
  }
  // ngOnInit(): void {
  //   window.location.reload();
  // }
}
