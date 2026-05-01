const body = document.body;
const currentPage = body.dataset.page;

const desktop = document.getElementById("desktop");
const mainNav = document.getElementById("mainNav");
const mobileMenu = document.getElementById("mobileMenu");
const fxToggle = document.getElementById("fxToggle");

const navLinks = document.querySelectorAll(".main-nav a");
const projectsGrid = document.getElementById("projectsGrid");

const projectOverlay = document.getElementById("projectOverlay");
const projectClose = document.getElementById("projectClose");
const projectModalFile = document.getElementById("projectModalFile");
const projectModalCategory = document.getElementById("projectModalCategory");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalLead = document.getElementById("projectModalLead");
const projectModalOverview = document.getElementById("projectModalOverview");
const projectModalProcess = document.getElementById("projectModalProcess");
const projectModalOutcome = document.getElementById("projectModalOutcome");
const projectModalTags = document.getElementById("projectModalTags");

const projectModalBody = document.getElementById("projectModalBody");
const projectMainImage = document.getElementById("projectMainImage");
const projectMainImageTag = document.getElementById("projectMainImageTag");
const projectImageCounter = document.getElementById("projectImageCounter");
const projectImageCaption = document.getElementById("projectImageCaption");
const projectGalleryStrip = document.getElementById("projectGalleryStrip");

const lightbox = document.getElementById("lightbox");
const lightboxBack = document.getElementById("lightboxBack");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCounter = document.getElementById("lightboxCounter");

let activeProjectKey = null;
let activeImageIndex = 0;

