import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id: number;
  user: User;
  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.activateRoute.url.subscribe(value => {
    // this.id = +value[1].path;
    // });

    this.id = +this.activateRoute.snapshot.url[1].path;

    this.userService.getUserListById(this.id).subscribe(res => {
      this.user = res[0];
    });
  }


}
