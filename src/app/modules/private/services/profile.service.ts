import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Profile} from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public profile: BehaviorSubject<Profile>;

  constructor() {
    this.profile = new BehaviorSubject<Profile>({
      img: null,
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  public setProfile(profile: Profile): void {
    this.profile.next(profile);
  }

  public getProfile(): Observable<Profile> {
    return this.profile.asObservable();
  }
}
