import {Component, OnInit} from '@angular/core';
import {Link} from '../../models/link';
import {Profile} from '../../models/profile';
import {LinkListService} from '../../services/link-list.service';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  public linkList: Link[];
  public profile!: Profile;
  public image: string | ArrayBuffer | null;

  constructor(private linkListService: LinkListService,
              private profileService: ProfileService) {
    this.linkList = [];
    this.image = null;
  }

  public ngOnInit(): void {
    this.getLinkList();
    this.getProfile();
  }

  public getLinkList(): void {
    this.linkListService.getLinkList()
      .pipe()
      .subscribe((linkList: Link[]) => {
        this.linkList = linkList;
      });
  }

  public getProfile(): void {
    this.profileService.getProfile()
      .pipe()
      .subscribe((profile: Profile) => {
        this.profile = profile;
        // this.readFile();
      });
  }

  // public readFile(): void {
  //   if (!this.profile) {
  //     return;
  //   }
  //
  //   const file = this.profile.img;
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.image = reader.result;
  //   };
  //
  //   reader.readAsDataURL(file);
  // }
}
