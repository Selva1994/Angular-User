import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from '../../../node_modules/angular-6-social-login';
import { GoogleUserService } from './googleUser.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userData = {};
  constructor(private _authService: AuthService, private _googleService: GoogleUserService, private _http: HttpClient) { }

  ngOnInit() {
    // this.userData = this._googleService.getUserData();
    // this.signIn();
    // this._authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    // this._googleService.getService()
    // .then((data)=> {
    //   this._googleService.setUserData(data);
    //   this.userData = this._googleService.getUserData();
    //   console.log(data);
    // });
  }

  signin() {
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then((data)=> {
      this._googleService.setUserData(data);
      this.userData = this._googleService.getUserData();
      console.log(data);
    });
  }

  getData() {
    this._http.post("http://localhost:3000/api/data",{"id":"123"})
    .subscribe((data)=> {
      console.log(data);
    });
  }

}
