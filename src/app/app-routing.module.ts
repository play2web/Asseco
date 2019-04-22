import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostsListResolver } from './posts/posts-list/posts-list-resolver';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { PostsModule } from './posts/posts.module';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { SinglePostGuard } from './posts/single-post/single-post.guard';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      { path: '', redirectTo: 'postlist', pathMatch: 'full' },
      { path: 'singlepost', redirectTo: 'postlist', pathMatch: 'full' },
      {
        path: 'postlist',
        component: PostsListComponent,
        resolve: { postsData: PostsListResolver }
      },
      {
        path: 'singlepost/:id',
        component: SinglePostComponent,
        canActivate: [SinglePostGuard],
      }
    ],
  }
];

@NgModule({
  imports: [PostsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
