import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  heroe: HeroeModel = new HeroeModel();
  formHeroe: FormGroup;

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getHeroe(id);
    this.buildForm();
  }

  getHeroe(id: string) {
    this.heroe = this.heroesService.getHeroe(id);
  }

  buildForm() {
    this.formHeroe = this.formBuilder.group({
      id: [{ value: this.heroe.id, disabled: true }, []],
      name: [{ value: this.heroe.name, disabled: true }, []],
      power: [{ value: this.heroe.power, disabled: true }, []]
    });
  }
}
