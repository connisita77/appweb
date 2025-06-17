// ===== DATOS REALISTAS DE MISS UNIVERSE =====
const contestantsData = [
    {
        id: 1,
        name: "Victoria Kjær Theilvig",
        year: 2024,
        age: 21,
        country: "Denmark",
        city: "Copenhagen",
        region: "Europe",
        height: "1.76m",
        profession: "Model and Law Student",
        placement: "winner",
        placementText: "Miss Universe 2024",
        image: "https://images.unsplash.com/photo-1494790108755-2616b332c3e0?w=400&h=500&fit=crop",
        bio: "Victoria is a Danish model and law student who made history as Miss Universe 2024. She advocates for mental health awareness and women's rights.",
        achievements: ["Miss Universe 2024", "Miss Universe Denmark 2024", "Mental Health Advocate"],
        socialCause: "Mental health awareness and gender equality",
        instagram: "@victoriakjaer"
    },
    {
        id: 2,
        name: "Sheynnis Palacios",
        year: 2023,
        age: 23,
        country: "Nicaragua",
        city: "Managua",
        region: "Central America",
        height: "1.75m",
        profession: "Communications Student",
        placement: "winner",
        placementText: "Miss Universe 2023",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
        bio: "Sheynnis made history as the first Nicaraguan to win Miss Universe. She's passionate about education and women's empowerment.",
        achievements: ["Miss Universe 2023", "First Miss Universe from Nicaragua", "Education Advocate"],
        socialCause: "Education and women's empowerment",
        instagram: "@sheynnispalacios"
    },
    {
        id: 3,
        name: "Harnaaz Sandhu",
        year: 2021,
        age: 21,
        country: "India",
        city: "Punjab",
        region: "Asia",
        height: "1.73m",
        profession: "Model and Actress",
        placement: "winner",
        placementText: "Miss Universe 2021",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
        bio: "Harnaaz is an Indian model and actress who won Miss Universe 2021. She advocates for menstrual hygiene and women's health.",
        achievements: ["Miss Universe 2021", "Third Miss Universe from India", "Women's Health Advocate"],
        socialCause: "Menstrual hygiene and women's health",
        instagram: "@harnaazsandhu_"
    },
    {
        id: 4,
        name: "Zozibini Tunzi",
        year: 2019,
        age: 26,
        country: "South Africa",
        city: "Cape Town",
        region: "Africa",
        height: "1.75m",
        profession: "Model and Public Relations",
        placement: "winner",
        placementText: "Miss Universe 2019",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop",
        bio: "Zozibini is a South African model who won Miss Universe 2019. She's known for her advocacy on gender-based violence.",
        achievements: ["Miss Universe 2019", "Third Miss Universe from South Africa", "Gender Equality Advocate"],
        socialCause: "Gender-based violence prevention",
        instagram: "@zozitunzi"
    },
    {
        id: 5,
        name: "Catriona Gray",
        year: 2018,
        age: 24,
        country: "Philippines",
        city: "Manila",
        region: "Asia",
        height: "1.78m",
        profession: "Model and Singer",
        placement: "winner",
        placementText: "Miss Universe 2018",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
        bio: "Catriona is a Filipino-Australian model and singer who won Miss Universe 2018. Famous for her iconic slow-motion turn.",
        achievements: ["Miss Universe 2018", "Fourth Miss Universe from Philippines", "HIV/AIDS Awareness Advocate"],
        socialCause: "HIV/AIDS awareness and education",
        instagram: "@catriona_gray"
    },
    {
        id: 6,
        name: "Demi-Leigh Nel-Peters",
        year: 2017,
        age: 22,
        country: "South Africa",
        city: "Western Cape",
        region: "Africa",
        height: "1.74m",
        profession: "Model and Business Management Student",
        placement: "winner",
        placementText: "Miss Universe 2017",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
        bio: "Demi-Leigh is a South African model who won Miss Universe 2017. She advocates for women's self-defense and safety.",
        achievements: ["Miss Universe 2017", "Second Miss Universe from South Africa", "Women's Safety Advocate"],
        socialCause: "Women's self-defense and safety",
        instagram: "@demileighnp"
    },
    {
        id: 7,
        name: "Iris Mittenaere",
        year: 2016,
        age: 24,
        country: "France",
        city: "Paris",
        region: "Europe",
        height: "1.75m",
        profession: "Dental Student and Model",
        placement: "winner",
        placementText: "Miss Universe 2016",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
        bio: "Iris is a French dental student and model who won Miss Universe 2016. She promotes oral health awareness globally.",
        achievements: ["Miss Universe 2016", "Second Miss Universe from France", "Oral Health Advocate"],
        socialCause: "Oral health and dental hygiene education",
        instagram: "@irismittenaeremf"
    },
    {
        id: 8,
        name: "Pia Wurtzbach",
        year: 2015,
        age: 26,
        country: "Philippines",
        city: "Manila",
        region: "Asia",
        height: "1.73m",
        profession: "Actress and Model",
        placement: "winner",
        placementText: "Miss Universe 2015",
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=500&fit=crop",
        bio: "Pia is a Filipino actress and model who won Miss Universe 2015. She's known for her HIV/AIDS advocacy work.",
        achievements: ["Miss Universe 2015", "Third Miss Universe from Philippines", "HIV/AIDS Ambassador"],
        socialCause: "HIV/AIDS awareness and prevention",
        instagram: "@piawurtzbach"
    },
    {
        id: 9,
        name: "Chakkrit Yantasast",
        year: 2024,
        age: 20,
        country: "Thailand",
        city: "Bangkok",
        region: "Asia",
        height: "1.72m",
        profession: "University Student",
        placement: "runner-up",
        placementText: "First Runner-up 2024",
        image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=500&fit=crop",
        bio: "Chakkrit represented Thailand at Miss Universe 2024 and placed as first runner-up.",
        achievements: ["First Runner-up Miss Universe 2024", "Miss Universe Thailand 2024"],
        socialCause: "Education and youth development",
        instagram: "@chakkrit_th"
    },
    {
        id: 10,
        name: "María Fernanda Beltrán",
        year: 2024,
        age: 24,
        country: "Mexico",
        city: "Mexico City",
        region: "North America",
        height: "1.76m",
        profession: "Communications Graduate",
        placement: "top-10",
        placementText: "Top 10 Finalist 2024",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=500&fit=crop",
        bio: "María Fernanda represented Mexico at Miss Universe 2024 as the host country representative.",
        achievements: ["Top 10 Miss Universe 2024", "Miss Universe Mexico 2024"],
        socialCause: "Cultural preservation and women's rights",
        instagram: "@maferbeltran"
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
    console.log('Inicializando aplicación Miss Universe...');
    renderStats();
    renderContestants();
    renderPagination();
    setupEventListeners();
    setupNavigation();
});

