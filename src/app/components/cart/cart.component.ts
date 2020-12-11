import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { shopping } from './../../interfaces/shoping.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: shopping[]= []
  constructor(private cs : CartService ) { }

  ngOnInit(): void {
    this.cs.getCart().subscribe(cart => {
      this.cart = cart.map(shopping => {
        return{
          id: shopping.payload.doc.id,
          name: shopping.payload.doc.data()['name'],
          price: shopping.payload.doc.data()['price'],
          amount: shopping.payload.doc.data()['amount']
        }
      })
    })
  }
delete(index){
  this.cs.delete(this.cart[index].id)
}
save(index){
  this.cs.save(this.cart[index].id,this.cart[index].amount)
}
}
