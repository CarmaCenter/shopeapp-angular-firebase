import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { Good } from "src/app/interfaces/good.interface";
import { CartService } from 'src/app/services/cart.service';
import { GoodsService } from 'src/app/services/goods.service';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit,OnDestroy {
  goods: Good[] = [];
  add: number = -1
  goodsObservable: Subscription
  constructor(public gs: GoodsService, private cs : CartService) {}

  ngOnInit() {
    this.goodsObservable = this.gs.getAllGoods().subscribe(data => {
      this.goods = data.map(element => {
        return {
          id: element.payload.doc.id,
          name: element.payload.doc.data()['name'],
          price: element.payload.doc.data()['price'],
          photoUrl: element.payload.doc.data()['photoUrl']

        }
      })
    })
  }
  ngOnDestroy(){
    this.goodsObservable.unsubscribe()
  }
  addToCart(index:number) {
    this.add = +index
  }
  buy(amount:number){
    let selectedGoods = this.goods[this.add]
    let data = {
      name : selectedGoods.name,
      amount : +amount,
      price : selectedGoods.price
    }
    this.cs.addcart(data).then(() => {
      this.add = -1
    })
  }
}
