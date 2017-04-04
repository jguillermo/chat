import { TestBed, inject } from '@angular/core/testing';

import { FirechatService } from './firechat.service';

describe('FirechatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirechatService]
    });
  });

  it('should ...', inject([FirechatService], (service: FirechatService) => {
    expect(service).toBeTruthy();
  }));
});
