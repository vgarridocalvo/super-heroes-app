import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeroeModalComponent } from './edit-heroe-modal.component';

describe('EditHeroeModalComponent', () => {
  let component: EditHeroeModalComponent;
  let fixture: ComponentFixture<EditHeroeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHeroeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHeroeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
