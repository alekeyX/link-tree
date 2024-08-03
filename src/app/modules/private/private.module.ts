import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PrivateRoutingModule} from './private-routing.module';
import {PrivateComponent} from './private.component';
import { HeaderComponent } from './components/header/header.component';
import { PreviewComponent } from './components/preview/preview.component';
import { LinkPanelComponent } from './components/link-panel/link-panel.component';
import { CreateLinkComponent } from './components/create-link/create-link.component';
import { EmptyValidatorDirective } from './components/create-link/directives/empty-validator.directive';
import { LinkValidatorDirective } from './components/create-link/directives/link-validator.directive';


@NgModule({
  declarations: [PrivateComponent, HeaderComponent, PreviewComponent, LinkPanelComponent, CreateLinkComponent, EmptyValidatorDirective, LinkValidatorDirective],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrivateModule {
}
