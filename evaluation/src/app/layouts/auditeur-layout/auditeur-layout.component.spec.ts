import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditeurLayoutComponent } from './auditeur-layout.component';

describe('AuditeurLayoutComponent', () => {
  let component: AuditeurLayoutComponent;
  let fixture: ComponentFixture<AuditeurLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditeurLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditeurLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
