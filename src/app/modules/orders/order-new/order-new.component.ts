import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'osalam-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.less']
})
export class OrderNewComponent implements OnInit {

  minDate = new Date();
  dateCtrl: FormControl;

  constructor() {
  }

  ngOnInit() {
    this.dateCtrl = new FormControl('', [Validators.required]);
  }

}
