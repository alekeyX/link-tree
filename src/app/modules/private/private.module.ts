import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PrivateRoutingModule} from './private-routing.module';
import {PrivateComponent} from './private.component';
import { HeaderComponent } from './components/header/header.component';
import { PreviewComponent } from './components/preview/preview.component';
import { LinkPanelComponent } from './components/link-panel/link-panel.component';
import { CreateLinkComponent } from './components/create-link/create-link.component';


@NgModule({
  declarations: [PrivateComponent, HeaderComponent, PreviewComponent, LinkPanelComponent, CreateLinkComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule {
}
