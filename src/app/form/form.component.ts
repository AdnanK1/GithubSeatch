import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Data } from '../data/data';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newData = new Data("","");
  @Output () addData = new EventEmitter<Data>();
  onSubmit(){
    this.addData.emit(this.newData);
    this.newData = new Data("","");
    console.log('Data received');

}
  constructor() { }

  ngOnInit(): void {
  }

}
