import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateLinkComponent } from './create-link/create-link.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CreateLinkComponent
  ],
  exports: [
    CreateLinkComponent
  ]
})
export class SubmitModule { }