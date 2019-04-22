import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentstComponent } from './post-comments.component';

describe('PostCommentstComponent', () => {
  let component: PostCommentstComponent;
  let fixture: ComponentFixture<PostCommentstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCommentstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
