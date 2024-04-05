import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  emailFormDataModel = {
    to: '',
    subject: '',
    message: '',
  };

  ngOnInit(): void {}

  onSendEmailFormSubmit() {
    console.warn('sending mail...');
  }
}
