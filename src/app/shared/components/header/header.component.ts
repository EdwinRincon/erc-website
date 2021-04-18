import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

import { Observable } from 'rxjs/internal/Observable';
import { Network } from '@ngx-pwa/offline';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  online$: Observable<boolean>;


  constructor(
    private network: Network,
    private messageService: MessageService
  ) {
    this.online$ = this.network.onlineChanges;
    this.online$.subscribe(async (online: boolean) => {
      if (online != true) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No internet connection',
          life: 3000
        });
      }
    })
  }

  ngOnInit() {
    this.items = [
      {
        label: 'About Me',
        icon: PrimeIcons.USER
      },
      {
        label: 'Files',
        icon: PrimeIcons.FILE
      }
    ];
  }

}
