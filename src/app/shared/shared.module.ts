import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components';
import { PipesModule } from './pipes';

const exports = [ComponentsModule, PipesModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...exports],
  exports: [exports],
})
export class SharedModule {}