// ===== NAVEGACIÓN Y SCROLL =====
function setupNavigation() {
    // Smooth scroll para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Cambiar navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== FUNCIONES DE NAVEGACIÓN =====
function scrollToContestants() {
    document.getElementById('contestants').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function showStats() {
    document.getElementById('statistics').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Búsqueda con Enter
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchContestants();
            }
        });

        // Búsqueda en tiempo real
        searchInput.addEventListener('input', function() {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                applyFilters();
            }, 300);
        });
    }

    // Filtros en tiempo real
    const yearFilter = document.getElementById('yearFilter');
    const placementFilter = document.getElementById('placementFilter');
    const regionFilter = document.getElementById('regionFilter');

    if (yearFilter) yearFilter.addEventListener('change', applyFilters);
    if (placementFilter) placementFilter.addEventListener('change', applyFilters);
    if (regionFilter) regionFilter.addEventListener('change', applyFilters);
}

// ===== FUNCIONES DE BÚSQUEDA Y FILTROS =====
function searchContestants() {
    showLoading();
    setTimeout(() => {
        applyFilters();
        hideLoading();
    }, 500);
}

function applyFilters() {
    const searchInput = document.getElementById('searchInput');
    const yearFilter = document.getElementById('yearFilter');
    const placementFilter = document.getElementById('placementFilter');
    const regionFilter = document.getElementById('regionFilter');

    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const yearValue = yearFilter ? yearFilter.value : '';
    const placementValue = placementFilter ? placementFilter.value : '';
    const regionValue = regionFilter ? regionFilter.value : '';

    filteredData = contestantsData.filter(contestant => {
        const matchesSearch = !searchTerm || 
            contestant.name.toLowerCase().includes(searchTerm) ||
            contestant.country.toLowerCase().includes(searchTerm) ||
            contestant.city.toLowerCase().includes(searchTerm) ||
            contestant.year.toString().includes(searchTerm) ||
            contestant.profession.toLowerCase().includes(searchTerm);

        const matchesYear = !yearValue || contestant.year.toString() === yearValue;
        const matchesPlacement = !placementValue || contestant.placement === placementValue;
        const matchesRegion = !regionValue || contestant.region === regionValue;

        return matchesSearch && matchesYear && matchesPlacement && matchesRegion;
    });

    currentPage = 1;
    renderContestants();
    renderPagination();
    
    // Mostrar mensaje si no hay resultados
    if (filteredData.length === 0) {
        showNoResults();
    }
}

