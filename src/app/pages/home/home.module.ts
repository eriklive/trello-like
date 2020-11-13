import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from './cards/card.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [HomeComponent, CardComponent, ModalComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    HomeRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
