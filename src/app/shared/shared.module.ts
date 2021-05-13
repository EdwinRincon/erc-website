import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PrimengModule
  ]
})
export class SharedModule { }
