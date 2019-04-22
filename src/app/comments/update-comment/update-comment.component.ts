import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SingleComment } from '../comments';
import { CommentsService } from '../comments.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.scss']
})
export class UpdateCommentComponent implements OnInit {
  @Input() comment;

  inputComment: SingleComment;
  updateCommentForm: FormGroup = new FormGroup({});
  submitted = false;

  get formControls(): any { return this.updateCommentForm.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private commentsService: CommentsService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.initForm();
  }

  updateComment(): void {
    this.submitted = true;
    if (this.updateCommentForm.invalid) {
      return;
    }
    this.inputComment = {
      id: this.comment.id,
      postId: this.comment.postId,
      name: this.updateCommentForm.value.name,
      email: this.updateCommentForm.value.email,
      body: this.updateCommentForm.value.body
    };
    this.commentsService.updateComment(this.inputComment).subscribe(() => {
      this.commentsService.commentsUpdated();
      this.activeModal.close();
      alert('Comment updated');
    },
      (error) => {
        console.log(error);
      }
    );
    this.submitted = false;
    this.updateCommentForm.reset();
  }

  cancel(): void {
    this.submitted = false;
    this.updateCommentForm.reset();
  }

  private initForm(): void {
    this.updateCommentForm = this.formBuilder.group({
      name: [this.comment.name, Validators.required],
      email: [this.comment.email, [Validators.email, Validators.required]],
      body: [this.comment.body, Validators.required],
    });
  }
}
