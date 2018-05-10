/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoriasResolver} from './categorias.resolver';

describe('Service: Categorias.resolver.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriasResolver]
    });
  });

  it('should ...', inject([CategoriasResolver], (service: CategoriasResolver) => {
    expect(service).toBeTruthy();
  }));
});
