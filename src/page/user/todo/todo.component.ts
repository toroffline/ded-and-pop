import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../user.service';
import { Todo } from '../../../shared/model/todo';
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
    this.styleModal = { display: 'none' };
    this.selectedTodo = undefined;
  }
  closeModal(): void {
    this.styleModal = { display: 'none' };
  }
  goBack(): void {
    this.location.back();
  }
}
