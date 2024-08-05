import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {take} from 'rxjs/operators';
import {Profile} from '../../models/profile';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileDetailsComponent implements OnInit {
  public profileForm!: FormGroup;
  public selectedImage: string | ArrayBuffer | null;

  public readonly title: string = 'profile details';
  public readonly subTitle: string = 'Add your details to create a personal touch to your profile';

  constructor(private profileService: ProfileService,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
    this.selectedImage = null;
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      avatar: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.profileService.getProfile()
      .pipe()
      .subscribe((profile: Profile) => {
        this.selectedImage = profile.img;
        this.profileForm.controls.firstName.setValue(profile.firstName);
        this.profileForm.controls.lastName.setValue(profile.lastName);
        this.profileForm.controls.email.setValue(profile.email);
      });
  }

  public saveProfile(): void {
    if (this.profileForm.valid) {
      const profile: Profile = {
        img: this.selectedImage,
        firstName: this.profileForm.controls.firstName.value,
        lastName: this.profileForm.controls.lastName.value,
        email: this.profileForm.controls.email.value
      };

      this.profileService.setProfile(profile);
    } else {
      this.checkValidation();
    }
  }

  public checkValidation(): void {
    Object.keys(this.profileForm.controls).forEach(key => {
      const control = this.profileForm.get(key);
      if (control) {
        control.markAsTouched();
        control.updateValueAndValidity();
      }
    });
  }

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
        this.cdr.markForCheck();
      };

      reader.readAsDataURL(file);
    }
  }
}
