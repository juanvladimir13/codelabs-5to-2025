const usuario: string = Deno.args[0] || "Anonimo";

function saludarPersona(usuario: string): string {
  return "Hola " + usuario;
}

const resultado = saludarPersona(usuario);
console.log(resultado);
