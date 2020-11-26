import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/interfaces/interfaces';
import {AuthService} from '../ authorized-directory/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  user: User;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
          Validators.email]),
      password: new FormControl(null, [
        Validators.required, Validators.minLength(5)
      ])
    });
  }

  submit(): any {
    if (this.form.invalid) {
      return;
    }
    this.user = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    console.log('USER', this.user);

    this.auth.login().subscribe(() => {
      this.form.reset();
      this.router.navigate(['authorized', 'catalog']);
    });
  }
}
