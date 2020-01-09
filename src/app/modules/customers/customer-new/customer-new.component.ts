import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OsalamErrorStateMatcher} from '../../../shared/ErrorUtils/OsalamErrorStateMatcher';
import {MatDialog, MatSnackBar} from '@angular/material';
import {RepDialogComponent} from '../rep-dialog/rep-dialog.component';

@Component({
  selector: 'osalam-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.less']
})
export class CustomerNewComponent implements OnInit {
  matcher = new OsalamErrorStateMatcher();
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      fax: [''],
    });
  }

  openRepDialog() {
    const dialogRef = this.dialog.open(RepDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(`User chose ${result}`);
    });
  }

  openUndoSnackBar() {
    const snackBarRef = this.snackbar.open('Customer saved', 'Undo', {
      horizontalPosition: 'end',
    });

    snackBarRef.onAction().subscribe(() => {
      alert('Undo that save');
    });
  }
}
