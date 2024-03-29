import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'About Me',
        icon: PrimeIcons.USER,
        routerLink: ['/about-me']
      },
      {
        label: 'Skills',
        icon: PrimeIcons.CHART_BAR,
        routerLink: ['/skills']
      },
      {
        label: 'Resume',
        icon: PrimeIcons.FILE,
        url: 'https://drive.google.com/file/d/1Ntrqn09gt7vduomzgIN54kR0_lTqPHAL/view?usp=sharing',
        target: '_self'

      }
    ];
  }

}
