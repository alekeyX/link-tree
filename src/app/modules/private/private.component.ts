import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateComponent {
  public linkPanelTabEnable: boolean;

  constructor() {
    this.linkPanelTabEnable = true;
  }


  public linkPanelTab(value: boolean): void {
    this.linkPanelTabEnable = value;
  }
}
