function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("show");
}

// إغلاق القائمة عند الضغط خارجها
document.addEventListener("click", function (e) {
  const menu = document.getElementById("sideMenu");
  const toggleBtn = document.querySelector(".menu-toggle");

  if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
    menu.classList.remove("show");
  }
});
const courses = [
  { 
    id: 1, 
    title: "HTML For Beginners", 
    desc: "Learn how to build beautiful web pages from scratch.", 
    img: "html.jpg",
    link: "https://youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji&si=Q2-SQh1Qf3gD2ISX"
  },
  { 
    id: 2, 
    title: "CSS For Beginners", 
    desc: "CSS makes it beautiful, responsive, and user-friendly.", 
    img: "css.jpg",
    link: "https://youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe&si=Qqn-DoMuWzgmwp8q"
  },
  { 
    id: 3, 
    title: "JavaScript for Beginners", 
    desc: "Understand how to make websites interactive.", 
    img: "js.jpg",
    link: "https://youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&si=dw5g169x75VWHYDu"
  },
  { 
    id: 4, 
    title: "React Fundamentals", 
    desc: "A complete guide to building apps with React.js.", 
    img: "react.jpg",
    link: "https://youtube.com/playlist?list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&si=H-k066_sCZvNiKLf"
  },
  { 
    id: 5, 
    title: "Python for Web", 
    desc: "Use Flask and Django to build backend servers.", 
    img: "python.png",
    link: "https://youtube.com/playlist?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&si=egVX4h-W7h9otmhk"
  },
  { 
    id: 6, 
    title: "UI/UX Design Basics", 
    desc: "Learn how to design user-friendly interfaces.", 
    img: "ui ux.jpg",
    link: "https://youtube.com/playlist?list=PLjzhiGLyugKwnM6uN4NXhfpU8L7XvtDEv&si=ZPPaYIWB9s6LWQRh"
  }
  ,
  { 
    id: 7, 
    title: "ICDL Course", 
    desc: "It’s an internationally recognized certification that proves you have the essential computer and digital skills needed in work or study.", 
    img: "icdl.png",
    link: "https://youtube.com/playlist?list=PL_2IpQXzdCUoPRsvrDmag9CKUSjVN-1ft&si=XbJk2n09nEcCjAKi"
  }
  ,
  { 
    id: 8, 
    title: "Adobe Photoshop Course", 
    desc: "Adobe Photoshop is a powerful image editing and graphic design software developed by Adobe.", 
    img: "ps.png",
    link: "https://youtu.be/WlTsKiVwZAM?si=QAC0Zn95npUm6eOk"
  }
  ,
  { 
    id: 9, 
    title: "Adobe Illustrator Course", 
    desc: "Adobe Illustrator is a professional vector graphic design software made by Adobe. It’s used to create logos, icons, illustrations, typography, and print designs — anything that needs to look sharp at any size.", 
    img: "ill.png",
    link: "https://youtube.com/playlist?list=PLg9ps5Gu0MiC_T2Spv3tMmmQjhpCrKC7Z&si=zwfz8y4XTcDFjgEz"
  }
  ,
  { 
    id: 10, 
    title: "TypeScript Course", 
    desc: "TypeScript is a programming language developed by Microsoft. It’s basically JavaScript + extra features, mainly static typing. That means you can catch errors before running your code.", 
    img: "ts.png",
    link: "https://youtube.com/playlist?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ&si=EyE_D1QW-4Suth61"
  }
  ,
  { 
    id: 11, 
    title: "SQL Course", 
    desc: "SQL (Structured Query Language) is a language used to store, manage, and retrieve data from databases. It’s the main way developers interact with databases like MySQL, PostgreSQL, SQL Server, or SQLite.", 
    img: "sql.jpg",
    link: "https://youtube.com/playlist?list=PL1DUmTEdeA6J6oDLTveTt4Z7E5qEfFluE&si=-0oZqKQEKq3eLly_"
  }
  ,
  { 
    id: 12, 
    title: "Microsoft Word Course", 
    desc: "Microsoft Word is a word-processing program developed by Microsoft. It’s used to create, edit, format, and share documents like reports, letters, resumes, and books.", 
    img: "word.png",
    link: "https://youtube.com/playlist?list=PL9DWh3cmLYo0UcEaVug2mzvbAou0A8843&si=gl_VzwyPudtskIwa"
  }
  ,
  { 
    id: 13, 
    title: "Microsoft Excel Course", 
    desc: "Microsoft Excel is a spreadsheet program developed by Microsoft. It’s used to organize, calculate, analyze, and visualize data using tables, formulas, and charts.", 
    img: "excel.png",
    link: "https://youtube.com/playlist?list=PL9DWh3cmLYo2l3Po_PKs81bxEFJkULgS1&si=nZtrYxKftTSGbtP1"
  }
  ,
  { 
    id: 14, 
    title: "Microsoft Power Point Course", 
    desc: "Microsoft PowerPoint is a presentation software developed by Microsoft. It allows you to create slideshows that combine text, images, graphics, animations, and videos to present ideas clearly and attractively.", 
    img: "power.png",
    link: "https://youtube.com/playlist?list=PL9DWh3cmLYo0Zb3wRmQ5D03rq2Fj_J2S7&si=c8fJ03q9M44p_FqN"
  }
];

