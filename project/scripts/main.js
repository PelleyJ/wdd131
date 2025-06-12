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
    description: "Waterproof and thermal-lined for cold-season riding.",
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
