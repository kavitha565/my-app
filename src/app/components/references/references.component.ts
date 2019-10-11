import { Component, OnInit} from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {
  slides = ["https://res.cloudinary.com/dzaxkeypz/image/upload/v1564383565/Angular.png","https://res.cloudinary.com/dzaxkeypz/image/upload/v1564384236/AngularJS.jpg","https://res.cloudinary.com/dzaxkeypz/image/upload/v1564383627/HTML.png"];
  //slides = ['1','2','3','4'];
  constructor() { }

  ngOnInit() {
  }

}
