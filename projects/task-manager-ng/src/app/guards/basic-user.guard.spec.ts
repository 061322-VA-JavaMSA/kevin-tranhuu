import { TestBed } from '@angular/core/testing';

import { BasicUserGuard } from './basic-user.guard';

describe('BasicUserGuard', () => {
  let guard: BasicUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BasicUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
