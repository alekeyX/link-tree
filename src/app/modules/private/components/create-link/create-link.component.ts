import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, OnInit, Output} from '@angular/core';
import {Link} from '../../models/link';
import {LinkListService} from '../../services/link-list.service';

@Component({
  selector: 'app-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateLinkComponent implements OnInit {
  @Input() public itemNumber!: number;
  @Input() public link: Link;

  @Output() public linkData: EventEmitter<Link>;


  public linkOptions: string[] = ['GitHub', 'Youtube', 'LinkedIn', 'Facebook'];
  public linkValue: string;
  public selectedPlatform: string;

  constructor(private linkListService: LinkListService) {
    this.linkData = new EventEmitter<Link>();
    this.selectedPlatform = '';
    this.itemNumber = 0;
    this.linkValue = '';
    this.link = {
      platform: '',
      link: ''
    };
  }

  public ngOnInit(): void {
    this.linkValue = this.link.link;
    this.selectedPlatform = this.link.platform;
  }

  public updateLinkData(): void {
    this.link.link = this.linkValue;
    this.link.platform = this.selectedPlatform;

    this.linkData.emit(this.link);
  }

  public removeItem(): void {
    this.linkListService.removeLink(this.itemNumber);
  }
}
