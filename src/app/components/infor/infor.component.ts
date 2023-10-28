import { Component, OnInit } from '@angular/core';
import { MyApiService } from 'api/my-api.service';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.css'],
})
export class InforComponent implements OnInit {
  inForData: any;
  techSkillData: any;
  otherSkillData: any;

  constructor(private dataApiService: MyApiService) {}
  ngOnInit(): void {
    // Gọi API và lấy dữ liệu thông tin cá nhân khi thành phần được khởi tạo
    this.dataApiService.getInfor().subscribe((inForData: any) => {
      this.inForData = inForData;
    });
    // Gọi API và lấy dữ liệu kỹ năng khi thành phần được khởi tạo
    this.dataApiService.getTechSkill().subscribe((techSkillData: any) => {
      this.techSkillData = techSkillData;
    });
    // Gọi API và lấy dữ liệu kỹ năng khác khi thành phần được khởi tạo
    this.dataApiService.getOtherSkill().subscribe((otherSkillData: any) => {
      this.otherSkillData = otherSkillData;
    });
  }
}
