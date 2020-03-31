import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {HttpService} from '../http.service'
import {PostModule} from '../modules/post.module'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  search_text = ''
  all_articles:PostModule [];
  top5_articles :PostModule []

  constructor(private http:HttpService) { 
  }
  ngOnInit(): void {
    this.http.get_no_of_articles_articles('15').subscribe((data) => this.all_articles = data);
    this.http.get_no_of_articles_articles('5').subscribe((data) => this.top5_articles = data)
  }
}
