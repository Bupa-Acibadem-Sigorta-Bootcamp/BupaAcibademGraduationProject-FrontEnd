import { TestBed } from '@angular/core/testing';

import { GeneralDirectorateScreenService } from './general-directorate-screen.service';

describe('GeneralDirectorateScreenService', () => {
  let service: GeneralDirectorateScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralDirectorateScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
