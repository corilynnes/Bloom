import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  // userEmail: string;
  // userPwd: string;
  // username: string;

  // signUp() {
  //   this.authService.SignUp(this.userEmail, this.userPwd);
  //   this.userEmail = '';
  //   this.userPwd = '';
  //   this.username = '';
  //   console.log(this.username);
  //   }

}
