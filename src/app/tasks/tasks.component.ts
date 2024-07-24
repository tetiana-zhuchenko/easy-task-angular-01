import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../../dummy-tasks';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  dummyTasks = DUMMY_TASKS;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  completedTaskId?: string;

  get selectedUserTasks() {
    return this.dummyTasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id);
  }
}
