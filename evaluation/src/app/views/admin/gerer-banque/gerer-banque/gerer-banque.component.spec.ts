import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererBanqueComponent } from './gerer-banque.component';

describe('GererBanqueComponent', () => {
  let component: GererBanqueComponent;
  let fixture: ComponentFixture<GererBanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererBanqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
