import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    MenubarModule,
    ToastModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    FormsModule,
    MenubarModule,
    ToastModule
  ]
})
export class PrimengModule { }
