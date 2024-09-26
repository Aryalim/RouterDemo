import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  private formValueChangesSubscription: Subscription;

  constructor(private fb: FormBuilder) {
    // Initialize the form
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Subscribe to form value changes
    this.formValueChangesSubscription = this.registrationForm.valueChanges.subscribe(values => {
      console.log('Form values changed:', values);
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
      this.registrationForm.reset();  // Reset the form after submission
    }
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    if (this.formValueChangesSubscription) {
      this.formValueChangesSubscription.unsubscribe();
    }
  }
}


