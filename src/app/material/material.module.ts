import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const matModules = [
  MatSliderModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  TextFieldModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [],
  imports: [matModules],
  exports: [matModules]
})
export class MaterialModule { }
