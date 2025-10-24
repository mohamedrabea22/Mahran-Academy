const favContainer = document.getElementById("favContainer");
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function renderFavorites() {
  favContainer.innerHTML = "";
  if (!Array.isArray(favorites) || favorites.length === 0) {
    favContainer.innerHTML = `<p style="text-align:center;color:#64748b;">No favorite courses yet 😔</p>`;
    return;
  }

  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
  grid.style.gap = '1.5rem';

  favorites.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <img src="${course.img}" alt="${course.title}">
      <div class="course-info">
        <h3>${course.title}</h3>
        <p>${course.desc.substring(0, 80)}...</p>
        <div class="modal-actions">
          <a href="${course.link}" target="_blank" class="btn2">Go to Course</a>
          <button class="remove-btn" data-id="${course.id}" style= "background: #facc15;
  color: #0c83c4;
  padding: 8px 14px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
  border: none">Remove</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  favContainer.appendChild(grid);

  favContainer.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = e.target.dataset.id;
      favorites = favorites.filter(f => String(f.id) !== String(id));
      localStorage.setItem("favorites", JSON.stringify(favorites));
      renderFavorites();
    });
  });
}

renderFavorites();
