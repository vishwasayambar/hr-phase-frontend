import { AuthenticationService } from './../../../shared/services/authentication.service';
import { Injector } from '@angular/core';
import { Login } from './../../../shared/models/login';
import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends BaseComponent {
  form: UntypedFormGroup;
  login: Login;

  constructor(injector: Injector, private servise: AuthenticationService) {
    super(injector);
  }

  ngOnInit(): void {
    this.form = Login.getForm(new Login(this.login));
  }

  onLogin() {
  //   this.servise.login(this.form.value).subscribe((res) => {

  // });
};