function clearFilters() {
    const searchInput = document.getElementById('searchInput');
    const yearFilter = document.getElementById('yearFilter');
    const placementFilter = document.getElementById('placementFilter');
    const regionFilter = document.getElementById('regionFilter');

    if (searchInput) searchInput.value = '';
    if (yearFilter) yearFilter.value = '';
    if (placementFilter) placementFilter.value = '';
    if (regionFilter) regionFilter.value = '';

    filteredData = [...contestantsData];
    currentPage = 1;
    renderContestants();
    renderPagination();
}

// ===== FUNCIONES DE RENDERIZADO =====
function renderStats() {
    const statsContainer = document.getElementById('statsContainer');
    if (!statsContainer) return;

    const totalContestants = contestantsData.length;
    const totalCountries = [...new Set(contestantsData.map(c => c.country))].length;
    const winners = contestantsData.filter(c => c.placement === 'winner').length;
    const currentYear = new Date().getFullYear();

    const stats = [
        { icon: 'fas fa-crown', number: winners, label: 'Ganadoras' },
        { icon: 'fas fa-globe', number: totalCountries, label: 'Países' },
        { icon: 'fas fa-users', number: totalContestants, label: 'Candidatas' },
        { icon: 'fas fa-calendar', number: currentYear, label: 'Año Actual' }
    ];

    statsContainer.innerHTML = stats.map(stat => `
        <div class="col-md-3 col-sm-6 mb-4">
            <div class="stat-card">
                <div class="stat-icon">
                    <i class="${stat.icon}"></i>
                </div>
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        </div>
    `).join('');
}

