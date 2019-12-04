import { Component, OnInit,ViewChild } from '@angular/core';
import { MenuItem } from '../menuItem.model';
import { SubMenuItem } from '../subMenuItem.model';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
menuItems: MenuItem[];
@ViewChild('sidenav') sidenav: MatSidenav;


  constructor() { }

  ngOnInit() {
    var subItemsArray: SubMenuItem[] = [
      new SubMenuItem("New","first"),
      new SubMenuItem("View","second"),
    ]
  this.menuItems = [
    new MenuItem("Menu1",false,subItemsArray,""),
    new MenuItem("Menu2",false,subItemsArray,""),
    new MenuItem("Menu3",false,subItemsArray,""),
    new MenuItem("Menu4",false,subItemsArray,""),
    new MenuItem("Menu5",false,subItemsArray,""),
    new MenuItem("Menu6",false,subItemsArray,""),
  ]



  }

}
