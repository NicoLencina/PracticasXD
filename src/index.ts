console.clear();

//los traigo de html
let usuario = document.getElementById("x");
let password = document.getElementById("password");
let butt = document.getElementById("button");

let cantidadUser: number = 50;
let Usuarios: string[] = new Array(cantidadUser);
let Contrasenas: number[] = new Array(cantidadUser);

Usuarios[30] = "Nicolas";
Contrasenas[30] = 1234;

let verific: boolean = false;

function encuentrame(user2: string, pass2: number) {
  for (let index = 0; index < Usuarios.length; index++) {
    // user2 = Usuarios[index];
    //pass2 = Contrasenas[index];
    if (user2 === Usuarios[index] && pass2 === Contrasenas[index]) {
      console.log("bienvenido");
      return (verific = true);
    }
    if (user2 === Usuarios[index] && !(pass2 === Contrasenas[index])) {
      console.log("La contraseña es incorrecta");
      return (verific = false);
    } else {
      verific = false;
      console.log(
        "El usuario es Incorrecto, verifique sus datos y vuelva a ingresar"
      );
    }
  }
}

butt.addEventListener("click", () => {
  let UserIngresado: string = usuario.value;
  let passIngresado: number = password.value;
  encuentrame(UserIngresado, passIngresado);
  console.log(verific);
});
