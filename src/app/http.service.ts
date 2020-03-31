import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http'
import {PostModule} from './modules/post.module'
import {CommentModule} from './modules/comment.module'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  all_articles;
  constructor(
    private http:HttpClient
  ) { }
  
  get_no_of_articles_articles(limit):Observable<PostModule[]>{
    let params = new HttpParams().set('_limit', limit);
    return this.http.get<PostModule[]>('https://jsonplaceholder.typicode.com/posts',{
      params:params
    });
  }
  get_article_by_id(id):Observable<PostModule>{
    return this.http.get<PostModule>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
  get_comments_for_article(id):Observable<CommentModule[]>{
    return this.http.get<CommentModule[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
 
}
