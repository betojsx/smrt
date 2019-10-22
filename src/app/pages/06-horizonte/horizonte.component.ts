import { Component, OnInit, ViewChild } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-horizonte',
  templateUrl: './horizonte.component.html',
  styleUrls: ['./horizonte.component.scss']
})
export class HorizonteComponent implements OnInit {

  title = '06. Horizonte - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/6-horizonte-hat.jpg',
    'imageTablet': 'assets/images/hats/6-horizonte-tablet.jpg',
    'image': 'assets/images/6-horizonte.jpg',
    'title': 'Capítulo 06',
    'subtitle': 'Horizonte'
  }

  private relatedInfo = [
    {
      'image': 'assets/images/7-manifesto-ismart-mobile.jpg',
      'title': '07.',
      'subtitle': 'Manifesto Ismart',
      'url': '07-manifesto'
    },
    {
      'image': 'assets/images/08-resultados-mobile.jpg',
      'title': '08.',
      'subtitle': 'Resultados 2018',
      'url': '08-resultados'
    },
    {
      'image': 'assets/images/9-lista-de-parceiros-mobile.jpg',
      'title': '09.',
      'subtitle': 'Lista de parceiros',
      'url': '09-lista-parceiros'
    }
  ]

  @ViewChild('modal01', {static: false}) modal01: ModalComponent;
  @ViewChild('modal02', {static: false}) modal02: ModalComponent;
  
  constructor(
    private testimonials: TestimonialsService,
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/6-horizonte-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '06. Horizonte - Ismart'});
  }

}
