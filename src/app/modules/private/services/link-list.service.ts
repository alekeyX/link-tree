import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Link} from '../models/link';

@Injectable({
  providedIn: 'root'
})
export class LinkListService {
  public linkList: BehaviorSubject<Link[]>;

  constructor() {
    this.linkList = new BehaviorSubject<Link[]>([]);
  }

  public updateLinks(links: Link[]): void {
    this.linkList.next(links);
  }

  public getLinkList(): Observable<Link[]> {
    return this.linkList.asObservable();
  }

  public removeLink(linkIndex: number): void {
    const currentList: Link[] = this.linkList.value;
    currentList.splice(linkIndex, 1);
    this.linkList.next([...currentList]);
  }
}
