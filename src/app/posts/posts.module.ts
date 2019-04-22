import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostsListResolver } from './posts-list/posts-list-resolver';
import { PostsService } from './posts.service';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { PostsComponent } from './posts.component';
import { CommentsModule } from '../comments/comment.module';
import { SinglePostGuard } from './single-post/single-post.guard';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CommentsModule
    ],
    providers: [
        PostsService,
        PostsListResolver,
        SinglePostGuard,
    ],
    declarations: [
        PostsComponent,
        PostsListComponent,
        SinglePostComponent
    ],
    exports: [
        HttpClientModule,
        PostsComponent
    ]
})
export class PostsModule { }
