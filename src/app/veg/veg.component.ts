import { Component } from '@angular/core';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent {
  angleup='fa-solid fa-angle-up fa-2x';
  visible: boolean =true;
  onclick()
  {
    this.visible= !this.visible;
    this.angleup= ((this.angleup === 'fa-solid fa-angle-up fa-2x') ? 'fa-solid fa-angle-down fa-2x' : 'fa-solid fa-angle-up fa-2x')
  }
}
