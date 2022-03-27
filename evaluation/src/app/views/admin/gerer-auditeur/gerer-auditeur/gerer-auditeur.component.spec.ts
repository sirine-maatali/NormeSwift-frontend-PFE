import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererAuditeurComponent } from './gerer-auditeur.component';

describe('GererAuditeurComponent', () => {
  let component: GererAuditeurComponent;
  let fixture: ComponentFixture<GererAuditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererAuditeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
