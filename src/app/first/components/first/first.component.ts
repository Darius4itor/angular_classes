import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  name: string = 'Apple';
  description: string = 'Just an apple';
  price: number = 3;
  category: Category = Category.Food;
  isAvailable: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
