import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks = [
    {
      name: 'ライブの申込み',
      isCompleted: true,
    },
    {
      name: 'セトリの予想',
      isCompleted: true,
    },
  ];

  addTask(taskName: string) {
    this.tasks.push({
      name: taskName,
      isCompleted: false,
    });
  }

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
