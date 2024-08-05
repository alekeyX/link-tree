import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() public selectedLinkTab: EventEmitter<boolean>;

  public linkTabActive: boolean;

  constructor() {
    this.selectedLinkTab = new EventEmitter<boolean>();
    this.linkTabActive = true;
  }

  public toggleLinkTab(activeLinkTab: boolean): void {
    this.linkTabActive = activeLinkTab;
    this.selectedLinkTab.emit(activeLinkTab);
  }
}
