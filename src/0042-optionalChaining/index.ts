type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: "O titulo",
  texto: "o texto",
  //data: new Date(),
};

console.log(documento.data?.toDateString() ?? "1- ixi,nao existe data");
console.log(undefined ?? "2- ixi,nao existe data");
