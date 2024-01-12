import { TestBed, inject } from '@angular/core/testing';

import { ConversorService } from './conversor.service';
import { HttpModule } from '@angular/http';

describe('ConversorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConversorService
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should ...', inject([ConversorService], (service: ConversorService) => {
    expect(service).toBeTruthy();
  }));
});
