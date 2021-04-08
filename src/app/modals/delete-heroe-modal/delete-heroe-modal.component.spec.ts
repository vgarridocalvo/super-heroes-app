import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHeroeModalComponent } from './delete-heroe-modal.component';

describe('DeleteHeroeModalComponent', () => {
  let component: DeleteHeroeModalComponent;
  let fixture: ComponentFixture<DeleteHeroeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHeroeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHeroeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
