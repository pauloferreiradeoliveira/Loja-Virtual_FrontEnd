import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCarrinhoComponent } from './produto-carrinho.component';

describe('produtoCarrinhoComponent', () => {
  let component: ProdutoCarrinhoComponent;
  let fixture: ComponentFixture<ProdutoCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
