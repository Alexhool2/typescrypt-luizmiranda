export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = "0000.000.000.00";
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao);
  }
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}
const pessoa1 = new Pessoa("alex", "moura", 30, "120.000.000-00");
const pessoa2 = Pessoa.criaPessoa("maria", "moura");
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
