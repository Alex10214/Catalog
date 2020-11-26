import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthorizedLayoutComponent} from '../shared/authorized-layout/authorized-layout.component';
import {PageCreatePostComponent} from './page-create-post.component';

@NgModule({
  declarations: [ PageCreatePostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'authorized', component: AuthorizedLayoutComponent, children: [
          {path: 'create', component: PageCreatePostComponent},
        ]}
    ])
  ],
  exports: [RouterModule]
})
export class PageCreatePostModule { }
