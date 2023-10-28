import { Component, AfterViewInit, OnInit } from '@angular/core';
import { MyApiService } from 'api/my-api.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements AfterViewInit, OnInit {
  eduData: any;
  certificateData: any;
  activateData: any;

  constructor(private dataApiService: MyApiService) {}

  ngOnInit(): void {
    // data edu
    this.dataApiService.getEducations().subscribe((eduData: any) => {
      this.eduData = eduData;
    });

    // data certi
    this.dataApiService.getCertificates().subscribe((certificateData: any) => {
      this.certificateData = certificateData;
    });

    // data acti
    this.dataApiService.getActivates().subscribe((activateData: any) => {
      this.activateData = activateData;
    });
  }

  ngAfterViewInit(): void {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$('.tab-item');
    const panes = $$('.tab-pane');

    const tabActive = $('.tab-item.active') as HTMLElement;
    // const line = $('.tabs .line') as HTMLElement;

    // requestIdleCallback(() => {
    //   if (tabActive) {
    //     line.style.left = tabActive.offsetLeft + 'px';
    //     line.style.width = tabActive.offsetWidth + 'px';
    //   }
    // });

    tabs.forEach((tab, index) => {
      const pane = panes[index];

      tab.addEventListener('click', () => {
        const activeTab = $('.tab-item.active') as HTMLElement;
        const activePane = $('.tab-pane.active') as HTMLElement;

        if (activeTab && activePane) {
          activeTab.classList.remove('active');
          activePane.classList.remove('active');
        }

        // if (line) {
        //   line.style.left = (tab as HTMLElement).offsetLeft + 'px';
        //   line.style.width = (tab as HTMLElement).offsetWidth + 'px';
        // }

        (tab as HTMLElement).classList.add('active');
        pane.classList.add('active');
      });
    });
  }
}
