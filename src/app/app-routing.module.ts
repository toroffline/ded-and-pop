import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from '../page/user/user-list/user-list.component';
import { UserDetailComponent } from 'src/page/user/user-detail/user-detail.component';
import { TodoComponent } from '../page/user/todo/todo.component';

const routes: Routes = [
  { path: 'user/list', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent},
  { path: 'user/:id/todo/detail', component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }



