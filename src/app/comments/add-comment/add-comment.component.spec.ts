import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AddCommentComponent } from './add-comment.component';
import { CommentsModule } from '../../comments/comment.module';
import { CommentsService } from '../../comments/comments.service';
import { of, empty } from 'rxjs';

fdescribe('AddCommentComponent', () => {
  let component: AddCommentComponent;
  let commentsService: CommentsService;
  let spyCommentsServiceService: jasmine.Spy;
  let fixture: ComponentFixture<AddCommentComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  const config: Route[] = [
    { path: '', component: AddCommentComponent }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommentsModule,
        RouterTestingModule.withRoutes(config)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    commentsService = de.injector.get(CommentsService);

    // MOCKS
    spyCommentsServiceService = spyOn(commentsService, 'addComment').and.returnValue(of(empty));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', () => {
    // GIVEN
    fixture.detectChanges();
    component.addCommentForm.get('name').setValue('');
    component.addCommentForm.get('email').setValue('');
    component.addCommentForm.get('body').setValue('');
    // WHEN
    fixture.debugElement.query(By.css('#t-add-comment')).nativeElement.click();
    // THEN
    expect(spyCommentsServiceService).toHaveBeenCalledTimes(0);
    expect(component.addCommentForm.invalid).toBeTruthy();
  });

  it('should trigger save button', () => {
    // GIVEN
    fixture.detectChanges();
    component.addCommentForm.get('name').setValue('Test');
    component.addCommentForm.get('email').setValue('testing@testing.com');
    component.addCommentForm.get('body').setValue('testbody');
    // WHEN
    fixture.debugElement.query(By.css('#t-add-comment')).nativeElement.click();
    // THEN
    expect(spyCommentsServiceService).toHaveBeenCalledTimes(1);
  });
});
