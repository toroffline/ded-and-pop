import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../user.service';
<<<<<<< HEAD
import { Todo } from "../../../shared/model/todo";
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
=======
import { Todo } from '../../../shared/model/todo';
>>>>>>> 414e816745e53f7b1e8e7666b2bcdcca6a92ef73
// @ViewChild('myModal') myModal;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  selectedTodo: Todo;
  styleModal: { [key: string]: string };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTodo();
    this.styleModal = { display: 'none' };
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getTodo(id)
      .subscribe(
        todoapi => this.todos = todoapi,
        err => console.error(err));

  }

  editTitle(todo: Todo): void {
    // this.myModal.nativeElement.className = 'modal fade show';
    this.styleModal = { display: 'block' };
    console.log({ todo });
    this.selectedTodo = todo;
  }

  saveTitle(): void {
    console.log('Save success.');
    console.log(this.selectedTodo);
<<<<<<< HEAD
    this.styleModal = { display: 'none' };
    this.selectedTodo = undefined;
=======
>>>>>>> 414e816745e53f7b1e8e7666b2bcdcca6a92ef73
  }
  closeModal(): void {
    this.styleModal = { display: 'none' };
  }
  goBack(): void {
    this.location.back();
  }
}
