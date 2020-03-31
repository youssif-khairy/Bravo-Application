import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object;
  constructor(
    private http:HttpService
  ) { }

  ngOnInit(): void {
    
  }

}
