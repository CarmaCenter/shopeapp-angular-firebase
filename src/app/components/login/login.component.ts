import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from './../../interfaces/users.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {

  constructor(private as:AuthService , private router: Router) { }

  ngOnInit(): void {
  }
  logIn(form){
    let data:User = form.value;
    this.as.login(data.email, data.password).then(result => {
      console.log(result)
      
    }).then(() => {
      this.router.navigate(['/'])
    })
  }
}
