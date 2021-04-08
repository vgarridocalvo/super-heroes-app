import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-heroe-modal',
  templateUrl: './edit-heroe-modal.component.html',
  styleUrls: ['./edit-heroe-modal.component.scss']
})
export class EditHeroeModalComponent implements OnInit {
  formHeroe: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditHeroeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  close(data?): void {
    this.dialogRef.close(data);
  }

  buildForm() {
    this.formHeroe = this.formBuilder.group({
      id: [this.data.heroe.id, []],
      name: [this.data.heroe.name, []],
      power: [this.data.heroe.power, []]
    });
  }

  editHeroe() {
    this.close(this.formHeroe.value);
  }
}
