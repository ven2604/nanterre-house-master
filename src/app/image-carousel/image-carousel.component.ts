import { AfterViewInit, Component} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements AfterViewInit {
  imageUrlsMain: { url: string }[] = [
    { url: 'assets/images/jardin.webp' },
    { url: 'assets/images/exterieur1.webp' },
    { url: 'assets/images/exterieur2.webp' },
    { url: 'assets/images/exterieur3.webp' },
    { url: 'assets/images/exterieur4.webp' },
    { url: 'assets/images/salon1.webp' },
    { url: 'assets/images/salon2.webp' },
    { url: 'assets/images/salon3.webp' },
    { url: 'assets/images/cuisine1.webp' },
    { url: 'assets/images/cuisine2.webp' },
    { url: 'assets/images/chambre1_1.webp' },
    { url: 'assets/images/chambre1_2.webp' },
    { url: 'assets/images/chambre2_1.webp' },
    { url: 'assets/images/chambre3_1.webp' },
    { url: 'assets/images/chambre4_1.webp'},
    { url: 'assets/images/chambre5_1.webp'},
    { url: 'assets/images/chambre5_2.webp' },
    { url: 'assets/images/chambre5_3.webp' },
    { url: 'assets/images/salledebain1.webp' },
    { url: 'assets/images/salledebain2.webp'},
    { url: 'assets/images/toilette1.webp' },
    { url: 'assets/images/other1.webp' },
  ];

  imageUrlGallery = [
    { url: 'assets/images/salon1.webp', caption: 'Salon', section: 'salon' },
    { url: 'assets/images/cuisine1.webp', caption: 'Cuisine entière', section: 'cuisine-entiere' },
    { url: 'assets/images/chambre1_1.webp', caption: 'Chambre 1', section: 'chambre-1' },
    { url: 'assets/images/chambre2_1.webp', caption: 'Chambre 2', section: 'chambre-2' },
    { url: 'assets/images/chambre3_1.webp', caption: 'Chambre 3', section: 'chambre-3' },
    { url: 'assets/images/chambre4_1.webp', caption: 'Chambre 4', section: 'chambre-4' },
    { url: 'assets/images/chambre5_1.webp', caption: 'Chambre 5', section: 'chambre-5' },
    { url: 'assets/images/salledebain2.webp', caption: 'Salle de bain', section: 'salle-de-bain' },
    { url: 'assets/images/toilette1.webp', caption: 'Toilettes avec lavabo', section: 'toilette' },
    { url: 'assets/images/exterieur1.webp', caption: 'Extérieur', section: 'exterieur' },
    { url: 'assets/images/jardin.webp', caption: 'Jardin', section: 'jardin' },
    { url: 'assets/images/other1.webp', caption: 'Photos supplémentaires', section: 'other' },
  ];

  ngAfterViewInit(): void {
    const mainSwiper = new Swiper('.main-swiper-container', {
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 0
    });
  }

  isPopUpOpen: boolean = false;

  openPopUp() {
    this.isPopUpOpen = true;
  }

  closePopUp() {
    this.isPopUpOpen = false;
  }

  scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}