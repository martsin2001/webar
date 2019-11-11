import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

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
