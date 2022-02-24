import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListazasComponent } from './listazas.component';

describe('ListazasComponent', () => {
  let component: ListazasComponent;
  let fixture: ComponentFixture<ListazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListazasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
