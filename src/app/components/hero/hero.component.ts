import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  heroLogo = 'https://assets.stickpng.com/images/5a1d2bba4ac6b00ff574e266.png';

  constructor() {}

  ngOnInit(): void {}
}
