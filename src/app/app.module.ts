import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFirestoreModule } from '@angular/fire/firestore/';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { GoodsService } from './services/goods.service';
import { AuthService } from './services//auth.service';
import { environment } from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth'

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { CartComponent } from "./components/cart/cart.component";
import { AdminComponent } from "./components/admin/admin.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { GoodsComponent } from "./components/goods/goods.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { NavebarComponent } from "./components/navebar/navebar.component";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    AdminComponent,
    OrdersComponent,
    GoodsComponent,
    PageNotFoundComponent,
    NavebarComponent
    
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],

  providers: [GoodsService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
