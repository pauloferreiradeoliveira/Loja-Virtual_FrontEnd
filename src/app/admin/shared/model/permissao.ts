import { TipoPermissao } from './tipo-permissao.enum';
import { Navegacao } from './navegacao.enum';

export interface Permissao {
  id: number;
  permissao: TipoPermissao;
  navegacao: Navegacao;
}
