import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/item.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items:Item[]=[
    new Item('papaw',5),
    new Item('Beans',5),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
