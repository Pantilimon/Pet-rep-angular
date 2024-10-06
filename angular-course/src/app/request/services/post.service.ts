import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  "userId": Number,
  "id": Number,
  "title": String,
  "body": String
}

@Injectable( )
export class PostService {

  constructor(private _httpClient: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
