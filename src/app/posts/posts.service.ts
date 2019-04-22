import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  queryParams: any;
  mainUrl = `${environment.mainUrl}/posts`;

  constructor(
    private http: HttpClient
  ) {}

  getPosts(): Observable<Posts> {
    return this.http.get<Posts>(this.mainUrl);
  }

  getSinglePost(id: string): Observable<Posts> {
    this.queryParams = new HttpParams().set('id', id);
    return this.http.get<Posts>(this.mainUrl, { params: this.queryParams });
  }
}
