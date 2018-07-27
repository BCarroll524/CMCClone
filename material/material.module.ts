import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatTableModule,
  MatTabsModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
  ],
})
export class MaterialModule {}
