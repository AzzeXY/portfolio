import {Component, OnInit,} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting){
          entry.target.classList.add('show');
        }
        else {
          entry.target.classList.remove('show');
        }
      })
    })
    const testElements = document.querySelectorAll('.hidden');
    testElements.forEach((el) => scrollObserver.observe(el));
  }
}
