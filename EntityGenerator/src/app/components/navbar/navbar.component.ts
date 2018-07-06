import { Component, OnInit } from '@angular/core';
import {NavBarItem} from "../../entities/NavBarItem";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: NavBarItem[] = [
    {name:"home", link:"/home"},
    {name:"a", link:"/a"},
    {name:"b", link:"/b"}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelect(item: NavBarItem) {
  }

}
