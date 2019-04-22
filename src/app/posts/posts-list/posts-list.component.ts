import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  postsItems: Posts;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.initData();
  }

  private initData(): void {
    this.route.data.subscribe((data) => {
      this.postsItems = data.postsData;
    });
  }
}
