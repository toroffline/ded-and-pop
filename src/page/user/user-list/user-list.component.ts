import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/shared/model/user';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[];
  loading = true;
  subscriptionUserList: Subscription;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.subscriptionUserList = this.userService.getUserList().subscribe(res => {
      this.users = res;
      this.loading = false;
      console.log(this.users);
    });
  }

  ngOnDestroy() {
    // tslint:disable-next-line:no-unused-expression
    this.subscriptionUserList && this.subscriptionUserList.unsubscribe();
  }

}
