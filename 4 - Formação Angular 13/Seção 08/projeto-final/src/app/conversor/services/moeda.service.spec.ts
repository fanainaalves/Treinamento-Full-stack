import { TestBed, inject } from '@angular/core/testing';

import { MoedaService } from './moeda.service';

describe('MoedaService', () => {
  // let service: MoedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoedaService]
    });

    // service = TestBed.inject(MoedaService);
  });

  it('should ...', inject([MoedaService], (service: MoedaService) => {
    expect(service).toBeTruthy();
  }));
});
