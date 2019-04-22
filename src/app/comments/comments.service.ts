import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../environments/environment';
import { Comments, SingleComment } from './comments';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {
  queryParams: any;
  commentsUrl = `${environment.mainUrl}/comments`;
  includedParams: Array<string> = ['userId', 'id'];
  private subject = new Subject<any>();

  constructor(
    private http: HttpClient
  ) { }

  getSinglePostComments(postid: string): Observable<Comments> {
    this.queryParams = new HttpParams().set('postId', postid);
    return this.http.get<Comments>(this.commentsUrl, { params: this.queryParams });
  }

  addComment(comment: SingleComment): Observable<any> {
    return this.http.post<Response>(this.commentsUrl, comment);
  }

  updateComment(comment: SingleComment): Observable<any> {
    const commentsId = comment.id;
    const apiMemoUpdateUrl = `${this.commentsUrl}/${commentsId}`;
    return this.http.put(apiMemoUpdateUrl, comment);
  }

  deleteComment(comment: SingleComment): Observable<any> {
    const commentsId = comment.id;
    const apiMemoUpdateUrl = `${this.commentsUrl}/${commentsId}`;
    return this.http.delete(apiMemoUpdateUrl);
  }

  commentsUpdated(): Observable<any> {
    this.subject.next();
    return this.subject.asObservable();
  }
}
