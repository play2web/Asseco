import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SingleComment } from '../../comments/comments';
import { CommentsService } from '../../comments/comments.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html'
})
export class AddCommentComponent implements OnInit {
  inputComment: SingleComment;
  addCommentForm: FormGroup = new FormGroup({});
  submitted = false;
  id: number;

  get formControls(): any { return this.addCommentForm.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private commentsService: CommentsService) { }

  ngOnInit() {
    this.initForm();
  }

  addComment(): void {
    this.submitted = true;
    if (this.addCommentForm.invalid) {
      return;
    }
    this.inputComment = {
      postId: +this.route.snapshot.paramMap.get('id'),
      name: this.addCommentForm.value.name,
      email: this.addCommentForm.value.email,
      body: this.addCommentForm.value.body
    };
    this.commentsService.addComment(this.inputComment).subscribe(() => {
      this.commentsService.commentsUpdated();
      alert('Comment added');
    },
      (error) => {
        console.log(error);
      }
    );
    this.submitted = false;
    this.addCommentForm.reset();
  }

  cancel(): void {
    this.submitted = false;
    this.addCommentForm.reset();
  }

  private initForm(): void {
    this.addCommentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      body: ['', Validators.required],
    });
  }
}
