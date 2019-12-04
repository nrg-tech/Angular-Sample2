import { Component, OnInit,ViewChild } from '@angular/core';
import { MenuItem } from '../menuItem.model';
import { SubMenuItem } from '../subMenuItem.model';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule, Routes, Router ,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
menuItems: MenuItem[];
@ViewChild('sidenav',{ read: true, static: false }) sidenav: MatSidenav;

  public menu1 = false;
  public notSelected=true;
  //private count=0;
  static showParent: any;
  constructor( private router: Router , public route: ActivatedRoute) { 
    //this.count=route.firstChild.children.length;
    
    route.url.subscribe(() => {
      console.log("test 1 -->"+route.firstChild.children.length);
      console.log("test 2 -->"+route.children.length);

     });
  }


  ngOnInit() {
    //this.router.navigate(['/dashboard']);
    /* var subItemsArray: SubMenuItem[] = [
      new SubMenuItem("New","dashboard"),
      new SubMenuItem("View","employeelist"),
    ] */

    this.menuItems = [
      new MenuItem("DashBoard","/landingpage"),
      new MenuItem("Employment","employeelist"),
      new MenuItem("Vendor & Customer","vendoradd"),
      new MenuItem("Category & Product","categoryadd"),
      new MenuItem("Purchase","purchaseadd"),
      new MenuItem("Sales","salesorder"),
      new MenuItem("Finance","pettycashadd"),
      new MenuItem("Stock","stockadd"),
      new MenuItem("Report","allreport"),
      new MenuItem("User Management","usermgtadd"),
      new MenuItem("Log Out","login"),

    ]



  }

}