const projectData = {
  project1: {
    file: "project_01.txt",
    category: "interactive object",
    title: "Project 01",
    summary: "Short archive note. State what this project is.",
    lead: "Project note. Add context, role, and design intention here.",
    overview: "Overview entry. Describe the assignment, context, and central design question.",
    process: "Process entry. Describe research, sketches, prototypes, tests, and relevant decisions.",
    outcome: "Outcome entry. Describe the final result, what changed, and what was learned.",
    tags: ["prototype", "interaction", "design"],
    images: [
      { src: "assets/images/project1/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project1/01.jpg", caption: "context frame" },
      { src: "assets/images/project1/02.jpg", caption: "process frame" },
      { src: "assets/images/project1/03.jpg", caption: "outcome frame" }
    ]
  },

  project2: {
    file: "project_02.txt",
    category: "service design",
    title: "Project 02",
    summary: "Short archive note. State what this project is.",
    lead: "Project note. Add context, role, and design intention here.",
    overview: "Overview entry. Describe the assignment, context, and central design question.",
    process: "Process entry. Describe research, sketches, prototypes, tests, and relevant decisions.",
    outcome: "Outcome entry. Describe the final result, what changed, and what was learned.",
    tags: ["research", "system", "concept"],
    images: [
      { src: "assets/images/project2/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project2/01.jpg", caption: "context frame" },
      { src: "assets/images/project2/02.jpg", caption: "process frame" },
      { src: "assets/images/project2/03.jpg", caption: "outcome frame" }
    ]
  },

  project3: {
    file: "project_03.txt",
    category: "speculative design",
    title: "Project 03",
    summary: "Short archive note. State what this project is.",
    lead: "Project note. Add context, role, and design intention here.",
    overview: "Overview entry. Describe the assignment, context, and central design question.",
    process: "Process entry. Describe research, sketches, prototypes, tests, and relevant decisions.",
    outcome: "Outcome entry. Describe the final result, what changed, and what was learned.",
    tags: ["future", "critical", "vision"],
    images: [
      { src: "assets/images/project3/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project3/01.jpg", caption: "context frame" },
      { src: "assets/images/project3/02.jpg", caption: "process frame" },
      { src: "assets/images/project3/03.jpg", caption: "outcome frame" }
    ]
  },

  project4: {
    file: "project_04.txt",
    category: "user research",
    title: "Project 04",
    summary: "Short archive note. State what this project is.",
    lead: "Project note. Add context, role, and design intention here.",
    overview: "Overview entry. Describe the assignment, context, and central design question.",
    process: "Process entry. Describe research, sketches, prototypes, tests, and relevant decisions.",
    outcome: "Outcome entry. Describe the final result, what changed, and what was learned.",
    tags: ["insight", "testing", "analysis"],
    images: [
      { src: "assets/images/project4/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project4/01.jpg", caption: "context frame" },
      { src: "assets/images/project4/02.jpg", caption: "process frame" },
      { src: "assets/images/project4/03.jpg", caption: "outcome frame" }
    ]
  },

  project5: {
    file: "project_05.txt",
    category: "physical computing",
    title: "Project 05",
    summary: "Short archive note. State what this project is.",
    lead: "Project note. Add context, role, and design intention here.",
    overview: "Overview entry. Describe the assignment, context, and central design question.",
    process: "Process entry. Describe research, sketches, prototypes, tests, and relevant decisions.",
    outcome: "Outcome entry. Describe the final result, what changed, and what was learned.",
    tags: ["electronics", "making", "prototype"],
    images: [
      { src: "assets/images/project5/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project5/01.jpg", caption: "context frame" },
      { src: "assets/images/project5/02.jpg", caption: "process frame" },
      { src: "assets/images/project5/03.jpg", caption: "outcome frame" }
    ]
  },

  project6: {
    file: "project_06.txt",
    category: "visual identity",
    title: "Project 06",
    summary: "Short archive note. State what this project is.",
    lead: "Project note. Add context, role, and design intention here.",
    overview: "Overview entry. Describe the assignment, context, and central design question.",
    process: "Process entry. Describe research, sketches, prototypes, tests, and relevant decisions.",
    outcome: "Outcome entry. Describe the final result, what changed, and what was learned.",
    tags: ["visual", "identity", "communication"],
    images: [
      { src: "assets/images/project6/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project6/01.jpg", caption: "context frame" },
      { src: "assets/images/project6/02.jpg", caption: "process frame" },
      { src: "assets/images/project6/03.jpg", caption: "outcome frame" }
    ]
  },

  project7: {
    file: "project_07.txt",
    category: "experience design",
    title: "Project 07",
    summary: "Short archive note. State what this project is.",
    lead: "Project note. Add context, role, and design intention here.",
    overview: "Overview entry. Describe the assignment, context, and central design question.",
    process: "Process entry. Describe research, sketches, prototypes, tests, and relevant decisions.",
    outcome: "Outcome entry. Describe the final result, what changed, and what was learned.",
    tags: ["experience", "interface", "testing"],
    images: [
      { src: "assets/images/project7/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project7/01.jpg", caption: "context frame" },
      { src: "assets/images/project7/02.jpg", caption: "process frame" },
      { src: "assets/images/project7/03.jpg", caption: "outcome frame" }
    ]
  },

  project8: {
    file: "project_08.txt",
    category: "material study",
    title: "Project 08",
    summary: "Short archive note. State what this project is.",
    lead: "Project note. Add context, role, and design intention here.",
    overview: "Overview entry. Describe the assignment, context, and central design question.",
    process: "Process entry. Describe research, sketches, prototypes, tests, and relevant decisions.",
    outcome: "Outcome entry. Describe the final result, what changed, and what was learned.",
    tags: ["material", "experiment", "craft"],
    images: [
      { src: "assets/images/project8/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project8/01.jpg", caption: "context frame" },
      { src: "assets/images/project8/02.jpg", caption: "process frame" },
      { src: "assets/images/project8/03.jpg", caption: "outcome frame" }
    ]
  },

  project9: {
    file: "project_09.txt",
    category: "system design",
    title: "Project 09",
    summary: "Short archive note. State what this project is.",
    lead: "Project note. Add context, role, and design intention here.",
    overview: "Overview entry. Describe the assignment, context, and central design question.",
    process: "Process entry. Describe research, sketches, prototypes, tests, and relevant decisions.",
    outcome: "Outcome entry. Describe the final result, what changed, and what was learned.",
    tags: ["system", "strategy", "mapping"],
    images: [
      { src: "assets/images/project9/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project9/01.jpg", caption: "context frame" },
      { src: "assets/images/project9/02.jpg", caption: "process frame" },
      { src: "assets/images/project9/03.jpg", caption: "outcome frame" }
    ]
  },

  project10: {
    file: "project_10.txt",
    category: "product concept",
    title: "Project 10",
    summary: "Short archive note. State what this project is.",
    lead: "Project note. Add context, role, and design intention here.",
    overview: "Overview entry. Describe the assignment, context, and central design question.",
    process: "Process entry. Describe research, sketches, prototypes, tests, and relevant decisions.",
    outcome: "Outcome entry. Describe the final result, what changed, and what was learned.",
    tags: ["product", "form", "prototype"],
    images: [
      { src: "assets/images/project10/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project10/01.jpg", caption: "context frame" },
      { src: "assets/images/project10/02.jpg", caption: "process frame" },
      { src: "assets/images/project10/03.jpg", caption: "outcome frame" }
    ]
  },

  project11: {
    file: "project_11.txt",
    category: "social design",
    title: "Project 11",
    summary: "Short archive note. State what this project is.",
    lead: "Project note. Add context, role, and design intention here.",
    overview: "Overview entry. Describe the assignment, context, and central design question.",
    process: "Process entry. Describe research, sketches, prototypes, tests, and relevant decisions.",
    outcome: "Outcome entry. Describe the final result, what changed, and what was learned.",
    tags: ["people", "society", "research"],
    images: [
      { src: "assets/images/project11/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project11/01.jpg", caption: "context frame" },
      { src: "assets/images/project11/02.jpg", caption: "process frame" },
      { src: "assets/images/project11/03.jpg", caption: "outcome frame" }
    ]
  },

  project12: {
    file: "project_12.txt",
    category: "self-directed",
    title: "Project 12",
    summary: "Short archive note. State what this project is.",
    lead: "Project note. Add context, role, and design intention here.",
    overview: "Overview entry. Describe the assignment, context, and central design question.",
    process: "Process entry. Describe research, sketches, prototypes, tests, and relevant decisions.",
    outcome: "Outcome entry. Describe the final result, what changed, and what was learned.",
    tags: ["personal", "experiment", "design"],
    images: [
      { src: "assets/images/project12/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project12/01.jpg", caption: "context frame" },
      { src: "assets/images/project12/02.jpg", caption: "process frame" },
      { src: "assets/images/project12/03.jpg", caption: "outcome frame" }
    ]
  }
};

