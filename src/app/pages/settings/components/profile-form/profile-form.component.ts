import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(2)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submitForm() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      // Send form data to the server
    }
  }
}
