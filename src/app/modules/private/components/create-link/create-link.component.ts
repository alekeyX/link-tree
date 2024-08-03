import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.scss']
})
export class CreateLinkComponent implements OnInit {

  public itemNumber: number;
  public linkOptions: string[] = ['GitHub', 'Youtube', 'LinkedIn', 'Facebook'];

  constructor() {
    this.itemNumber = 0;
  }

  ngOnInit(): void {
  }

}
