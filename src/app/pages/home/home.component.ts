import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.myGroup = this.formBuilder.group({
      id: ['', []],
      value: ['', []]
    });
  }

  searchById() {
    this.router.navigate(['/heroe', this.myGroup.value.id]);
  }

  searchByParam() {
    console.log(this.myGroup.value.value)
    this.router.navigate(['/heroes', this.myGroup.value.value]);
  }

}
