import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    MenubarModule,
    ToastModule,
    CardModule,
    DividerModule,
    ProgressSpinnerModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    FormsModule,
    MenubarModule,
    ToastModule,
    CardModule,
    DividerModule,
    ProgressSpinnerModule
  ]
})
export class PrimengModule { }
