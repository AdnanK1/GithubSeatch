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
    
  }
  search (){
    this.dataService.updateUsername(this.username);

    this.dataService.getData().subscribe(user => {
      this.user = user;
      
    });

    this.dataService.getRepo().subscribe(repos => {
      this.repos = repos;
      
    });

  }

  


  ngOnInit(): void {
  }

}


