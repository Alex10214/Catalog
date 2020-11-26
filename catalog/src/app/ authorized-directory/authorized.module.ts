import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AuthorizedLayoutComponent } from './shared/authorized-layout/authorized-layout.component';
import {MatListModule} from '@angular/material/list';
import {AuthService} from './services/auth.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthorizedLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AuthorizedLayoutComponent, children: [
          {path: '', redirectTo: `/authorized/catalog`, pathMatch: 'full'},
        ]
      }
    ]),
    MatListModule,
    SharedModule
  ],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AuthorizedModule { }
