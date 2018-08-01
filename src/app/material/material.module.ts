import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatTableModule,
  MatTabsModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule
  ],
})
export class MaterialModule {}

