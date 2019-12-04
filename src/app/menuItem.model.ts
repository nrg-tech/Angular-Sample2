import { SubMenuItem } from "./subMenuItem.model";



export class MenuItem {
  name : string;
  isExpanded: boolean;
  subItems: SubMenuItem[];
  iconType: string;

  constructor(name : string, isExpanded : boolean,subItems: SubMenuItem[],iconType: string){
    this.name = name;
    this.isExpanded = isExpanded;
    this.subItems = subItems;
    this.iconType = "keyboard_arrow_right";
  

  }
 }
