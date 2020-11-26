import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageCatalogComponent} from './page-catalog.component';
import {RouterModule} from '@angular/router';
import {AuthorizedLayoutComponent} from '../shared/authorized-layout/authorized-layout.component';



@NgModule({
  declarations: [PageCatalogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'authorized', component: AuthorizedLayoutComponent, children: [
          {path: 'catalog', component: PageCatalogComponent},
        ]}
    ])
  ],
  exports: [RouterModule]
})
export class PageCatalogModule { }
