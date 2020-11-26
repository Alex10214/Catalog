import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthorizedLayoutComponent} from '../shared/authorized-layout/authorized-layout.component';
import {PagePostComponent} from './page-post.component';



@NgModule({
  declarations: [ PagePostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'authorized', component: AuthorizedLayoutComponent, children: [
          {path: 'post/:id', component: PagePostComponent},
        ]}
    ])
  ],
  exports: [RouterModule]
})
export class PagePostModule { }
