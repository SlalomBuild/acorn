import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.container.html',
  styleUrls: ['./home-page.container.scss']
})
export class HomePageContainer implements OnInit {
  title = 'boilerplate';

  constructor() { }

  ngOnInit() {
  }

}
