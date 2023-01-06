import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{  

  userForm!: FormGroup; 
  submitted = false; 

  constructor(private formBuilder: FormBuilder, private usersService:   UsersService, private router: Router, private location: Location) {}

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      name: ['null', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      password: ['null', Validators.required]
    });
  }

  hasError(field: string) {
    return this.userForm.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.userForm.value);
    if(this.userForm.valid) {
      console.log('submit');
      this.usersService.create(this.userForm.value).subscribe({
        next: (success) => {
          console.log('success');
          this.location.back();
        },
        error: (error) => {
          console.error(error);         
        }
      });
    }
  }

  onCancel() {
    this.submitted = false;
    this.userForm.reset();
   }  
}
