import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service/data-service.service';
import { Data } from '../data/data';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  datas: Data [] = [];
  subscription: Subscription = new Subscription;

  constructor(private dataService: 
  DataServiceService) { 
    this.dataService.getData()
    .subscribe(datas =>{
      this.datas = datas;
    });// used to retrieve data from the api.
  }

  ngOnInit(): void {
    
  }
  
}
