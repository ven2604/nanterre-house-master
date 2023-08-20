import { Component } from '@angular/core';

@Component({
  selector: 'app-discription',
  templateUrl: './discription.component.html',
  styleUrls: ['./discription.component.scss']
})
export class DiscriptionComponent {
  isPopUpOpen: boolean = false;

  openPopUp() {
    this.isPopUpOpen = true;
  }

  closePopUp() {
    this.isPopUpOpen = false;
  }
}
