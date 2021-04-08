import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, AfterViewInit {
  heroes: HeroeModel[] = [];
  displayedColumns: string[] = ['name', 'power'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private heroesService: HeroesService
  ) {
    this.getDataSource();
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getDataSource() {
    this.heroes = this.heroesService.getHeroes();
    this.dataSource = new MatTableDataSource<HeroeModel>(this.heroes);
  }

}