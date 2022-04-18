import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Data } from '../data/data';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newData = new Data(0,"","");
  @Output () addData = new EventEmitter<Data>();
  onSubmit(){
    this.addData.emit(this.newData);
    this.newData = new Data(0,"","");
    console.log(this.newData);

}
  constructor() { }

  ngOnInit(): void {
  }

}
