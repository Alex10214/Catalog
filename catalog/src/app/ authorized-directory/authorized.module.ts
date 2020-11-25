import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AuthorizedLayoutComponent } from './shared/authorized-layout/authorized-layout.component';
import { PageCatalogComponent } from './page-catalog/page-catalog.component';
import { PageCreatePostComponent } from './page-create-post/page-create-post.component';
import { PagePostComponent } from './page-post/page-post.component';



@NgModule({
  declarations: [AuthorizedLayoutComponent, PageCatalogComponent, PageCreatePostComponent, PagePostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AuthorizedLayoutComponent, children: [
          {path: '', redirectTo: `/authorized/catalog`, pathMatch: 'full'},
          {path: 'catalog', component: PageCatalogComponent},
          {path: 'create', component: PageCreatePostComponent},
          {path: 'post/:id', component: PagePostComponent},
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AuthorizedModule { }
