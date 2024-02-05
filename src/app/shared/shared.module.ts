import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './organisms/footer/footer.component';
import { NavbarComponent } from './organisms/navbar/navbar.component';
import { ImageComponent } from './atoms/image/image.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ImageComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
