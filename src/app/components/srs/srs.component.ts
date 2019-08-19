import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropListContainer, CdkDropList} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-srs',
  templateUrl: './srs.component.html',
  styleUrls: ['./srs.component.scss']
})
export class SrsComponent implements OnInit {
  items:Array<String> = ["Apple","Mango","Gauva","Pineapple","Dragon Fruit"];
  all = [1,2,3,4,5,6,7,8,9];
  even = [10];
  constructor() { }
  drop(event){
    moveItemInArray(this.items,event.previousIndex,event.currentIndex);
  }
  dropItem(event){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
    }else{
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex)
    }
  }
  enterPredicate(drag: CdkDrag,drop: CdkDropList) {
    //return drag.data % 2 === 0 && drop.data.length<4;
    return true;
  }
  notEnterPredicate(){
    return false
  }
  ngOnInit() {
  }

}
