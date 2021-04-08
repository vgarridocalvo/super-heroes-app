import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-heroe-modal',
  templateUrl: './delete-heroe-modal.component.html',
  styleUrls: ['./delete-heroe-modal.component.scss']
})
export class DeleteHeroeModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteHeroeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

  close(data?): void {
    this.dialogRef.close(data);
  }

  deleteHeroe() {
    this.close(this.data.heroe.id);
  }
}
