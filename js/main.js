const body = document.body;
const currentPage = body.dataset.page;
const navLinks = document.querySelectorAll(".nav a");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const crtToggle = document.getElementById("crtToggle");
const shell = document.getElementById("shell");
const crtTile = document.getElementById("crtTile");

const projectOverlay = document.getElementById("projectOverlay");
const projectClose = document.getElementById("projectClose");
const projectOpenButtons = document.querySelectorAll(".project-open");

const projectModalFile = document.getElementById("projectModalFile");
const projectModalCategory = document.getElementById("projectModalCategory");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalLead = document.getElementById("projectModalLead");
const projectModalTags = document.getElementById("projectModalTags");
const projectModalOverview = document.getElementById("projectModalOverview");
const projectModalProcess = document.getElementById("projectModalProcess");
const projectModalOutcome = document.getElementById("projectModalOutcome");

const projectModalThumb = document.getElementById("projectModalThumb");
const projectGalleryStrip = document.getElementById("projectGalleryStrip");
const projectModalScroll = document.getElementById("projectModalScroll");

const projectLightbox = document.getElementById("projectLightbox");
const lightboxBack = document.getElementById("lightboxBack");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCounter = document.getElementById("lightboxCounter");
const projectLightboxThumbs = document.getElementById("projectLightboxThumbs");
const projectImageCounter = document.getElementById("projectImageCounter");
const projectImageCaption = document.getElementById("projectImageCaption");

let activeProjectKey = null;
let activeImageIndex = 0;

