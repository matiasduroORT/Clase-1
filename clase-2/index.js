const alumnos = [
  {
    nombre: "Matias",
    apellido: "perez",
    edad: 28,
  },
  {
    nombre: "Lucas",
    apellido: "Gomez",
    edad: 41,
  },
  {
    nombre: "Lucia",
    apellido: "Sanchez",
    edad: 22,
  },
];

function ObtenerMayorEdad(alumnos) {
  let resultado = 0;
  const data = Object.values(alumnos);
  for (let i = 0; i < data.length; i++) {
    if (data[i].edad > resultado) {
      resultado = data[i].edad;
    }
  }
  return resultado;
}

const mayorEdad = ObtenerMayorEdad(alumnos);

console.log(`El alumno mayor tiene ${mayorEdad} años`);
