import { Component, OnInit } from '@angular/core';
import { firstRowConfig, secondRowConfig } from 'src/app/configs/icons.config';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss'],
})
export class DebugComponent implements OnInit {
  public firstRow = firstRowConfig;
  public secondRow = secondRowConfig;

  constructor(private readonly animationService: AnimationService) {}

  ngOnInit() {
    this.animationService.animate(
      'motion-safe:animate-fadeIn',
      '.show-on-scroll',
    );
    this.animationService.animate(
      'motion-safe:animate-fadeIcon1',
      '.show-on-scroll-icon-1',
    );
    this.animationService.animate(
      'motion-safe:animate-fadeIcon2',
      '.show-on-scroll-icon-2',
    );
    this.animationService.animate(
      'motion-safe:animate-fadeIcon3',
      '.show-on-scroll-icon-3',
    );
    this.animationService.animate(
      'motion-safe:animate-fadeIcon4',
      '.show-on-scroll-icon-4',
    );
    this.animationService.animate(
      'motion-safe:animate-fadeIcon5',
      '.show-on-scroll-icon-5',
    );
  }
}

/*

'motion-safe:animate-fadeIn'

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
*/
