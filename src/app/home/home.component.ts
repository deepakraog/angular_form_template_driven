import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("f", {static: false}) mailForm: NgForm;
  defaultSubscription: string = 'advanced';
  mailDetails = {
    email: '',
    password: '',
    subscription: ''
  };
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.mailDetails.email = this.mailForm.value.email;
    this.mailDetails.password = this.mailForm.value.password;
    this.mailDetails.subscription  = this.mailForm.value.subscription;
    console.log(this.mailForm);
  }
}
