import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor() {}

  scrollToSection(elementId: string): void {
    // Thực hiện cuộc lăn chuột đến phần tử có ID tương ứng
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Download
  downloadCV(): void {
    // Thay thế URL bên dưới bằng URL thực tế của tệp CV của bạn
    const cvUrl = '../../../assets/file/cv.pdf';

    // Tạo một liên kết tải xuống
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'LeMinhTuan_CVFE_Eng.pdf'; // Tên tệp khi tải xuống
    document.body.appendChild(link);

    // Kích hoạt sự kiện click trên liên kết để bắt đầu tải xuống
    link.click();

    // Loại bỏ liên kết sau khi đã hoàn thành tải xuống
    document.body.removeChild(link);
  }

  // constructor(private renderer: Renderer2, private el: ElementRef) {}

  // scrollToSection(sectionId: string): void {
  //   const targetElement = this.el.nativeElement.querySelector(`#${sectionId}`);
  //   console.log(`#${sectionId}`);
  //   if (targetElement) {
  //     targetElement.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
}
