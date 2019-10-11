import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-autosuggest',
  templateUrl: './autosuggest.component.html',
  styleUrls: ['./autosuggest.component.scss']
})
export class AutosuggestComponent implements OnInit {
      keyword = 'name';
      //data:Array<object>
      data = [
        {
          id: 1,
          name: 'Albania',
        },
        {
          id: 2,
          name: 'Belgium',
        },
        {
          id: 3,
          name: 'Denmark',
        },
        {
          id: 4,
          name: 'Montenegro',
        },
        {
          id: 5,
          name: 'Turkey',
        },
        {
          id: 6,
          name: 'Ukraine',
        },
        {
          id: 7,
          name: 'Macedonia',
        },
        {
          id: 8,
          name: 'Slovenia',
        },
        {
          id: 9,
          name: 'Georgia',
        },
        {
          id: 10,
          name: 'India',
        },
        {
          id: 11,
          name: 'Russia',
        },
        {
          id: 12,
          name: 'Switzerland',
        }
      ];

    selectEvent(item) {
      // do something with selected item
      console.log(item);
    }

    onChangeSearch(val: string) {
      // fetch remote data from here
      // And reassign the 'data' which is binded to 'data' property.
      // this.cs.getCountries(val)
      //   .subscribe((response:any)=>{
      //     console.log(response);
      //     this.data = response;
      //   },(error)=>{
      //     console.log(error);
      //   })
    }
    
    onFocused(e){
      // do something when input is focused
    }
  constructor(private cs:CommonService) { }

  ngOnInit() {
  }

}
