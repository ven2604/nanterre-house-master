import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  options: google.maps.MapOptions = {
    disableDefaultUI: true,
    draggable: false,
    center: { lat: 48.91109, lng: 2.21912 },
    zoom: 14,
    clickableIcons: false

  };

  marker = {
    position: { lat: 48.91109, lng: 2.21912 },
    options: {
      animation: google.maps.Animation.DROP,
      icon: 'assets/images/accueil.png'
    }
 }

  isPopUpMap: boolean = false;

  openPopUpMap() {
   this.isPopUpMap = true;
 }

  closePopUpMap() {
   this.isPopUpMap = false;
 }

  popUpOptions: google.maps.MapOptions = {
    disableDefaultUI: true,
    gestureHandling: 'greedy',
    center: { lat: 48.91109, lng: 2.21912 },
    maxZoom: 16,
    zoom: 12
  }

  isPopUpDisc: boolean = false;

  openPopUpDisc() {
    this.isPopUpDisc = true;
  }

  closePopUpDisc() {
    this.isPopUpDisc = false;
    this.resetParagraphState()
  }

  showFullParagraph1() {
    const paragraphContent1 = document.querySelector(".paragraph-content-1");
    const showMore1 = document.querySelector(".show-more-1")
    if (paragraphContent1) {
      paragraphContent1.classList.remove("line-clamp-3");
    }
    if (showMore1) {
      showMore1.classList.add("hidden");
    }
  }
  showFullParagraph2() {
    const paragraphContent2 = document.querySelector(".paragraph-content-2");
    const showMore2 = document.querySelector(".show-more-2")
    if (paragraphContent2) {
      paragraphContent2.classList.remove("line-clamp-3");
    }
    if (showMore2) {
      showMore2.classList.add("hidden");
    }
  }
  resetParagraphState() {
    const paragraphContent1 = document.querySelector(".paragraph-content-1");
    const showMore1 = document.querySelector(".show-more-1");
    const paragraphContent2 = document.querySelector(".paragraph-content-2");
    const showMore2 = document.querySelector(".show-more-2");

    if (paragraphContent1) {
      paragraphContent1.classList.add("line-clamp-3"); // Add back the line-clamp-3 class to hide the text
    }
    if (showMore1) {
      showMore1.classList.remove("hidden"); // Remove the hidden class from "Lire la suite" link
    }
    if (paragraphContent2) {
      paragraphContent2.classList.add("line-clamp-3"); // Add back the line-clamp-3 class to hide the text
    }
    if (showMore2) {
      showMore2.classList.remove("hidden"); // Remove the hidden class from "Lire la suite" link
    }
  }
}
