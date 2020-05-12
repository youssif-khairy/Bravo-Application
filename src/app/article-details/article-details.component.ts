import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {HttpService} from '../http.service'
import {PostModule} from '../modules/post.module'
import {CommentModule} from '../modules/comment.module'


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  id:string = '';
  article:PostModule; 
  comments:CommentModule[];
  c:CommentModule;
  e:string = '';
  com:string = '';
  nam:string = '';
  constructor(private route: ActivatedRoute,
    private http : HttpService
    ) {
      this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {

    this.http.get_article_by_id(this.id).subscribe(data => {this.article = data;})
    this.http.get_comments_for_article(this.id).subscribe(data =>{this.comments = data; })
  }
  submitComment(){
    this.c = new CommentModule();
    this.c.id = this.id;
    this.c.postId = this.id;
    this.c.name = this.nam;
    this.c.email = this.e;
    this.c.body = this.com;
    this.nam = ''
    this.e = '';
    this.com = '';
    this.http.get_comments_for_article(this.id).subscribe(data =>{this.comments = data; this.comments.push(this.c)})
  }

}
