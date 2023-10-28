import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  formData: any = {};
  constructor(private http: HttpClient) {}

  onSubmit() {
    // Kiểm tra xem các trường đã được điền đầy đủ
    if (!this.formData.name || !this.formData.jd) {
      alert('Vui lòng điền đủ thông tin!\nPlease fill in all required fields!'); // Hiển thị thông báo khi có trường trống
      return; // Dừng quá trình gửi nếu có trường trống
    }

    // Gửi dữ liệu lên máy chủ Node/Express bằng HTTP POST request
    this.http
      .post('http://localhost:3000/contact', this.formData)
      .subscribe((response: any) => {
        // console.log('Response from server:', response);

        // Kiểm tra xem phản hồi thành công hay không
        if (
          response &&
          response.message === 'Data received and saved successfully'
        ) {
          // Hiển thị thông báo khi gửi thành công
          alert(
            'Thông tin đã được gửi! Xin trân trọng cảm ơn!\nInformation has been sent! Thank you very much!'
          );
        } else {
          // Hiển thị thông báo khi gửi không thành công
          alert('Lỗi! Vui lòng tải lại trang và thử lại!');
        }
      });
  }
}