const container = document.getElementById("coursesContainer");
const modal = document.getElementById("courseModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");
const favoriteBtn = document.getElementById("favoriteBtn");
const searchInput = document.getElementById("searchInput");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let currentCourse = null;

function renderCourses(list) {
  container.innerHTML = "";
  list.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <img src="${course.img}" alt="${course.title}">
      <div class="course-info">
        <h3>${course.title}</h3>
        <p>${course.desc.substring(0, 60)}...</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(course));
    container.appendChild(card);
  });
}

function openModal(course) {
  currentCourse = course;
  modal.setAttribute('aria-hidden', 'false');
  modalImg.src = course.img;
  modalTitle.textContent = course.title;
  modalDesc.textContent = course.desc;
  document.getElementById("courseLink").href = course.link;

  const exists = favorites.some(f => String(f.id) === String(course.id));
  favoriteBtn.textContent = exists ? "❤️ Added to Favorites" : "♡ Add to Favorites";
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
}

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', e => { if (e.target === modal) closeModal(); });

favoriteBtn.addEventListener('click', () => {
  if (!currentCourse) return;
  const idx = favorites.findIndex(f => String(f.id) === String(currentCourse.id));
  if (idx >= 0) {
    favorites.splice(idx, 1);
  } else {
    favorites.push(currentCourse);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  openModal(currentCourse);
});

searchInput.addEventListener("input", e => {
  const term = e.target.value.trim().toLowerCase();
  const filtered = courses.filter(c => 
    c.title.toLowerCase().includes(term) || 
    c.desc.toLowerCase().includes(term)
  );
  renderCourses(filtered);
});

renderCourses(courses);
// Responsive search toggle
(function(){
  const searchWrap = document.querySelector('.search-wrap');
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');

  if(!searchWrap || !searchBtn || !searchInput) return;

  // Toggle search on small screens
  searchBtn.addEventListener('click', (e) => {
    // if input currently expanded (class present) and has value -> do actual search (submit)
    if (searchWrap.classList.contains('search-active')) {
      const q = searchInput.value.trim();
      if (q) {
        // run your existing search logic (example: filter courses)
        const event = new CustomEvent('mobileSearch', { detail: { query: q }});
        window.dispatchEvent(event);
      }
      // optionally collapse after search:
      // searchWrap.classList.remove('search-active');
      return;
    }

    // if screen is small -> open input, focus
    if (window.matchMedia('(max-width: 768px)').matches) {
      searchWrap.classList.add('search-active');
      setTimeout(()=> searchInput.focus(), 120);
    } else {
      // on desktop, focus input when icon clicked
      searchInput.focus();
    }
  });

  // if user clicks outside while on mobile, collapse the input
  document.addEventListener('click', (e) => {
    if (!window.matchMedia('(max-width: 768px)').matches) return;
    if (!searchWrap.classList.contains('search-active')) return;

    if (!searchWrap.contains(e.target)) {
      searchWrap.classList.remove('search-active');
    }
  });

  // optional: submit/search with Enter key
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = searchInput.value.trim();
      if (q) {
        // trigger your search function - example event:
        const event = new CustomEvent('mobileSearch', { detail: { query: q }});
        window.dispatchEvent(event);
      }
      // collapse after enter (mobile)
      if (window.matchMedia('(max-width: 768px)').matches) {
        searchWrap.classList.remove('search-active');
      }
    }
  });

  // Example: listen for mobileSearch elsewhere (if using existing renderCourses)
  window.addEventListener('mobileSearch', (ev) => {
    const q = ev.detail.query.toLowerCase();
    // if you have renderCourses function available globally:
    if (typeof renderCourses === 'function') {
      const filtered = (typeof courses !== 'undefined') ? courses.filter(c => (c.title + ' ' + c.desc).toLowerCase().includes(q)) : [];
      renderCourses(filtered);
    } else {
      // otherwise you can implement your own search handler here
      console.log('Search:', q);
    }
  });
})();
