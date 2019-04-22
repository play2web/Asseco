import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentsService } from '../comments.service';
import { Comments, SingleComment } from '../comments';
import { UpdateCommentComponent } from '../update-comment/update-comment.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})

export class PostCommentstComponent implements OnInit {
  commentsItems: Comments;

  constructor(
    private commentsService: CommentsService,
    private route: ActivatedRoute,
    private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getCommentsForPost();
    this.commentsService.commentsUpdated().subscribe(() => {
      this.getCommentsForPost();
    });
  }

  updateComment(comment: SingleComment): void {
    const modalRef = this.modalService.open(UpdateCommentComponent);
    modalRef.componentInstance.comment = comment;
  }

  deleteComment(comment: SingleComment): void {
    this.commentsService.deleteComment(comment).subscribe((data) => {
      this.commentsService.commentsUpdated();
      alert('Comment deleted');
    });
  }

  private getCommentsForPost(): void {
      this.commentsService.getSinglePostComments(this.route.snapshot.paramMap.get('id')).subscribe((data) => {
        this.commentsItems = data;
      });
  }
}