function renderContestants() {
    const contestantsGrid = document.getElementById('contestantsGrid');
    if (!contestantsGrid) return;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentContestants = filteredData.slice(startIndex, endIndex);

    if (currentContestants.length === 0) {
        contestantsGrid.innerHTML = `
            <div class="col-12">
                <div class="no-results">
                    <i class="fas fa-search fa-3x mb-3"></i>
                    <h4>No se encontraron candidatas</h4>
                    <p>Intenta ajustar tus filtros de búsqueda</p>
                </div>
            </div>
        `;
        return;
    }

    contestantsGrid.innerHTML = currentContestants.map(contestant => `
        <div class="col-md-6 col-lg-3 mb-4">
            <div class="contestant-card" onclick="showContestantModal(${contestant.id})">
                <div class="card-image">
                    <img src="${contestant.image}" alt="${contestant.name}" loading="lazy">
                    <div class="card-overlay">
                        <div class="placement-badge ${contestant.placement}">
                            ${getPlacementText(contestant.placement)}
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <h5 class="contestant-name">${contestant.name}</h5>
                    <p class="contestant-country">
                        <i class="fas fa-globe-americas"></i> ${contestant.country}
                    </p>
                    <p class="contestant-year">
                        <i class="fas fa-calendar"></i> ${contestant.year}
                    </p>
                    <p class="contestant-profession">${contestant.profession}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary btn-sm w-100">
                        <i class="fas fa-eye me-1"></i> Ver Detalles
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getPlacementText(placement) {
    const placements = {
        'winner': 'Ganadora',
        'runner-up': 'Finalista',
        'top-10': 'Top 10'
    };
    return placements[placement] || 'Participante';
}

function renderPagination() {
    const paginationElement = document.getElementById('pagination');
    if (!paginationElement) return;

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    
    if (totalPages <= 1) {
        paginationElement.innerHTML = '';
        return;
    }

    let paginationHTML = '';

    // Botón anterior
    paginationHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1})" aria-label="Anterior">
                <i class="fas fa-chevron-left"></i>
            </a>
        </li>
    `;

    // Números de página
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
            paginationHTML += `
                <li class="page-item ${i === currentPage ? 'active' : ''}">
                    <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
                </li>
            `;
        } else if (Math.abs(i - currentPage) === 2) {
            paginationHTML += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        }
    }

    // Botón siguiente
    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1})" aria-label="Siguiente">
                <i class="fas fa-chevron-right"></i>
            </a>
        </li>
    `;

    paginationElement.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderContestants();
    renderPagination();
    
    // Scroll suave a la grilla de candidatas
    document.getElementById('contestants').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// ===== MODAL DE DETALLES =====
function showContestantModal(contestantId) {
    const contestant = contestantsData.find(c => c.id === contestantId);
    if (!contestant) return;

    const modalBody = document.getElementById('modalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-4">
                <img src="${contestant.image}" alt="${contestant.name}" class="img-fluid rounded modal-image">
            </div>
            <div class="col-md-8">
                <h4 class="modal-contestant-name">${contestant.name}</h4>
                <div class="modal-info">
                    <p><strong><i class="fas fa-crown"></i> Título:</strong> ${contestant.placementText}</p>
                    <p><strong><i class="fas fa-globe"></i> País:</strong> ${contestant.country}</p>
                    <p><strong><i class="fas fa-map-marker-alt"></i> Ciudad:</strong> ${contestant.city}</p>
                    <p><strong><i class="fas fa-calendar"></i> Año:</strong> ${contestant.year}</p>
                    <p><strong><i class="fas fa-ruler-vertical"></i> Altura:</strong> ${contestant.height}</p>
                    <p><strong><i class="fas fa-briefcase"></i> Profesión:</strong> ${contestant.profession}</p>
                    <p><strong><i class="fas fa-birthday-cake"></i> Edad:</strong> ${contestant.age} años</p>
                </div>
                
                <div class="modal-bio">
                    <h6><i class="fas fa-user"></i> Biografía</h6>
                    <p>${contestant.bio}</p>
                </div>

                <div class="modal-cause">
                    <h6><i class="fas fa-heart"></i> Causa Social</h6>
                    <p>${contestant.socialCause}</p>
                </div>

                <div class="modal-achievements">
                    <h6><i class="fas fa-trophy"></i> Logros</h6>
                    <ul>
                        ${contestant.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal-social">
                    <a href="#" class="btn btn-outline-primary btn-sm">
                        <i class="fab fa-instagram"></i> ${contestant.instagram}
                    </a>
                </div>
            </div>
        </div>
    `;

    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('contestantModal'));
    modal.show();
}

// ===== FUNCIONES AUXILIARES =====
function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'block';
    }
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
    }
}

function showNoResults() {
    const contestantsGrid = document.getElementById('contestantsGrid');
    if (contestantsGrid) {
        contestantsGrid.innerHTML = `
            <div class="col-12">
                <div class="no-results text-center">
                    <i class="fas fa-search fa-3x mb-3 text-muted"></i>
                    <h4>No se encontraron candidatas</h4>
                    <p class="text-muted">Intenta ajustar tus filtros de búsqueda</p>
                    <button class="btn btn-primary" onclick="clearFilters()">
                        <i class="fas fa-refresh me-2"></i>Limpiar Filtros
                    </button>
                </div>
            </div>
        `;
    }
}

// ===== INICIALIZACIÓN AL CARGAR LA PÁGINA =====
window.addEventListener('load', function() {
    hideLoading();
    console.log('Aplicación Miss Universe cargada completamente');
});

// ===== MANEJO DE ERRORES =====
window.addEventListener('error', function(e) {
    console.error('Error en la aplicación:', e.error);
    hideLoading();
});

// Exportar funciones para uso global
window.searchContestants = searchContestants;
window.clearFilters = clearFilters;
window.showContestantModal = showContestantModal;
window.changePage = changePage;
window.scrollToContestants = scrollToContestants;
window.showStats = showStats;