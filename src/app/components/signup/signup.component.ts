import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/users.interface';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
errorMessage :string = ''
  constructor(public auth : AuthService , private us:UserService , private router: Router) { }

  ngOnInit(): void {
  }
  signUp(form){
    let data:User = form.value
    this.auth.signUp(data.email,data.password)
    .then(result => {
      this.errorMessage = ''
      this.us.addNewUser(result.user.uid , data.name , data.address , data.mobile).then(()=>{
        this.router.navigate(['/'])
      })})
    .catch(err => {
      this.errorMessage = err.message
    })}}
