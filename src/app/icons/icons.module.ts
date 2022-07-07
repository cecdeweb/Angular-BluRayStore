import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './icon-close/icon-close.component';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';



@NgModule({
  declarations: [
    IconCloseComponent,
    IconNavComponent,
    IconEditComponent,
    IconDeleteComponent
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    IconCloseComponent,
    IconNavComponent,
    IconEditComponent,
    IconDeleteComponent
  ],
})
export class IconsModule {}
