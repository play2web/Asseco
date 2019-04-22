import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalModule } from 'ng-confirmation-modal';

import { CommentsService } from './comments.service';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { PostCommentstComponent } from './post-comments/post-comments.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ConfirmationModalModule.forRoot({
            // optional global config
            confirmBtnClass: 'btn btn-success t-btn-confirm',
            cancelBtnClass: 'btn btn-cancel t-btn-cancel',
            modalSize: 'md',
          }),
    ],
    providers: [
        CommentsService
    ],
    declarations: [
        AddCommentComponent,
        PostCommentstComponent,
        UpdateCommentComponent
    ],
    exports: [
        HttpClientModule,
        AddCommentComponent,
        PostCommentstComponent
    ],
    entryComponents: [
        UpdateCommentComponent
    ]
})
export class CommentsModule { }
