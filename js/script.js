// ===== DATOS SIMULADOS DE LA API =====
const contestantsData = [
    {
        id: 1,
        name: "Camila Avella",
        year: 2024,
        age: 23,
        city: "Bogotá",
        region: "Bogotá",
        height: "1.75m",
        profession: "Modelo y Comunicadora Social",
        placement: "winner",
        placementText: "Miss Universe Colombia 2024",
        image: "https://images.unsplash.com/photo-1494790108755-2616b332c3e0?w=400&h=500&fit=crop",
        bio: "Camila es una joven apasionada por la comunicación y el modelaje. Ha trabajado en diversas campañas publicitarias y es activista por los derechos de las mujeres.",
        achievements: ["Miss Universe Colombia 2024", "Top 10 Miss Universe 2024", "Mejor Traje Nacional"],
        socialCause: "Empoderamiento femenino y educación",
        instagram: "@camilaavella"
    },
    {
        id: 2,
        name: "Valeria Morales",
        year: 2023,
        age: 25,
        city: "Medellín",
        region: "Medellín",
        height: "1.73m",
        profession: "Ingeniera Industrial",
        placement: "runner-up",
        placementText: "Primera Finalista 2023",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
        bio: "Valeria combina su pasión por la ingeniería con el modelaje. Es una defensora de la educación STEM para mujeres jóvenes.",
        achievements: ["Primera Finalista Miss Universe Colombia 2023", "Miss Elegancia", "Mejor Respuesta en Entrevista"],
        socialCause: "Educación STEM para mujeres",
        instagram: "@valeriamorales"
    },
    {
        id: 3,
        name: "Isabella Rodríguez",
        year: 2024,
        age: 22,
        city: "Cali",
        region: "Cali",
        height: "1.76m",
        profession: "Estudiante de Medicina",
        placement: "top-10",
        placementText: "Top 10",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
        bio: "Isabella está cursando medicina y sueña con especializarse en pediatría. Es voluntaria en hospitales infantiles.",
        achievements: ["Top 10 Miss Universe Colombia 2024", "Miss Simpatía", "Premio del Público"],
        socialCause: "Salud infantil y nutrición",
        instagram: "@isabellarod"
    },
    {
        id: 4,
        name: "Sofía García",
        year: 2023,
        age: 24,
        city: "Barranquilla",
        region: "Barranquilla",
        height: "1.74m",
        profession: "Abogada",
        placement: "top-10",
        placementText: "Top 10",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop",
        bio: "Sofía es abogada especializada en derechos humanos. Trabaja con organizaciones que apoyan a mujeres víctimas de violencia.",
        achievements: ["Top 10 Miss Universe Colombia 2023", "Miss Carisma", "Mejor Proyecto Social"],
        socialCause: "Derechos de la mujer y justicia social",
        instagram: "@sofiagarcia"
    },
    {
        id: 5,
        name: "Daniela López",
        year: 2022,
        age: 26,
        city: "Cartagena",
        region: "Cartagena",
        height: "1.72m",
        profession: "Psicóloga",
        placement: "winner",
        placementText: "Miss Universe Colombia 2022",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
        bio: "Daniela es psicóloga clínica y trabaja con jóvenes en situación de riesgo. Es defensora de la salud mental.",
        achievements: ["Miss Universe Colombia 2022", "Top 16 Miss Universe 2022", "Miss Fotogenia"],
        socialCause: "Salud mental y bienestar juvenil",
        instagram: "@danielalopez"
    },
    {
        id: 6,
        name: "Alejandra Martínez",
        year: 2024,
        age: 21,
        city: "Bogotá",
        region: "Bogotá",
        height: "1.77m",
        profession: "Estudiante de Arquitectura",
        placement: "runner-up",
        placementText: "Primera Finalista 2024",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
        bio: "Alejandra estudia arquitectura y está interesada en el diseño sostenible. Participa en proyectos de construcción ecológica.",
        achievements: ["Primera Finalista Miss Universe Colombia 2024", "Miss Elegancia", "Mejor Pasarela"],
        socialCause: "Arquitectura sostenible y medio ambiente",
        instagram: "@alejandramtz"
    },
    {
        id: 7,
        name: "Carolina Herrera",
        year: 2021,
        age: 27,
        city: "Medellín",
        region: "Medellín",
        height: "1.75m",
        profession: "Diseñadora de Modas",
        placement: "winner",
        placementText: "Miss Universe Colombia 2021",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
        bio: "Carolina es diseñadora de modas y tiene su propia marca de ropa sostenible. Promueve la moda ética y responsable.",
        achievements: ["Miss Universe Colombia 2021", "Top 5 Miss Universe 2021", "Mejor Diseño de Vestido"],
        socialCause: "Moda sostenible y comercio justo",
        instagram: "@carolinaherrera"
    },
    {
        id: 8,
        name: "Mariana Torres",
        year: 2023,
        age: 23,
        city: "Cali",
        region: "Cali",
        height: "1.73m",
        profession: "Bailarina Profesional",
        placement: "top-10",
        placementText: "Top 10",
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=500&fit=crop",
        bio: "Mariana es bailarina profesional especializada en danzas folclóricas colombianas. Enseña danza a niños de escasos recursos.",
        achievements: ["Top 10 Miss Universe Colombia 2023", "Miss Talento", "Mejor Presentación Cultural"],
        socialCause: "Preservación cultural y arte para niños",
        instagram: "@marianatorres"
    }
];

// ===== ESTADO DE LA APLICACIÓN =====
let currentPage = 1;
const itemsPerPage = 4;
let filteredData = [...contestantsData];
let currentFilters = {
    search: '',
    year: '',
    placement: '',
    region: ''
};

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    renderStats();
    renderContestants();
    renderPagination();
    setupEventListeners();
});

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Búsqueda con Enter
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchContestants();
        }
    });

    // Filtros en tiempo real
    document.getElementById('yearFilter').addEventListener('change', applyFilters);
    document.getElementById('placementFilter').addEventListener('change', applyFilters);
    document.getElementById('regionFilter').addEventListener('change', applyFilters);
}

// ===== FUNCIONES DE BÚSQUEDA Y FILTROS =====
function searchContestants() {
    showLoading();
    setTimeout(() => {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        currentFilters.search = searchTerm;
        applyFilters();
        hideLoading();
    }, 800);
}

function applyFilters() {
    const searchTerm = currentFilters.search || document.getElementById('searchInput').value.toLowerCase();
    const yearFilter = document.getElementById('yearFilter').value;
    const placementFilter = document.getElementById('placementFilter').value;
    const regionFilter = document.getElementById('regionFilter').value;

    filteredData = contestantsData.filter(contestant => {
        const matchesSearch = !searchTerm || 
            contestant.name.toLowerCase().includes(searchTerm) ||
            contestant.city.toLowerCase().includes(searchTerm) ||
            contestant.year.toString().includes(searchTerm) ||
            contestant.profession.toLowerCase().includes(searchTerm);

        const matchesYear = !yearFilter || contestant.year.toString() === yearFilter;
        const matchesPlacement = !placementFilter || contestant.placement === placementFilter;
        const matchesRegion = !regionFilter || contestant.region === regionFilter;

        return matchesSearch && matchesYear && matchesPlacement && matchesRegion;
    });

    currentPage = 1;
    renderContestants();
    renderPagination();
}

function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('