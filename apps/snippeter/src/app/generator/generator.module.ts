import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClipboardModule } from 'ngx-clipboard';

import { GeneratorRoutingModule } from './generator-routing.module';
import { GeneratorComponent } from './generator.component';
import { NameComponent } from './components/name/name.component';
import { PrefixComponent } from './components/prefix/prefix.component';
import { DescriptionComponent } from './components/description/description.component';
import { BodyComponent } from './components/body/body.component';
import { CopySnippetComponent } from './components/copy-snippet/copy-snippet.component';
import { ConstructsComponent } from './components/constructs/constructs.component';
import { ConstructSelectorsComponent } from './components/construct-selectors/construct-selectors.component';
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
