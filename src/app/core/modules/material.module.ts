import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

const MaterailModules = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: [...MaterailModules],
  exports: [...MaterailModules]
})
export class MatrialModule {}
