import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const slideElement = document.getElementById('slide');

    if (nextButton && prevButton && slideElement) {
      // Gắn sự kiện cho nút 'next'
      nextButton.onclick = () => {
        let lists = slideElement.querySelectorAll('.item');
        slideElement.appendChild(lists[0]);
      };

      // Gắn sự kiện cho nút 'prev'
      prevButton.onclick = () => {
        let lists = slideElement.querySelectorAll('.item');
        slideElement.prepend(lists[lists.length - 1]);
      };

      // Tự chuyển mỗi 8 giây
      let refreshInterval = setInterval(() => {
        nextButton.click();
      }, 8000);
    } else {
      console.error(
        'One or more elements (next, prev, slide) not found in the DOM.'
      );
    }
  }
}
