import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { AddHeroeModalComponent } from 'src/app/modals/add-heroe-modal/add-heroe-modal.component';
import { DeleteHeroeModalComponent } from 'src/app/modals/delete-heroe-modal/delete-heroe-modal.component';
import { EditHeroeModalComponent } from 'src/app/modals/edit-heroe-modal/edit-heroe-modal.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, AfterViewInit {
  heroes: HeroeModel[] = [];
  displayedColumns: string[] = ['name', 'power', 'menu'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private heroesService: HeroesService,
    public dialog: MatDialog
  ) {
    this.getDataSource();
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getDataSource() {
    this.heroes = this.heroesService.getHeroes();
    this.dataSource = new MatTableDataSource<HeroeModel>(this.heroes);
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddHeroeModalComponent, {
      width: '450px',
      data: { id: this.heroes.length }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.heroesService.addHeroe(result);
        this.getDataSource();
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  openEditDialog(element) {
    const dialogRef = this.dialog.open(EditHeroeModalComponent, {
      width: '450px',
      data: { heroe: element }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.heroesService.editHeroe(result);
        this.getDataSource();
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  deleteItem(element) {
    const dialogRef = this.dialog.open(DeleteHeroeModalComponent, {
      width: '450px',
      data: { heroe: element }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.heroesService.deleteHeroe(result);
        this.getDataSource();
        this.dataSource.paginator = this.paginator;
      }
    });
  }

}