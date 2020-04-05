import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneratorRoutingModule } from './generator-routing.module';
import { GeneratorComponent } from './generator.component';

@NgModule({
  declarations: [GeneratorComponent],
  imports: [CommonModule, GeneratorRoutingModule],
  bootstrap: [GeneratorComponent]
})
export class GeneratorModule {}
