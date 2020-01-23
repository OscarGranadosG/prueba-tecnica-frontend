import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems = [
    {
      path: 'open',
      title: 'Apertura Caja'
    },
    {
      path: 'sale',
      title: 'Realizar venta'
    },
    {
      path: 'close',
      title: 'Cierre Caja'
    },  
  ];

  constructor() { }

  ngOnInit() {
  }

}
