import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  currentUserId!: number;
  @Input() employees: any;
  @Output() selectEmployee: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.currentUserId = this.employees[0].id;
  }
  getUserInfor(employeeId: number): void {
    this.currentUserId = employeeId;
    this.selectEmployee.emit(employeeId);
  }
}
