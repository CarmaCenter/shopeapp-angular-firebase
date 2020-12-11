import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '../interfaces/users.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>
  userId: String = ''
  constructor(private afauth:AngularFireAuth) {
    this.user = afauth.user
   }
  signUp(email,password){
  return this.afauth.createUserWithEmailAndPassword(email,password)
  }
  login(email ,password){
  return this.afauth.signInWithEmailAndPassword(email,password)
  }
  logout(){
    this.afauth.signOut()
  }
}
