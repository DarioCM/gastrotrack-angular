import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;
  constructor(private fb: FormBuilder) {}


  // from the recordDTO that we have in the backend
  /*
      --private UUID id;
      private String name;
      private String password;
      private String email;
      private Integer age;
      private String gender;
      private Double height;
      private Double weight;
      private String gastritisDuration;
  */

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      height: ['', [Validators.required, Validators.min(50), Validators.max(250)]],
      weight: ['', [Validators.required, Validators.min(20), Validators.max(300)]],
      gastritisDuration: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value 
      ? null 
      : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form submitted', this.registerForm.value);
      // TODO call the service to register the user
    }
  }



}