function getImageSrc(image) {
  return typeof image === "string" ? image : image.src;
}

function getImageCaption(image) {
  return typeof image === "string" ? "" : image.caption || "";
}

function setActiveNavigation() {
  navLinks.forEach((link) => {
    if (link.dataset.link === currentPage) {
      link.classList.add("active");
    }
  });
}

function initMobileMenu() {
  if (!mobileMenu || !mainNav) return;

  mobileMenu.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

function setDitherState(isOn) {
  if (!desktop) return;

  desktop.classList.toggle("dither-on", isOn);

  if (fxToggle) {
    fxToggle.textContent = `DITHER: ${isOn ? "ON" : "OFF"}`;
  }

  localStorage.setItem("dither-mode", isOn ? "on" : "off");
}

function initDitherToggle() {
  const saved = localStorage.getItem("dither-mode");

  if (saved === "off") {
    setDitherState(false);
  } else {
    setDitherState(true);
  }

  if (!fxToggle || !desktop) return;

  fxToggle.addEventListener("click", () => {
    const nextState = !desktop.classList.contains("dither-on");
    setDitherState(nextState);
  });
}

function initPageTransitions() {
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href) return;
    if (href.startsWith("#")) return;
    if (href.startsWith("http")) return;
    if (href.startsWith("mailto:")) return;
    if (href.startsWith("tel:")) return;
    if (link.hasAttribute("target")) return;

    link.addEventListener("click", (event) => {
      if (!desktop) return;

      event.preventDefault();

      mainNav?.classList.remove("open");

      desktop.classList.remove("page-enter");
      desktop.classList.add("page-leave");

      window.setTimeout(() => {
        window.location.href = href;
      }, 390);
    });
  });
}

