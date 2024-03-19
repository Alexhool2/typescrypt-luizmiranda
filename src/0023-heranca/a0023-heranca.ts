export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log("fazendo qualquer coisa ");

    return super.getNomeCompleto();
  }
}
export class Cliente extends Pessoa {}

const aluno = new Aluno("roberto", "moura", 30, "00.0000.000/00001", "001");

console.log(aluno.getNomeCompleto());
