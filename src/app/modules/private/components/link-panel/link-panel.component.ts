import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Link} from '../../models/link';
import {LinkListService} from '../../services/link-list.service';

@Component({
  selector: 'app-link-panel',
  templateUrl: './link-panel.component.html',
  styleUrls: ['./link-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkPanelComponent implements OnInit, OnDestroy {
  public linkList!: Link[];

  public readonly title: string = 'Customize your links';
  public readonly description: string = 'Add/edit/remove links below and then share all your profiles with the world!';
  public readonly letsStarted: string = `Let's get you started`;
  public readonly addNewLinkLabel: string = `Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!`;

  private destroy: Subject<void>;

  constructor(private linkListService: LinkListService) {
    this.destroy = new Subject<void>();
    this.linkList = [];
  }

  public ngOnInit(): void {
    this.linkListService.getLinkList()
      .pipe(takeUntil(this.destroy))
      .subscribe((linkList: Link[]) => {
        this.linkList = linkList;
        console.log(this.linkList);
      });
  }

  public ngOnDestroy(): void {
    this.destroy.unsubscribe();
  }

  public addNewLink(): void {
    const newLink: Link = {
      platform: '',
      link: ''
    };

    this.linkList.push(newLink);
  }

  public updateLinkList(link: Link, index: number): void {
    this.linkList[index] = link;
    this.linkListService.updateLinks(this.linkList);
  }

  public saveLinkList(): void {
    this.linkListService.updateLinks(this.linkList);
  }
}
