import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor() {}

  public animate(animateClass: string, selectorClass: string): void {
    const callback = function (entries: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animateClass);
        } else {
          entry.target.classList.remove(animateClass);
        }
      });
    };
    const targets = document.querySelectorAll(selectorClass);
    const observer = new IntersectionObserver(callback);

    targets.forEach(function (target) {
      target.classList.add('opacity-0');
      observer.observe(target);
    });
  }
}
