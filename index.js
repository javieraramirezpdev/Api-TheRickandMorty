const API_URL = "https://rickandmortyapi.com/api/character";

const button = document.getElementById("load-characters");
const container = document.getElementById("character-container");

function createCard(character) {
    return `
        <div class="card">
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>${character.species}</p>
        </div>
    `;
}

async function loadCharacters() {
    try {
        const response = await fetch(API_URL);

        console.log("Respuesta completa:", response);

        if (!response.ok) {
            throw new Error("Error al obtener los personajes");
        }

        const data = await response.json();

        console.log("Datos recibidos desde la API:", data);

        container.innerHTML = "";

        data.results.slice(0, 20).forEach(character => {

            console.log("Personaje:", character);
            console.log("Nombre:", character.name);

            container.innerHTML += createCard(character);
        });

    } catch (error) {

        console.error("Error:", error);

        container.innerHTML = `
            <p>Error al cargar los personajes.</p>
        `;
    }
}

button.addEventListener("click", loadCharacters);