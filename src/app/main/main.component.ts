import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{

  FFYimg='../assets/FFY3-removebg.png';
  Offersimg='../assets/offer-icon.png';
  pizzaimg='../assets/Off.jpg';
  streetfoodimg='../assets/ExploreFood.jpg';
  pizzaimg2='../assets/Pizza.jpg';
  bestfoodimg='../assets/Bestfood.jfif';
  chickenbiryani='../assets/chickenbiryani.jpg';
  tandoorichicken='../assets/Tandoori-Chicken.jpg';
  meridianrest='../assets/meridianrestuarant.jpg';
  chickenpulao='../assets/Chicken-Pulao.jpg';
  playstore='../assets/play-store2.png';
  appstore='../assets/appleimg2.png';
  enjoy='../assets/EnjoyTreat.jpg';
  // @Input()
  //  username1: string = "";

   constructor() {
   }
   ngOnInit(): void {
  }
 
}
