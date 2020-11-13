import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comentario, Item } from 'src/app/models';

@Component({
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: Item
  ) {}
  comentario: FormControl = new FormControl();
  reply: FormControl = new FormControl();

  ngOnInit(): void {}

  public adicionarComentario(): void {
    this.item.comments.push({
      user: 'Janiane',
      comment: this.comentario.value,
    });

    this.comentario.patchValue('');
  }

  public adicionarReply(comentario: Comentario): void {
    if (!comentario.reply) {
      comentario.reply = [];
    }

    comentario.reply.push({
      user: 'Janiane',
      comment: this.reply.value,
    });

    this.reply.patchValue('');
  }
}
