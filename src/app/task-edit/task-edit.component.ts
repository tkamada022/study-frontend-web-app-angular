import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit, AfterViewInit {
  @ViewChild('addTaskNameInput')
  taskNameInputElem!: ElementRef;

  constructor(
    public taskManager: TaskManagerService,
    private router: Router,
    private snackBar: MatSnackBar,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  /**
   * コンポーネントが描画されたときのイベントハンドラ
   */
  ngAfterViewInit(): void {
    // タスク名入力欄にフォーカスを当てる
    this.taskNameInputElem.nativeElement.focus();
    // Angularに強制的に変更検出させる
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {}

  addTask(taskName: string, dueDate?: string) {
    this.taskManager.addTask(taskName, dueDate);
    this.snackBar.open('追加しました！', undefined, {
      duration: 2500,
    });
    this.router.navigate(['']);
  }
}
