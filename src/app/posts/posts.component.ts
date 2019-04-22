import { Component } from '@angular/core';
import { Posts } from './posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  postsItems: Posts[] = [];

  constructor() { }
}

