// API
// Contenedor de html para renderizar contenido

const $contenedor = document.getElementById("Personajes2");
const URL_API = "https://rickandmortyapi.com/api/character/?page=4";

// promesas (asincronnismo en JS)
fetch(URL_API)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const personajes = data.results;

    for (let i = 0; i < personajes.length; i++) {
      //desctructuring
      const { name, gender, species, status, image } = personajes[i];

      $contenedor.innerHTML += ` 
      <div class="grid-item">
      <img
        src="${image}"
        alt="imagen de ${name}"
      />
      <h3>${name}</h3>
      <p>Estado:${status}</p>
      <p>Género: ${gender}</p>
      <p>Especie: ${species}</p>
      </div>
      `;
    }
  });