const projectData = {
  project1: {
    file: "project-01.html",
    category: "interactive object",
    title: "Project 01",
    lead: "Project summary text.",
    tags: ["prototype"],
    overview: "Overview text.",
    process: "Process text.",
    outcome: "Outcome text.",
    images: [
      { src: "assets/images/project1/project1-1.jpeg", caption: "je moeder" },
      { src: "assets/images/project1/WhatsApp Image 2025-04-15 at 18.20.20.jpeg333.jpeg", caption: "" },
      { src: "assets/images/project1/WhatsApp Image 2025-04-15 at 18.20.20.jpeg33.jpeg", caption: "" },
      { src: "assets/images/project1/WhatsApp Image 2025-04-15 at 18.20.20.jpeg", caption: "" },
      { src: "assets/images/project1/Screenshot 2025-05-13 at 21-00-34 gSfWNPnqA36602xQvoQu0[...].png", caption: "" },
      { src: "assets/images/project1/Screenshot 2025-05-13 at 20-56-48 ZTdyoTqHbFclR3fMryXib[...].png", caption: "" },
      { src: "assets/images/project1/project1-1.jpeg", caption: "" }
    ]
  },

  project2: {
    file: "project-02.html",
    category: "design research",
    title: "Project 02",
    lead: "Project summary text.",
    tags: ["research"],
    overview: "Overview text.",
    process: "Process text.",
    outcome: "Outcome text.",
    images: [
      { src: "assets/images/project2/WhatsApp Image 2024-12-06 at 16.18.19.jpeg", caption: "" },
      { src: "assets/images/project2/23452345234.jpg", caption: "" },
      { src: "assets/images/project2/WhatsApp Image 2025-01-13 at 14.19.40.jpeg", caption: "" },
      { src: "assets/images/project2/Pict23323ure2.jpg", caption: "" },
      { src: "assets/images/project2/Picture143.png", caption: "" },
      { src: "assets/images/project2/WhatsApp Image 2024-09-25 at 16.26.58.jpeg", caption: "" },
      { src: "assets/images/project2/WhatsApp Image 2024-09-25 at 16.26.59.jpeg", caption: "" },
      { src: "assets/images/project2/WhatsApp Image 2024-09-30 at 12.25.50.jpeg", caption: "" }
    ]
  },

  project3: {
    file: "project-03.html",
    category: "concept",
    title: "Project 03",
    lead: "Project summary text.",
    tags: ["concept"],
    overview: "Overview text.",
    process: "Process text.",
    outcome: "Outcome text.",
    images: [
      { src: "assets/images/project3/Challenge_4_variations_page-0001.jpg", caption: "" }
    ]
  },

  project4: {
    file: "project-04.html",
    category: "prototype",
    title: "Project 04",
    lead: "Project summary text.",
    tags: ["prototype"],
    overview: "Overview text.",
    process: "Process text.",
    outcome: "Outcome text.",
    images: [
      { src: "assets/images/project4/Screenshot 2025-04-15 181747.png", caption: "" }
    ]
  },

  project5: {
    file: "project-05.html",
    category: "product",
    title: "Project 05",
    lead: "Project summary text.",
    tags: ["product"],
    overview: "Overview text.",
    process: "Process text.",
    outcome: "Outcome text.",
    images: [
      { src: "assets/images/project5/WhatsApp Image 2025-12-12 at 17.38.31(1).jpeg", caption: "" },
      { src: "assets/images/project5/WhatsApp Image 2025-12-12 at 17.38.31.jpeg", caption: "" },
      { src: "assets/images/project5/WhatsApp Image 2025-12-12 at 17.38.33.jpeg", caption: "" },
      { src: "assets/images/project5/WhatsApp Image 2025-12-12 at 17.38.32(2).jpeg", caption: "" },
      { src: "assets/images/project5/WhatsApp Image 2025-12-12 at 17.38.31(2).jpeg", caption: "" },
      { src: "assets/images/project5/export202512022227589470(1).png", caption: "" },
      { src: "assets/images/project5/WhatsApp Image 2026-03-09 at 17.11.32.jpeg", caption: "" },
      { src: "assets/images/project5/WhatsApp Image 2026-03-09 at 17.11.33.jpeg", caption: "" },
      { src: "assets/images/project5/WhatsApp Image 2026-03-09 at 17.09.20(1).jpeg", caption: "" },
      { src: "assets/images/project5/WhatsApp Image 2026-03-09 at 17.09.20.jpeg", caption: "" }
    ]
  },

  project6: {
    file: "project-06.html",
    category: "system",
    title: "Project 06",
    lead: "Project summary text.",
    tags: ["system"],
    overview: "Overview text.",
    process: "Process text.",
    outcome: "Outcome text.",
    images: [
      { src: "assets/images/project6/WhatsApp Image 2025-10-30 at 16.32.05.jpeg", caption: "" },
      { src: "assets/images/project6/WhatsApp Image 2025-10-30 at 16.32.06(1).jpeg", caption: "" },
      { src: "assets/images/project6/WhatsApp Image 2025-10-30 at 16.32.06(2).jpeg", caption: "" },
      { src: "assets/images/project6/WhatsApp Image 2025-10-30 at 16.32.07(1).jpeg", caption: "" },
      { src: "assets/images/project6/WhatsApp Image 2025-10-30 at 16.32.07(2).jpeg", caption: "" },
      { src: "assets/images/project6/WhatsApp Image 2025-10-30 at 16.32.07(3).jpeg", caption: "" },
      { src: "assets/images/project6/WhatsApp Image 2025-10-31 at 13.35.42(2).jpeg", caption: "" },
      { src: "assets/images/project6/WhatsApp Image 2025-10-31 at 14.23.14.jpeg", caption: "" }
    ]
  },

  project7: {
    file: "project-07.html",
    category: "interface",
    title: "Project 07",
    lead: "Project summary text.",
    tags: ["interface"],
    overview: "Overview text.",
    process: "Process text.",
    outcome: "Outcome text.",
    images: [
      { src: "assets/images/project7/image24.jpeg", caption: "" },
      { src: "assets/images/project7/image19.jpeg", caption: "" },
      { src: "assets/images/project7/image20.jpeg", caption: "" },
      { src: "assets/images/project7/image21.png", caption: "" },
      { src: "assets/images/project7/image22.png", caption: "" },
      { src: "assets/images/project7/image23.png", caption: "" }
    ]
  },

  project8: {
    file: "project-08.html",
    category: "research",
    title: "Project 08",
    lead: "Project summary text.",
    tags: ["research"],
    overview: "Overview text.",
    process: "Process text.",
    outcome: "Outcome text.",
    images: [
      { src: "assets/images/project8/export202603181418053130.png", caption: "" },
      { src: "assets/images/project8/export202603191705555080.png", caption: "" }
    ]
  },

  project9: {
    file: "project-09.html",
    category: "installation",
    title: "Project 09",
    lead: "Project summary text.",
    tags: ["installation"],
    overview: "Overview text.",
    process: "Process text.",
    outcome: "Outcome text.",
    images: [
      { src: "assets/images/project9/project9-1.jpeg", caption: "" }
    ]
  },

  project10: {
    file: "project-10.html",
    category: "experiment",
    title: "Project 10",
    lead: "Project summary text.",
    tags: ["experiment"],
    overview: "Overview text.",
    process: "Process text.",
    outcome: "Outcome text.",
    images: [
      { src: "assets/images/project10/project10-1.jpeg", caption: "" }
    ]
  },

  project11: {
    file: "project-11.html",
    category: "service",
    title: "Project 11",
    lead: "Project summary text.",
    tags: ["service"],
    overview: "Overview text.",
    process: "Process text.",
    outcome: "Outcome text.",
    images: [
      { src: "assets/images/project11/project11-1.jpeg", caption: "" }
    ]
  },

  project12: {
    file: "project-12.html",
    category: "material study",
    title: "Project 12",
    lead: "Project summary text.",
    tags: ["material"],
    overview: "Overview text.",
    process: "Process text.",
    outcome: "Outcome text.",
    images: [
      { src: "assets/images/project12/project12-1.jpeg", caption: "" }
    ]
  }
};

