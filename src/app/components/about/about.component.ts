import { Component, OnInit } from '@angular/core';
import { MyApiService } from 'api/my-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutData: any;

  constructor(private dataApiService: MyApiService) {}

  ngOnInit(): void {
    // data abouts
    this.dataApiService.getAbouts().subscribe((aboutData: any) => {
      this.aboutData = aboutData;
    });
  }
}
