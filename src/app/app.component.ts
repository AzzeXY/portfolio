import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'leportfolio';

  constructor(private readonly titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
    AOS.init();
  }
}
