import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PostsService } from '../posts.service';
import { Posts } from '../posts';

@Injectable()
export class PostsListResolver implements Resolve<Posts> {

    constructor(
        private postsService: PostsService
    ) { }

    resolve(): Observable<Posts> {
        return this.postsService.getPosts();
    }
}
