import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.scss']
})
export class NavebarComponent implements OnInit {
isOpen: Boolean = false;
isUser: Boolean = false;
  constructor(private as :AuthService) { }

  ngOnInit(): void {
    this.as.user.subscribe(user => {
      if(user) {
        this.isUser = true;
        this.as.userId = user.uid
      }
      else {
        this.isUser = false
        this.as.userId = ''
      }
    })
  }
  toggleNavbar(){
    this.isOpen = !this.isOpen
  }
  logout(){
    this.as.logout()
    }
}
