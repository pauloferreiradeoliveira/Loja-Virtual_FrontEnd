import { Permissao } from './permissao';

export interface Funcionario {
  id: Number;
  name: String;
  senha: String;
  permissao: Permissao;
  created_at: Date;
}
