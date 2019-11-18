import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  MatButtonModule,
} from '@angular/material';

const MaterailModules = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
];

@NgModule({
  imports: [...MaterailModules],
  exports: [...MaterailModules]
})
export class MaterialModule {}
