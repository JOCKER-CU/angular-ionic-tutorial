import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm!: FormGroup;


  constructor(private router: Router, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit() {

    if (this.userForm.valid) {
      // localStorage.setItem('authToken', 'your-token');
      this.router.navigate(['/tabs/tab1']);
      console.log("Login successful");
    } else {
      alert('Invalid credentials');
    }
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter LoginPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter LoginPage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave LoginPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave LoginPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload LoginPage');
  }


}
