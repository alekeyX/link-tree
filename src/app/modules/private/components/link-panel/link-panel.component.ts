import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-link-panel',
  templateUrl: './link-panel.component.html',
  styleUrls: ['./link-panel.component.scss']
})
export class LinkPanelComponent implements OnInit {

  public readonly title: string = 'Customize your links';
  public readonly description: string = 'Add/edit/remove links below and then share all your profiles with the world!';
  public readonly letsStarted: string = `Let's get you started`;
  public readonly addNewLink: string = `Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!`;

  constructor() {
  }

  ngOnInit(): void {
  }

}
