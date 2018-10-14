import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { AuthService, GoogleLoginProvider } from "../../../node_modules/angular-6-social-login";

@Injectable()
export class GoogleUserService {
    userData: Object = {};
    constructor(private _authService: AuthService, private _http: HttpClient) {
    }

    setUserData(data) {
        this.userData = data;
    }

    getUserData() {
        return this.userData;
        // return this._authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
    getService() {
        
    return this._authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    }
}