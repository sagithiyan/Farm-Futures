import { Component, OnInit } from '@angular/core';
import{Product} from '../product.model';
@Component({
  selector: 'app-prodcut-list',
  templateUrl: './prodcut-list.component.html',
  styleUrls: ['./prodcut-list.component.css']
})
export class ProdcutListComponent implements OnInit {
  products:Product[]=[
    new Product('test','test','https://images.rove.me/w_740,q_85/zxkbx4bnkhchecltygkx/goa-guava.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
