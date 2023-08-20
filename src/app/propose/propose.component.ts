import { Component } from '@angular/core';

@Component({
  selector: 'app-propose',
  templateUrl: './propose.component.html',
  styleUrls: ['./propose.component.scss']
})
export class ProposeComponent {
  isPopUpOpen:boolean = false;

  openPopUp() {
    this.isPopUpOpen = true
  }
  
  closePopUp() {
    this.isPopUpOpen = false;
  }
}