/* active nav */
navLinks.forEach((link) => {
  if (link.dataset.link === currentPage) {
    link.classList.add("active");
  }
});

/* mobile menu */
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

/* CRT tile */
if (crtTile && shell) {
  crtTile.addEventListener("click", () => {
    shell.classList.toggle("crt-on");
    const isOn = shell.classList.contains("crt-on");
    localStorage.setItem("crt-mode", isOn ? "on" : "off");
  });
}

/* CRT toggle */
if (crtToggle && shell) {
  const savedCRT = localStorage.getItem("crt-mode");

  if (savedCRT === "off") {
    shell.classList.remove("crt-on");
    crtToggle.textContent = "CRT: OFF";
  } else {
    shell.classList.add("crt-on");
    crtToggle.textContent = "CRT: ON";
  }

  crtToggle.addEventListener("click", () => {
    shell.classList.toggle("crt-on");
    const isOn = shell.classList.contains("crt-on");
    crtToggle.textContent = isOn ? "CRT: ON" : "CRT: OFF";
    localStorage.setItem("crt-mode", isOn ? "on" : "off");
  });
}

/* page enter */
window.addEventListener("load", () => {
  if (shell && shell.classList.contains("crt-on")) {
    shell.classList.add("page-enter");
    setTimeout(() => {
      shell.classList.remove("page-enter");
    }, 700);
  }

  renderProjectThumbnails();
});

/* thumbnails */
function renderProjectThumbnails() {
  const thumbs = document.querySelectorAll(".project-thumb");

  thumbs.forEach((thumb) => {
    const key = thumb.dataset.project;
    const project = projectData[key];

    if (!project || !project.images || project.images.length === 0) return;

    const firstImage = project.images[0];
const firstSrc = typeof firstImage === "string" ? firstImage : firstImage.src;

thumb.innerHTML = `<img src="${firstSrc}" alt="${project.title} preview">`;
  });
}

/* render gallery */
function renderGallery(images) {
  if (!images || images.length === 0) {
    if (projectModalThumb) projectModalThumb.innerHTML = "";
    if (projectGalleryStrip) projectGalleryStrip.innerHTML = "";
    return;
  }

  activeImageIndex = 0;
  updateProjectImage();

  projectGalleryStrip.innerHTML = images
    .map(
      (src, index) => `
        <button class="project-gallery-thumb ${index === 0 ? "active" : ""}" type="button" data-image-index="${index}">
          <img src="${typeof src === "string" ? src : src.src}" alt="Project image ${index + 1}">
        </button>
      `
    )
    .join("");

  projectGalleryStrip.querySelectorAll(".project-gallery-thumb").forEach((button) => {
    button.addEventListener("click", () => {
      activeImageIndex = Number(button.dataset.imageIndex);
      updateProjectImage();
    });
  });
}

function updateProjectImage() {
  const project = projectData[activeProjectKey];
  if (!project || !project.images || project.images.length === 0) return;

  const currentImage = project.images[activeImageIndex];

  const currentSrc =
    typeof currentImage === "string" ? currentImage : currentImage.src;

  const currentCaption =
    typeof currentImage === "string" ? "" : currentImage.caption || "";

  if (projectModalThumb) {
    projectModalThumb.innerHTML = `<img src="${currentSrc}" alt="Project image ${activeImageIndex + 1}">`;
  }

  if (projectImageCounter) {
    projectImageCounter.textContent =
      `${String(activeImageIndex + 1).padStart(2, "0")} / ${String(project.images.length).padStart(2, "0")}`;
  }

  if (projectImageCaption) {
    projectImageCaption.textContent = currentCaption;
  }

  if (projectGalleryStrip) {
    projectGalleryStrip.querySelectorAll(".project-gallery-thumb").forEach((thumb, index) => {
      thumb.classList.toggle("active", index === activeImageIndex);
    });
  }
}

