import { TestBed } from '@angular/core/testing';

import { AuditeurService } from './auditeur.service';

describe('AuditeurService', () => {
  let service: AuditeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
