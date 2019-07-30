import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  encapsulation : ViewEncapsulation.Emulated
})
export class DataComponent implements OnInit {
  productData:any
  p:number = 1
  column:string = 'productId'
  orderType:string = 'asc'
  hideAsc:boolean = false
  initialSort:boolean = true
  searchData:string = ''
  constructor(private cs: CommonService) { }
  sortAsc = function(columnName){
    if(this.initialSort){
      this.hideAsc = false
      this.initialSort = false
    }else{
      this.hideAsc = true
      this.orderType = 'desc'
    }
    this.column = columnName
  }
  sortDesc = function(columnName){
    this.hideAsc = false
    this.orderType = 'asc'
    this.column = columnName
  }
  ngOnInit() {
    this.cs.getProductInfoService()
      .subscribe((response)=>{
        this.productData = response;
      },(error)=>{
        console.log(error);
      })
  }

}
