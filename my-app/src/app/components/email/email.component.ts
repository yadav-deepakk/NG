import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email.service';

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

  isSendInProgress: boolean = false;

  ngOnInit(): void {}

  constructor(private emailService: EmailService, private snack: MatSnackBar) {}

  onSendEmailFormSubmit() {
    if (
      this.emailFormDataModel.to == null ||
      this.emailFormDataModel.subject == null ||
      this.emailFormDataModel.message == null ||
      this.emailFormDataModel.to == '' ||
      this.emailFormDataModel.subject == '' ||
      this.emailFormDataModel.message == ''
    ) {
      this.snack.open('Fields can not be null or empty!', 'OK');
      return;
    }
    this.isSendInProgress = !this.isSendInProgress;
    console.log('Starting sending mail...');
    console.log(this.emailFormDataModel);

    this.emailService.sendEmail(this.emailFormDataModel).subscribe(
      (success) => {
        console.log(success);
        this.snack.open('Send Success', 'OK');
      },
      (error) => {
        console.log(error);
        this.snack.open('Error encountered in sending mail', 'Cancel');
      }
    );

    console.log('ending sending mail...');
    this.isSendInProgress = !this.isSendInProgress;
  }
}
