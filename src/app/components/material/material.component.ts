import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropListContainer, CdkDropList} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  opened:boolean = false
  mobileQuery: MediaQueryList;  //interface which returns state of mediaquery(applied or not) when listerner is called 
  isAlternative:boolean = true;
  icons:Array<string> = ['account_circle','location_on','payment','work','contact_support']
  items:Array<string> = ['Home','Data']
  color:string = '';
  setColor(color){
    this.color = color
  }
  fillerNav = Array.from({length: 50}, (item,iterator) => `Nav Item ${iterator + 1}`);
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
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)'); // to set max width of mobile device to match the media for mobile related config
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

}
