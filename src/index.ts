//los traigo de html
let usuario = document.getElementById("x");
let password = document.getElementById("Password");
let butt = document.getElementById("button");

let cantidadUser: number = 50;
let Usuarios: string[] = new Array(cantidadUser);
let Contrasenas: number[] = new Array(cantidadUser);

butt.addEventListener("click", () => {
  let UserIngresado: string = usuario.value;
  let passIngresado: number = password.value;
});
