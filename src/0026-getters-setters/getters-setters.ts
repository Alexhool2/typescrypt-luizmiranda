export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    private _cpf: string
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log("setter chamado");

    this._cpf = cpf;
  }

  get cpf(): string {
    console.log("getter chamado");

    return this._cpf.replace(/\D/g, "");
  }
}

const pessoa = new Pessoa("alex", "moura", 30, "120.000.000-00");
pessoa.cpf = "123.000.000-00";
console.log(pessoa.cpf);
