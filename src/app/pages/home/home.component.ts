import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from '../../models';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  // tslint:disable-next-line: member-ordering
  todo: Array<Item> = [
    {
      title: 'Test todo 1',
      comments: [
        { user: 'Jon doe', comment: 'Lorem ipsum' },
        { user: 'Jane doe', comment: 'Lorem ipsum 2' },
      ],
    },
    {
      title: 'Test todo 2',
      comments: [],
    },
    {
      title: 'Test todo 3',
      comments: [
        { user: 'Jon doe', comment: 'Lorem ipsum' },
        { user: 'Jane doe', comment: 'Lorem ipsum 2' },
        { user: 'Jane doe 2', comment: 'Lorem ipsum 45' },
        { user: 'Jane doe 45', comment: 'Lorem ipsum 32' },
      ],
    },
    {
      title: 'Test todo 4',
      comments: [],
    },
  ];

  done: Array<Item> = [
    {
      title: 'Test done 1',
      comments: [],
    },
    {
      title: 'Test done 2',
      comments: [{ user: 'Jon doe', comment: 'Lorem ipsum' }],
    },
  ];

  review: Array<Item> = [
    {
      title: 'Test review 1',
      comments: [],
    },
    {
      title: 'Test review 2',
      comments: [],
    },
    {
      title: 'Test review 3',
      comments: [],
    },
  ];

  ngOnInit(): void {}

  public drop(event: CdkDragDrop<Item[]>) {
    console.log(event.item.data);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  openDialog(item: Item): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '850px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
