import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatTableModule,
  MatTabsModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatAutocompleteModule
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
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule
  ],
})
export class MaterialModule {}

