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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './components/toolbar/upload/upload.component';
import { DownloadComponent } from './components/toolbar/download/download.component';
import { DownloadModalComponent } from './components/toolbar/download/download-modal/download-modal.component';

@NgModule({
  declarations: [
    GeneratorComponent,
    NameComponent,
    PrefixComponent,
    DescriptionComponent,
    BodyComponent,
    CopySnippetComponent,
    ConstructsComponent,
    ConstructSelectorsComponent,
    UploadComponent,
    DownloadComponent,
    DownloadModalComponent
  ],
  imports: [
    CommonModule,
    GeneratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ClipboardModule,
    HttpClientModule
  ],
  bootstrap: [GeneratorComponent]
})
export class GeneratorModule {}
