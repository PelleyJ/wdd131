const gearData = [
  {
    id: 1,
    name: "Shoei RF-1400 Helmet",
    category: "helmet",
    image: "images/helmet1.jpg",
    description: "High-performance full-face helmet with superior aerodynamics.",
  },
  {
    id: 2,
    name: "Alpinestars Leather Jacket",
    category: "jacket",
    image: "images/jacket1.jpg",
    description: "Classic leather protection with modern ventilation panels.",
  },
  {
    id: 3,
    name: "FIVE Gloves Stunt Evo 2",
    category: "gloves",
    image: "images/gloves1.jpg",
    description: "Breathable and light weight summer riding glove.",
  },
];

function renderGear(filter = "all") {
  const gearList = document.getElementById("gear-list");
  if (!gearList) return;

  gearList.innerHTML = "";

  const filteredGear = filter === "all"
    ? gearData
    : gearData.filter(item => item.category === filter);

  filteredGear.forEach(item => {
    const gearCard = document.createElement("div");
    gearCard.classList.add("gear-card");

    gearCard.innerHTML = `
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <button onclick="saveFavorite(${item.id})">❤️ Save</button>
    `;

    gearList.appendChild(gearCard);
  });
}

function saveFavorite(id) {
  const selectedGear = gearData.find(item => item.id === id);
  let savedGear = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!savedGear.find(item => item.id === id)) {
    savedGear.push(selectedGear);
    localStorage.setItem("favorites", JSON.stringify(savedGear));
    alert(`${selectedGear.name} saved to favorites!`);
  } else {
    alert(`${selectedGear.name} is already in your favorites.`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const filterSelect = document.getElementById("gear-filter");
  if (filterSelect) {
    renderGear();
    filterSelect.addEventListener("change", (e) => {
      renderGear(e.target.value);
    });
  }
});
// ---------- Route Data ----------
const routes = [
  {
    name: "Hakone Turnpike",
    location: "Kanagawa Prefecture",
    difficulty: "moderate",
    image: "images/route-hakone.jpg",
    description: "A scenic mountain road with smooth curves and amazing Fuji views."
  },
  {
    name: "Mt. Fuji Skyline",
    location: "Shizuoka Prefecture",
    difficulty: "easy",
    image: "images/route-fuji.jpg",
    description: "Gentle ride with panoramic views of Mt. Fuji and surrounding lakes."
  },
  {
    name: "Izu Skyline",
    location: "Izu Peninsula",
    difficulty: "advanced",
    image: "images/route-izu.jpg",
    description: "Twist-heavy ride perfect for experienced riders seeking a thrill."
  }
];

// ---------- Render Routes ----------
function renderRoutes() {
  const routeList = document.getElementById("route-list");
  if (!routeList) return;

  routes.forEach(route => {
    const card = document.createElement("div");
    card.classList.add("route-card");

    card.innerHTML = `
      <img src="${route.image}" alt="${route.name}" loading="lazy">
      <h3>${route.name}</h3>
      <p><strong>Location:</strong> ${route.location}</p>
      <p><strong>Difficulty:</strong> ${route.difficulty}</p>
      <p>${route.description}</p>
    `;

    // Optional: Highlight advanced routes
    if (route.difficulty === "advanced") {
      card.style.borderColor = "crimson";
    }

    routeList.appendChild(card);
  });
}

// ---------- Call on Page Load ----------
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("route-list")) {
    renderRoutes();
  }
});
