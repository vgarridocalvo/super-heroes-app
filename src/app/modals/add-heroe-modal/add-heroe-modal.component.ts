import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-heroe-modal',
  templateUrl: './add-heroe-modal.component.html',
  styleUrls: ['./add-heroe-modal.component.scss']
})
export class AddHeroeModalComponent implements OnInit {
  formHeroe: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddHeroeModalComponent>,
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
      id: [this.data.id, []],
      name: ['', []],
      power: ['', []]
    });
  }

  addHeroe() {
    this.close(this.formHeroe.value);
  }

}
