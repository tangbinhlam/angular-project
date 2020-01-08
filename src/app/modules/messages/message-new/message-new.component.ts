import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Department from '../../../domain/models/department.model';
import {PriorityEmum} from '../../../domain/enums/priority.emum';

@Component({
  selector: 'osalam-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.less']
})
export class MessageNewComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  priorities = Object.values(PriorityEmum);
  departments: Department[] = [
    {
      id: 1,
      name: 'Complaints'
    },
    {
      id: 2,
      name: 'Loyalty'
    },
    {
      id: 3,
      name: 'Promotions'
    },
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      emailCtrl: ['', Validators.required],
      priorityCtrl: ['', Validators.required],
      departmentCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      messageCtrl: ['', Validators.required]
    });
  }

  getDepartmentName(department: Department) {
    return department ? department.name : undefined;
  }
}
