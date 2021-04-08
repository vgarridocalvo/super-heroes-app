import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeroeModalComponent } from './add-heroe-modal.component';

describe('AddHeroeModalComponent', () => {
  let component: AddHeroeModalComponent;
  let fixture: ComponentFixture<AddHeroeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHeroeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeroeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
