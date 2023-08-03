import { Component, OnInit } from '@angular/core';
import { firstRowConfig, secondRowConfig } from 'src/app/configs/icons.config';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss'],
})
export class DebugComponent implements OnInit {
  public firstRow = firstRowConfig;
  public secondRow = secondRowConfig;
  constructor() {}
  ngOnInit() {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('test');
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    const testElements = document.querySelectorAll('.hidden');
    testElements.forEach((el) => scrollObserver.observe(el));
  }
}
