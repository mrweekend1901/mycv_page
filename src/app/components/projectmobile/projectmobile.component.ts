import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-projectmobile',
  templateUrl: './projectmobile.component.html',
  styleUrls: ['./projectmobile.component.css'],
})
export class ProjectmobileComponent implements OnInit, OnDestroy {
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    const slider = this.elRef.nativeElement.querySelector('.slider__list');
    const items = this.elRef.nativeElement.querySelectorAll('.slider__item');
    const next = this.elRef.nativeElement.querySelector('#next');
    const prev = this.elRef.nativeElement.querySelector('#prev');
    const dots = this.elRef.nativeElement.querySelectorAll('.slider .dots li');

    let lengthItems = items.length - 1;
    let active = 0;

    const reloadSlider = () => {
      slider.style.left = -items[active].offsetLeft + 'px';

      const lastActiveDot = this.elRef.nativeElement.querySelector(
        '.slider .dots li.active'
      );
      lastActiveDot.classList.remove('active');
      dots[active].classList.add('active');
    };

    next.onclick = () => {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
    };

    prev.onclick = () => {
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
    };

    // let refreshInterval = setInterval(() => {
    //   next.click();
    // }, 8000);

    dots.forEach((li: any, key: number) => {
      li.addEventListener('click', () => {
        active = key;
        reloadSlider();
      });
    });

    window.onresize = (event) => {
      reloadSlider();
    };
  }

  ngOnDestroy(): void {
    // Clear any intervals or event listeners here
  }
}
