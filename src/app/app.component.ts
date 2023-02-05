import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  title = 'angular-task-4';
  myForm : FormGroup | any
  val2 : any;
  val1 : any;
  total :number = 100
  data: any;


  ngOnInit(): void {
    this.myForm = new FormGroup({
      box1 : new FormControl('',[Validators.min(0),Validators.max(100)]),
      box2 : new FormControl('',[Validators.min(0),Validators.max(100)])
    })
    }
   
    OnSubmit(){
      console.log(this.myForm)
      this.data = {
        datasets : [
          {
            data : [this.val1,this.val2],
            backgroundColor: [ "#42A5F5", "#66BB6A"],
          }
        ],
        
      };
      }
  
  onBox1(e : any){
    if(!e.target.value){
      e.target.value = 0
    }
    if(e.target.value <= this.total){
      this.val1 = e.target.value
      this.val2 = this.total - e.target.value
    }
  }
  onBox2(e:any){
    if(!e.target.value){
      e.target.value = 0
    }
    if(e.target.value <= this.total){
      this.val2 = e.target.value
      this.val1 = this.total - e.target.value
    }
  }
}
