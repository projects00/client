import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
qForm: FormGroup;
  fb1: FormBuilder;
  constructor( fb: FormBuilder) { 
    this.fb1=fb;
     this.initilizeFrom();
  }

  ngOnInit() {
  }
    initilizeFrom() {
    this.qForm = this.fb1.group({
      'quoteName': [null, Validators.required],
      'quoteAuthor': [null, Validators.required]
    });
    }
}