function updateLightbox() {
  const project = projectData[activeProjectKey];
  if (!project || !project.images || project.images.length === 0) return;

  const currentImage = project.images[activeImageIndex];
const currentSrc = typeof currentImage === "string" ? currentImage : currentImage.src;

lightboxImage.src = currentSrc;
  lightboxCounter.textContent = `${activeImageIndex + 1} / ${project.images.length}`;

  projectLightboxThumbs.querySelectorAll(".lightbox-thumb").forEach((thumb, index) => {
    thumb.classList.toggle("active", index === activeImageIndex);
  });
}

function openLightbox() {
  const project = projectData[activeProjectKey];
  if (!project || !project.images || project.images.length === 0) return;

  projectModalScroll.style.display = "none";
  projectLightbox.classList.add("open");
  projectLightbox.setAttribute("aria-hidden", "false");
  updateLightbox();
}

function closeLightbox() {
  if (!projectLightbox || !projectModalScroll) return;
  projectLightbox.classList.remove("open");
  projectLightbox.setAttribute("aria-hidden", "true");
  projectModalScroll.style.display = "block";
}

/* modal */
function openProject(projectKey) {
  if (!projectOverlay) return;

  const project = projectData[projectKey];
  if (!project) return;

  activeProjectKey = projectKey;
  activeImageIndex = 0;

  if (projectModalFile) projectModalFile.textContent = project.file;
  if (projectModalCategory) projectModalCategory.textContent = project.category;
  if (projectModalTitle) projectModalTitle.textContent = project.title;
  if (projectModalLead) projectModalLead.textContent = project.lead;
  if (projectModalOverview) projectModalOverview.textContent = project.overview;

  if (projectModalProcess) {
    projectModalProcess.textContent = project.process || "";
  }

  if (projectModalOutcome) {
    projectModalOutcome.textContent = project.outcome || "";
  }

  if (projectModalTags) {
    projectModalTags.innerHTML = project.tags
      .map((tag) => `<span class="project-tag">${tag}</span>`)
      .join("");
  }

  renderGallery(project.images);
  closeLightbox();

  projectOverlay.classList.add("open");
  projectOverlay.setAttribute("aria-hidden", "false");

  if (shell) {
    shell.classList.add("modal-open");
  }
}

function closeProject() {
  if (!projectOverlay) return;
  projectOverlay.classList.remove("open");
  projectOverlay.setAttribute("aria-hidden", "true");
  shell.classList.remove("modal-open");
  closeLightbox();
}

projectOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openProject(button.dataset.project);
  });
});

if (projectModalThumb) {
  projectModalThumb.addEventListener("click", () => {
    const project = projectData[activeProjectKey];
    if (!project || !project.images || project.images.length === 0) return;

    activeImageIndex = (activeImageIndex + 1) % project.images.length;
    updateProjectImage();
  });
}

if (lightboxBack) {
  lightboxBack.addEventListener("click", closeLightbox);
}

if (lightboxPrev) {
  lightboxPrev.addEventListener("click", () => {
    const project = projectData[activeProjectKey];
    if (!project || !project.images) return;

    activeImageIndex =
      (activeImageIndex - 1 + project.images.length) % project.images.length;

    updateLightbox();
  });
}

if (lightboxNext) {
  lightboxNext.addEventListener("click", () => {
    const project = projectData[activeProjectKey];
    if (!project || !project.images) return;

    activeImageIndex =
      (activeImageIndex + 1) % project.images.length;

    updateLightbox();
  });
}

if (projectClose) {
  projectClose.addEventListener("click", closeProject);
}

if (projectOverlay) {
  projectOverlay.addEventListener("click", (e) => {
    if (e.target === projectOverlay) {
      closeProject();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (projectLightbox && projectLightbox.classList.contains("open")) {
      closeLightbox();
    } else {
      closeProject();
    }
  }

  if (projectLightbox && projectLightbox.classList.contains("open")) {
    const project = projectData[activeProjectKey];
    if (!project || !project.images) return;

    if (e.key === "ArrowLeft") {
      activeImageIndex =
        (activeImageIndex - 1 + project.images.length) % project.images.length;
      updateLightbox();
    }

    if (e.key === "ArrowRight") {
      activeImageIndex =
        (activeImageIndex + 1) % project.images.length;
      updateLightbox();
    }
  }
});

/* page leave */
document.querySelectorAll('a[href]').forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;

  const isInternal =
    !href.startsWith("http") &&
    !href.startsWith("mailto:") &&
    !href.startsWith("#") &&
    !link.hasAttribute("target");

  if (!isInternal) return;

  link.addEventListener("click", (e) => {
    if (!shell) return;
    if (!shell.classList.contains("crt-on")) return;

    e.preventDefault();
    shell.classList.add("page-leave");

    setTimeout(() => {
      window.location.href = href;
    }, 280);
  });
});