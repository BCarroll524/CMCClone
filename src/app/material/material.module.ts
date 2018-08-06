import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatTableModule,
  MatTabsModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
  ],
})
export class MaterialModule {}

