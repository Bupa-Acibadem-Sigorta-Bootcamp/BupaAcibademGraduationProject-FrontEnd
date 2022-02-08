import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.scss'],
})
export class HomeSlideComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  images = [
    {
      path: '../../../assets/slides/slide1".png',
    },
    {
      path: '../../../assets/slides/slide2.png',
    },
    {
      path: '../../../assets/slides/slide3.png',
    },
    {
      path: '../../../assets/slides/slide4.png',
    },
    {
      path: '../../../assets/slides/slide5.png',
    },
    {
      path: '../../../assets/slides/slide6.png',
    },
    {
      path: '../../../assets/slides/slide7.png',
    },
    {
      path: '../../../assets/slides/slide8.png',
    },
    {
      path: '../../../assets/slides/slide9.png',
    }
  ];
  getImages() {
    return this.images;
  }
}
