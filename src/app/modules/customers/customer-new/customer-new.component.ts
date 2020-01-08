import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OsalamErrorStateMatcher} from '../../../shared/ErrorUtils/OsalamErrorStateMatcher';

@Component({
  selector: 'osalam-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.less']
})
export class CustomerNewComponent implements OnInit {
  matcher = new OsalamErrorStateMatcher();
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
}
