import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss']
})
export class SettingsFormComponent {
  settingsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(2)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submitForm() {
    if (this.settingsForm.valid) {
      console.log(this.settingsForm.value);
      // Send form data to the server
    }
  }
}
