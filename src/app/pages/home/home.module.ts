import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from './cards/card.component';

@NgModule({
  declarations: [HomeComponent, CardComponent],
  imports: [
    CommonModule,
    DragDropModule,
    HomeRoutingModule,
    MatCardModule,
    MatGridListModule,
  ],
})
export class HomeModule {}
