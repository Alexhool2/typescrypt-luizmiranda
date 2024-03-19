interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
  idade?: number;
}

const pessoa: Pessoa = {
  nome: "alex",
  sobrenome: "moura",
};

console.log(pessoa);
