import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service/data-service.service';
import { Data } from '../data/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  repos: any;
  user:any;
  username:any;

  subscription: Subscription = new Subscription;

  constructor(private dataService: 
  DataServiceService) { 
    this.user = false
    
  }

  ngOnInit(): void {
    this.dataService.getData()
    .subscribe(user =>{
      this.user = user;
    });// used to retrieve data from the api.
    
    this.dataService.getRepo()
    .subscribe(repos =>{
      this.repos = repos;
    });
    search(){
      this.dataService.updateUsername(this.username);
    }
  }
  
}


