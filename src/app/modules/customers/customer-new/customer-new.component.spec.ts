import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerNewComponent} from './customer-new.component';
import {MaterialModule} from '../../../shared/material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {RepDialogComponent} from '../rep-dialog/rep-dialog.component';
import {MatDialog, MatSnackBar} from '@angular/material';

describe('CostomerNewComponent', () => {
  let component: CustomerNewComponent;
  let fixture: ComponentFixture<CustomerNewComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerNewComponent, RepDialogComponent],
      imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        MatSnackBar,
        {
          provide: MatDialog,
          useValue: {closeAll: (): void => undefined}
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
