import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule],
  exports: [MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule]
})
export class MaterialModule {}
