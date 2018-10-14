import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PersonalComponent } from './personal/personal.component';
import { AddressModule } from './address/address.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from './services/user.service';
import { DataService } from './services/data.service';
import { UsersComponent } from './users/users.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { RouterModule, Route } from '../../node_modules/@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeService } from './services/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeCanDeActivateGuard } from './employees/employee-candeacticate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { LearnComponent } from './learn/learn.component';
import { UpperCasePipe } from '../../node_modules/@angular/common';
import { UpperPipe } from './learn/upper.pipe';
import { ErrorComponent } from './error/error.component';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular-6-social-login';
import { SignInComponent } from './sign-in/sign-in.component';
import { GoogleUserService } from './sign-in/googleUser.service';
// @Injectable()
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("400836600997-7pjga7botut9s12dgv4ch87iq1ir8la4.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}

const routes: Route[] = [
  {
    path: "",
    redirectTo: "/sign-in",
    pathMatch: "full"
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "list",
    component: ListEmployeesComponent
  },
  {
    path: "learn",
    component: LearnComponent
  },
  {
    path: "employees/:id",
    component: EmployeeDetailsComponent
  },
  {
    path: "create",
    component: CreateEmployeeComponent,
    canDeactivate: [EmployeeCanDeActivateGuard]
  },
  { path : "home", component : HomeComponent },
  { path : "users", component : UsersComponent },
  { path : "**", component : PagenotfoundComponent },
  { path : "**", redirectTo : "/home", pathMatch : "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    PersonalComponent,
    UsersComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    LearnComponent,
    UpperPipe,
    ErrorComponent,
    SignInComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    AddressModule,
    HttpClientModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    UserService,
    DataService,
    EmployeeService,
    EmployeeCanDeActivateGuard,
        GoogleUserService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  // providers: [
  //   GoogleUserService,
  //   {
  //     provide: AuthServiceConfig,
  //     useFactory: getAuthServiceConfigs
  //   }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
