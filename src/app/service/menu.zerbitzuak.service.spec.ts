import { TestBed } from '@angular/core/testing';

import { MenuZerbitzuakService } from './menu.zerbitzuak.service';

describe('MenuZerbitzuakService', () => {
  let service: MenuZerbitzuakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuZerbitzuakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
