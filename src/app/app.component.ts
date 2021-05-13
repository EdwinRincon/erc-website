import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { Observable } from 'rxjs/internal/Observable';
import { Network } from '@ngx-pwa/offline';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {

  online$: Observable<boolean>;

  constructor(
    private swUpdate: SwUpdate,
    private network: Network,
    private messageService: MessageService
  ) {
    this.online$ = this.network.onlineChanges;
    this.online$.subscribe(async (online: boolean) => {
      if (online !== true) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No internet connection',
          life: 3000
        });
      }
    });

   }

  ngOnInit(): void {
    this.updatePWA();
  }


  // si el Service Worker está desactualizado
  // se recarga la pagina para recibir los ultimos cambios
  updatePWA(): void {
    this.swUpdate.available.subscribe(() => {
      window.location.reload();
    });
  }
}
