import { Permissao } from './permissao';

export interface TipoUser {
  id: number;
  nome: string;
  permissao: Permissao[];
}