function renderProjectsGrid() {
  if (!projectsGrid) return;

  const projectEntries = Object.entries(projectData);

  projectsGrid.innerHTML = projectEntries
    .map(([key, project], index) => {
      const number = String(index + 1).padStart(2, "0");
      const cover = getImageSrc(project.images[0]);

      return `
        <article class="project-card">
          <div class="project-card-bar">
            <span>card_${number}</span>
            <span>${project.category}</span>
          </div>

          <button class="project-thumb-button" type="button" data-project="${key}">
            <img src="${cover}" alt="${project.title} preview">
          </button>

          <div class="project-card-body">
            <h2>${project.title}</h2>
            <p>${project.summary}</p>

            <button type="button" data-project="${key}">
              Open file
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  projectsGrid.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      openProject(button.dataset.project);
    });
  });
}

function openProject(projectKey) {
  const project = projectData[projectKey];

  if (!project || !projectOverlay) return;

  activeProjectKey = projectKey;
  activeImageIndex = 0;

  projectModalFile.textContent = project.file;
  projectModalCategory.textContent = project.category;
  projectModalTitle.textContent = project.title;
  projectModalLead.textContent = project.lead;
  projectModalOverview.textContent = project.overview;
  projectModalProcess.textContent = project.process;
  projectModalOutcome.textContent = project.outcome;

  projectModalTags.innerHTML = project.tags
    .map((tag) => `<span>${tag}</span>`)
    .join("");

  renderGallery();
  updateProjectImage();
  closeLightbox();

  projectOverlay.classList.add("open");
  projectOverlay.setAttribute("aria-hidden", "false");
}

function closeProject() {
  if (!projectOverlay) return;

  projectOverlay.classList.remove("open");
  projectOverlay.setAttribute("aria-hidden", "true");
  closeLightbox();
}

function renderGallery() {
  const project = projectData[activeProjectKey];

  if (!project || !projectGalleryStrip) return;

  projectGalleryStrip.innerHTML = project.images
    .map((image, index) => {
      return `
        <button class="gallery-thumb" type="button" data-image-index="${index}">
          <img src="${getImageSrc(image)}" alt="Project image ${index + 1}">
        </button>
      `;
    })
    .join("");

  projectGalleryStrip.querySelectorAll(".gallery-thumb").forEach((button) => {
    button.addEventListener("click", () => {
      activeImageIndex = Number(button.dataset.imageIndex);
      updateProjectImage();
    });
  });
}

function updateProjectImage() {
  const project = projectData[activeProjectKey];

  if (!project || !projectMainImageTag) return;

  const image = project.images[activeImageIndex];
  const imageSrc = getImageSrc(image);
  const caption = getImageCaption(image);

  projectMainImageTag.src = imageSrc;
  projectMainImageTag.alt = `${project.title} image ${activeImageIndex + 1}`;

  projectImageCounter.textContent =
    `${String(activeImageIndex + 1).padStart(2, "0")} / ${String(project.images.length).padStart(2, "0")}`;

  projectImageCaption.textContent = caption;

  projectGalleryStrip.querySelectorAll(".gallery-thumb").forEach((thumb, index) => {
    thumb.classList.toggle("active", index === activeImageIndex);
  });

  updateLightboxImage();
}

function changeImage(direction) {
  const project = projectData[activeProjectKey];

  if (!project) return;

  activeImageIndex =
    (activeImageIndex + direction + project.images.length) % project.images.length;

  updateProjectImage();
}

function openLightbox() {
  if (!lightbox || !projectModalBody) return;

  projectModalBody.classList.add("hidden");
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");

  updateLightboxImage();
}

function closeLightbox() {
  if (!lightbox || !projectModalBody) return;

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  projectModalBody.classList.remove("hidden");
}

function updateLightboxImage() {
  const project = projectData[activeProjectKey];

  if (!project || !lightboxImage || !lightboxCounter) return;

  const image = project.images[activeImageIndex];

  lightboxImage.src = getImageSrc(image);
  lightboxImage.alt = `${project.title} enlarged image ${activeImageIndex + 1}`;
  lightboxCounter.textContent = `${activeImageIndex + 1} / ${project.images.length}`;
}

function initProjectModal() {
  if (!projectOverlay) return;

  projectClose.addEventListener("click", closeProject);

  projectOverlay.addEventListener("click", (event) => {
    if (event.target === projectOverlay) {
      closeProject();
    }
  });

  projectMainImage.addEventListener("click", openLightbox);

  lightboxBack.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => changeImage(-1));
  lightboxNext.addEventListener("click", () => changeImage(1));
}

document.addEventListener("keydown", (event) => {
  const modalOpen = projectOverlay && projectOverlay.classList.contains("open");
  const lightboxOpen = lightbox && lightbox.classList.contains("open");

  if (!modalOpen) return;

  if (event.key === "Escape") {
    if (lightboxOpen) {
      closeLightbox();
    } else {
      closeProject();
    }
  }

  if (event.key === "ArrowLeft") {
    changeImage(-1);
  }

  if (event.key === "ArrowRight") {
    changeImage(1);
  }
});

window.addEventListener("load", () => {
  setActiveNavigation();
  initMobileMenu();
  initDitherToggle();
  initPageTransitions();
  renderProjectsGrid();
  initProjectModal();

  if (desktop) {
    desktop.classList.add("page-enter");

    window.setTimeout(() => {
      desktop.classList.remove("page-enter");
    }, 480);
  }
});