export function add(a: unknown, b: unknown): string | number {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}

console.log(add(2, 2));
console.log(add("a", "b"));

type Pessoa = { tipo: "pessoa"; nome: string };
type Animal = { tipo: "animal"; cor: string };

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: "pessoa" = "pessoa";
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal) {
  //   if ("nome" in obj) console.log(obj.nome);
  //   if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case "pessoa":
      console.log(obj.nome);
      return;
    case "animal":
      console.log("isso e um animal", obj.cor);
  }
}

mostraNome(new Aluno("alex"));
mostraNome({ tipo: "animal", cor: "blue" });
