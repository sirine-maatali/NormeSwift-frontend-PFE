import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererArchitectureComponent } from './gerer-architecture.component';

describe('GererArchitectureComponent', () => {
  let component: GererArchitectureComponent;
  let fixture: ComponentFixture<GererArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererArchitectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
