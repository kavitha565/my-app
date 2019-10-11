import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  isLoading:boolean = false
  taskItem:string
  todo:Array<string> 
  done:Array<string>
  id:string
  constructor(private cs:CommonService) { }
  addToList(){
    if(this.taskItem!='' && this.todo){
      this.todo.push(this.taskItem)
      this.taskItem = ''
    }
  }
  drop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  getTodoList(){
    this.isLoading = true;
    this.cs.getTodoListService()
      .subscribe((response:any)=>{
        if(response && response.responseCode==200 && response.responseStatus=='success'){
          if(response.data && response.data.length>0){
            this.id = response.data[0]._id;
            this.todo = response.data[0].todo;
            this.done = response.data[0].done;
          }else{
            alert("Unable to fetch details,Please try again later");
          }
        }else{
          alert("Unable to fetch details,Please try again later");
        }
        this.isLoading = false;
      },(err)=>{

      })
  }
  onSubmit(){
    let data = {
      id : this.id,
      todo : this.todo,
      done : this.done
    }
    this.cs.saveTodoListService(data)
      .subscribe((response)=>{
        console.log('success');
      },(err)=>{
        console.log('error');
      })
  }
  ngOnInit() {
    this.getTodoList()
  }

}
