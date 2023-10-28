import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { MyApiService } from 'api/my-api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projectData: any;
  currentIndex: number = 0;
  isReversing: boolean = false;

  constructor(
    private elRef: ElementRef,
    private dataApiService: MyApiService
  ) {}

  ngOnInit(): void {
    // Gọi API và lấy dữ liệu thông tin cá nhân khi thành phần được khởi tạo
    this.dataApiService.getProjects().subscribe((projectData: any) => {
      this.projectData = projectData;

      console.log(projectData);
    });

    // // Begin: xử lí slide
    // const slider = this.elRef.nativeElement.querySelector('.slider__list');
    // const items = this.elRef.nativeElement.querySelectorAll('.slider__item');
    // const next = this.elRef.nativeElement.querySelector('#next');
    // const prev = this.elRef.nativeElement.querySelector('#prev');
    // const dots = this.elRef.nativeElement.querySelectorAll('.slider .dots li');

    // let lengthItems = items.length - 1;
    // let active = 0;

    //
    // next.onclick = () => {
    //   active = active + 1 <= lengthItems ? active + 1 : 0;
    //   reloadSlider();
    // };

    // prev.onclick = () => {
    //   active = active - 1 >= 0 ? active - 1 : lengthItems;
    //   reloadSlider();
    // };

    // let refreshInterval = setInterval(() => {
    //   next.click();
    // }, 8000);

    // dots.forEach((li: any, key: number) => {
    //   li.addEventListener('click', () => {
    //     active = key;
    //     reloadSlider();
    //   });
    // });

    // window.onresize = (event) => {
    //   reloadSlider();
    // };
    // // End: Xử lí slide
  }

  // const reloadSlider = () => {
  //   //   slider.style.left = -items[active].offsetLeft + 'px';

  //   //   const lastActiveDot = this.elRef.nativeElement.querySelector(
  //   //     '.slider .dots li.active'
  //   //   );
  //   //   lastActiveDot.classList.remove('active');
  //   //   dots[active].classList.add('active');
  //   // };
  // }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.isReversing = true;
      this.currentIndex--;
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.projectData.length - 1) {
      this.isReversing = false;
      this.currentIndex++;
    }
  }

  ngOnDestroy(): void {
    // Clear any intervals or event listeners here
  }
}
