function validarForm() {
  const apellido = document.getElementById("apellido").value;
  const nombre = document.getElementById("nombre").value;
  const dni = document.getElementById("dni").value;
  const fechaNacimiento = document.getElementById("fecha").value;
  const email = document.getElementById("email").value;
  const year = new Date(fechaNacimiento).getFullYear();
  if (isNaN(year) || year >= 2006) {
    alert("Fecha de nacimiento inválida. Debe ser anterior al año 2006.");
    return;
  }

  if (!/^[a-zA-Z]+$/.test(apellido)) {
    alert("Apellido inválido. Solo letras.");
    return;
  }

  if (!/^[a-zA-Z]+$/.test(nombre)) {
    alert("Nombre inválido. Solo letras.");
    return;
  }

  if (!/^\d{8}$/.test(dni)) {
    alert("DNI inválido. Debe tener 8 dígitos.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Email inválido.");
    return;
  }
}

function preguntas() {
  const nacionalidad = prompt("¿Cuál es tu nacionalidad?");
  const color = prompt("¿Cuál es tu color favorito?");
  const mascota = prompt("¿Cuál es el nombre de tu mascota?");

  document.getElementById("respuestas").innerHTML = `
    <h3>Respuestas:</h3>
    <ul>
      <li><strong>Nacionalidad:</strong> ${nacionalidad}</li>
      <li><strong>Color favorito:</strong> ${color}</li>
      <li><strong>Nombre de mascota:</strong> ${mascota}</li>
    </ul>
  `;
}
