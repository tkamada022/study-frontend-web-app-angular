import { Injectable } from '@angular/core';
import { TodoTask } from './todo-task';

@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  private tasks: TodoTask[];

  constructor() {
    this.tasks = [];
    this.loadTasks();
  }

  addTask(taskName: string) {
    this.tasks.push({
      name: taskName,
      isCompleted: false,
    });

    // LocalStorage へ配列を保存
    this.saveTask();
  }

  getTasks() {
    return this.tasks;
  }

  loadTasks() {
    let jsonString = window.localStorage.getItem('tasks');
    if (jsonString) {
      this.tasks = JSON.parse(jsonString);
    }
  }

  saveTask() {
    let jsonString = JSON.stringify(this.tasks);
    window.localStorage.setItem('tasks', jsonString);
  }

  /**
   * タスクの数を取得
   * @returns
   */
  getNumOfCompleteTasks() {
    let completedTaskNum = 0;

    for (let task of this.tasks) {
      if (task.isCompleted == true) {
        completedTaskNum++;
      }
    }

    return completedTaskNum;
  }
}
