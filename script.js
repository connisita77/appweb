const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
let data = [];

// Cargar datos desde el archivo JSON
fetch("miss_universe_data.json")
  .then(response => response.json())
  .then(json => {
    data = json;
    renderGallery(data);
  })
  .catch(error => console.error("Error al cargar los datos:", error));

// Renderizar las tarjetas
function renderGallery(items) {
  gallery.innerHTML = ""; // Limpiar contenido
  items.forEach(item => {
    gallery.innerHTML += `
      <div class="bg-white rounded-xl shadow-lg overflow-hidden transition hover:scale-105">
        <img src="${item.image}" alt="${item.name}" class="w-full h-64 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-bold">${item.name}</h2>
          <p class="text-purple-700 font-semibold">${item.country} - ${item.year}</p>
          <p class="text-sm mt-2">${item.bio}</p>
        </div>
      </div>
    `;
  });
}

// Buscar por nombre o país
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.country.toLowerCase().includes(query)
  );
  renderGallery(filtered);
});
