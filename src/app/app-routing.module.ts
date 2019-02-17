import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from '../page/user/user-list/user-list.component';
import { UserDetailComponent } from 'src/page/user/user-detail/user-detail.component';


const routes: Routes = [
  { path: 'user/list', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }



