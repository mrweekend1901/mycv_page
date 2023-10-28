import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cv-page';

  showGoToTopButton = false; // Khai báo biến showGoToTopButton và khởi tạo là false

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffset = window.scrollY;

    if (yOffset > 200) {
      this.showGoToTopButton = true;
    } else {
      this.showGoToTopButton = false;
    }

    // console.log(yOffset);
  }

  // scroll nav
  // scrollToSection(sectionId: string): void {
  //   const targetElement = document.getElementById(sectionId);

  //   console.log(targetElement);
  //   if (targetElement) {
  //     targetElement.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
}
