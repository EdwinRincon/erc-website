import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {

  

  constructor(
    private swUpdate: SwUpdate
  ) {}

  ngOnInit() {
    this.updatePWA();
  }


  // si el Service Worker está desactualizado
  // se recarga la pagina para recibir los ultimos cambios
  updatePWA() {
    this.swUpdate.available.subscribe(() => {
      window.location.reload();
    });
  }
}
