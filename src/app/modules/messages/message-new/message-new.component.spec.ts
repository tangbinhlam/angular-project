import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNewComponent } from './message-new.component';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../shared/material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MessageNewComponent', () => {
  let component: MessageNewComponent;
  let fixture: ComponentFixture<MessageNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageNewComponent ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
