import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClipboardModule } from 'ngx-clipboard';

import { GeneratorRoutingModule } from './generator-routing.module';
import { GeneratorComponent } from './generator.component';
import { NameComponent } from './name/name.component';
import { PrefixComponent } from './prefix/prefix.component';
import { DescriptionComponent } from './description/description.component';
import { BodyComponent } from './body/body.component';
import { CopySnippetComponent } from './copy-snippet/copy-snippet.component';
import { ConstructsComponent } from './constructs/constructs.component';
import { ConstructSelectorsComponent } from './construct-selectors/construct-selectors.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GeneratorComponent,
    NameComponent,
    PrefixComponent,
    DescriptionComponent,
    BodyComponent,
    CopySnippetComponent,
    ConstructsComponent,
    ConstructSelectorsComponent
  ],
  imports: [
    CommonModule,
    GeneratorRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ClipboardModule
  ],
  bootstrap: [GeneratorComponent]
})
export class GeneratorModule { }
