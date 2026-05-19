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
const projectModalOverviewTitle = document.getElementById("projectModalOverviewTitle");
const projectModalProcessTitle = document.getElementById("projectModalProcessTitle");
const projectModalOutcomeTitle = document.getElementById("projectModalOutcomeTitle");
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

const profileFileButton = document.getElementById("profileFileButton");
const profileOverlay = document.getElementById("profileOverlay");

let activeProjectKey = null;
let activeImageIndex = 0;

const projectData = {
  project1: {
    file: "project_01.txt",
    category: "interactive object",
    title: "BOB: Stress-Relief Companion",
    summary: "A portable interactive companion that senses possible stress through heart rate data and guides the user through a calming breathing exercise.",
    lead: "BOB was developed during CBL-P2 as a portable stress-relief companion that helps users become aware of stress and regulate their breathing.",
    sectionTitles: {
      overview: "Overview & mechanism",
      process: "My contribution",
      outcome: "Reflection"
    },
    overview: "BOB was developed during CBL-P2 as a portable stress-relief companion. The prototype uses a pulse sensor to measure heart rate and compare it to an adjustable threshold. When the measured heart rate is elevated, BOB gives red LED feedback and starts a 40-second breathing routine. During this routine, the body expands and contracts through an internal servo mechanism, helping the user follow the breathing rhythm physically. When the heart rate is not elevated, BOB gives calmer blue feedback instead. The final prototype combined an Arduino Uno, pulse sensor, RGB LED strip, mini servo, battery pack, 3D printed internal parts and a soft exterior.",
    process: "My contribution focused mainly on the technical and physical development of the prototype. I designed and assembled several of the 3D printed internal parts using Fusion 360. I also helped build the circuit and integrate the electronic components. A major part of my work was writing sections of the Arduino code, especially the logic that connected the heart rate threshold system to the servo movement. This made it possible for BOB to respond physically when the measured heart rate was elevated. Around the midterm, I also helped research how users would naturally hold BOB, which informed the placement of the pulse sensor.",
    outcome: "BOB was important for me because it showed how sensors, code, movement, light and product embodiment can work together in one physical-digital interaction. It also taught me that technical functionality only becomes meaningful when it supports the intended user experience.",
    tags: ["prototype", "interaction", "industrial design", "arduino", "embodied interaction", "stress relief"],
    images: [
      { src: "assets/images/project1/cover.jpeg", caption: "final prototype frame" },
      { src: "assets/images/project1/01.jpg", caption: "components frame" },
      { src: "assets/images/project1/02.jpeg", caption: "mid-term demo-day frame" },
      { src: "assets/images/project1/03.jpeg", caption: "team frame" }
    ]
  },

  project2: {
    file: "project_02.txt",
    category: "service design",
    title: "Hart van Woensel",
    summary: "A preventive health concept for Catharina Hospital and the Woensel neighbourhood, focused on community, participation and low-threshold support.",
    lead: "Hart van Woensel was developed during P3 within the Health & Inclusive Design squad as a preventive health concept for Catharina Hospital and the Woensel neighbourhood.",
    sectionTitles: {
      overview: "Overview & system",
      process: "My contribution",
      outcome: "Reflection"
    },
    overview: "Hart van Woensel was developed during P3 within the Health & Inclusive Design squad. The project responded to a challenge from Catharina Hospital, which is dealing with increasing pressure on care. Instead of designing a medical product, we looked at how everyday factors such as loneliness, limited support at home, low structure after discharge and lack of community connection can influence health. The final concept became a preventive community centre for the Woensel neighbourhood. Hart van Woensel supports health in a non-medical way, by creating situations where social contact, movement, shared meals and informal support can happen naturally. The system included a physical community centre, recurring activities, a website, a booklet, a visual identity and a communication structure for hospital staff.",
    process: "My contribution was mainly in research, sketching, visualisation, model making and stakeholder communication. During the research phase, I helped map the healthcare context, stakeholders and existing initiatives around Woensel. Through interviews, field observations, literature research and meetings with Catharina Hospital, we learned that accessibility and trust were crucial. I then helped translate those insights into visual material, including sketches, spatial concepts, presentation slides, branding explorations and the physical model. Because the concept was not one clear product, the visual communication had to carry a lot of the story. This pushed me to work more deliberately with hierarchy, clarity and storytelling.",
    outcome: "Hart van Woensel was an important project for me because it moved away from the type of physical product I was more used to. It taught me how industrial design can also operate through systems, services and stakeholder relationships. The concept was received positively by Catharina Hospital, who saw potential in using it as a starting point for future development. For me, it was a useful introduction to designing something broader than an object.",
    tags: ["research", "system", "concept"],
    images: [
      { src: "assets/images/project2/cover.jpeg", caption: "scaled model frame" },
      { src: "assets/images/project2/01.jpeg", caption: "front page booklet frame" },
      { src: "assets/images/project2/02.jpeg", caption: "exploratory logo sketch frame" },
      { src: "assets/images/project2/03.jpeg", caption: "final demo-day display frame" }
    ]
  },

  project3: {
    file: "project_03.txt",
    category: "interaction design",
    title: "The Bomb Clock",
    summary: "An interactive wake-up puzzle that turns stopping an alarm into a tense sequence of tactile, embodied actions.",
    lead: "The Bomb Clock was made for the Aesthetics of Interaction course as an alarm puzzle that deliberately makes waking up more physical and inconvenient.",
    sectionTitles: {
      overview: "Overview & interaction",
      process: "My contribution",
      outcome: "Reflection"
    },
    overview: "The Bomb Clock was made for the Aesthetics of Interaction course as an interactive wake-up puzzle. Instead of making an alarm easier to stop, we deliberately made the action more physical, tense and inconvenient. The final prototype worked like a bomb-like alarm clock that had to be defused. Users had to interact with different sides of the object by twisting a knob, connecting wires, solving a sliding puzzle and pressing a button grid. Only after completing these actions did the large red top button become available. The goal was not efficiency, but tension, hesitation and a small feeling of reward when the alarm was finally stopped.",
    process: "My contribution was mainly in the technical integration and ideation of the prototype. I created the circuit for the electronic components, connected the separate parts and wrote the code needed for the different systems to work together. This included making the LEDs, buttons and puzzle elements respond correctly during the defusing sequence. I also contributed through sketching and idea generation. Several interaction ideas and physical elements that started as sketches or early concepts became part of the final prototype. Across the process, I helped translate the rough alarm puzzle idea into a more complete physical-digital interaction.",
    outcome: "The final prototype was a mostly functional interactive alarm puzzle. The strongest moment was the release of the red top button, which only became usable after the other tasks were completed using a Wizard of Oz trick. This project taught me that interaction design is not only about what a product does, but also about how it feels to use. Small details like resistance, timing, sound and physical effort can strongly shape the experience.",
    tags: ["interaction", "arduino", "prototype", "tactile", "embodied interaction"],
    images: [
      { src: "assets/images/project3/cover.jpeg", caption: "cover frame" },
      { src: "assets/images/project3/01.jpeg", caption: "components context frame" },
      { src: "assets/images/project3/02.png", caption: "main iterations frame" },
      { src: "assets/images/project3/03.jpeg", caption: "final prototype frame" }
    ]
  },

  project4: {
    file: "project_04.txt",
    category: "speculative design",
    title: "Earth Day Celebration",
    summary: "A speculative dinner about fairness, labour and social division, staged through a fictional Earth Day ritual in a future space colony.",
    lead: "Earth Day Celebration was made for DUB220 as a speculative dinner about fairness, labour and social division.",
    sectionTitles: {
      overview: "Overview & setup",
      process: "My contribution",
      outcome: "Reflection"
    },
    overview: "Earth Day Celebration placed four participants inside a fictional space-colony ritual, where Earth is no longer home but something remembered through ceremony. In the scenario, every participant received an Earth Day capsule. Before dinner, they used mechanical click counters to represent their work performance. The amount of clicks determined the quality of their meal. Higher-ranked participants received a better Earth-focused meal, while lower-ranked participants received a simpler version. On paper, everyone had the same task. In practice, the setup quickly created competition, suspicion and comparison.",
    process: "My contribution was mainly in shaping the physical reveal, sketching the capsule interaction, making visual material and helping frame the dinner as a designed social experiment. I worked on how the capsule should open and how the moment of reveal could become the focal point of the dinner. The capsule had a hard metallic outside and a soft floral inside, creating a contrast between space technology and the memory of Earth. I also helped develop the visual and material atmosphere around the table, menu, counters and ritual, so the speculative world felt understandable enough for participants to react to.",
    outcome: "The final result was a speculative dinner that made fairness feel unstable. Small design choices, like the counter, the unequal menu and the reveal mechanism, were enough to create pride, jealousy, resistance and discomfort. The project showed me that speculative design can be useful because it makes hidden social behaviour visible. It also taught me that making something strange or exaggerated can sometimes make a system easier to discuss.",
    tags: ["speculative design", "interaction", "ritual", "testing", "social behaviour"],
    images: [
      { src: "assets/images/project4/cover.png", caption: "flower mechanism frame" },
      { src: "assets/images/project4/01.jpeg", caption: "click counter frame" },
      { src: "assets/images/project4/02.png", caption: "context sketch frame" },
      { src: "assets/images/project4/03.jpeg", caption: "final dinner frame" }
    ]
  },

  project5: {
    file: "project_05.txt",
    category: "physical computing",
    title: "Creative Programming",
    summary: "Two Creative Programming projects exploring generative visuals in Processing and an Arduino-controlled rocket game.",
    lead: "Creative Programming consisted of two smaller projects that explored coding as both a visual and interactive design tool.",
    sectionTitles: {
      overview: "Overview & interaction",
      process: "My contribution",
      outcome: "Reflection"
    },
    overview: "The first challenge was a generative visual experiment made in Processing. I created randomized eye compositions using vector shapes, constraints and variation. The second challenge moved from image-making into interaction. I built a small rocket game in Processing, controlled through an Arduino setup with a potentiometer and thermistor. The player controls the rocket, dodges clouds and stars, and tries to reach a finish line. Left-right movement is controlled with the potentiometer, while the boost is controlled by heat through the thermistor. Video: https://www.youtube.com/watch?v=-PtuvHu_7ZY",
    process: "My contribution was the full development of both challenges. For the generative eye composition, I worked with vector-based shapes to build the sclera, iris and pupil before adding randomised variation. A major issue appeared when a raster-based mask did not export properly as a vector PDF, so I rebuilt the behaviour with constraints instead. For the rocket game, I wrote the Processing code, connected Arduino input through serial communication and mapped the potentiometer and thermistor values to movement and boost. I also worked on calibration, gravity, drag, acceleration, screen constraints, camera offsetting, collisions, flames, clouds, stars and game states.",
    outcome: "The final result showed two different ways of using creative programming. The first challenge was more visual and generative, while the second was interactive and responsive. This course made coding feel less like a purely technical skill and more like a way to sketch behaviour. It also showed me how physical input can give a simple digital interaction much more personality.",
    tags: ["electronics", "making", "prototype", "processing", "arduino"],
    images: [
      { src: "assets/images/project5/cover.png", caption: "challenge 2 gameplay frame" },
      { src: "assets/images/project5/01.jpg", caption: "challenge 2 set-up frame" },
      { src: "assets/images/project5/02.png", caption: "challenge 1 early idea frame" },
      { src: "assets/images/project5/03.jpg", caption: "challenge 1 outcome frame" }
    ]
  },

  project6: {
    file: "project_06.txt",
    category: "hybrid game design",
    title: "ID-8",
    summary: "A hybrid physical-digital board game for design students, focused on creative problem-solving, teamwork and design challenges.",
    lead: "ID-8 was my first Industrial Design project: a hybrid physical-digital board game about creative problem-solving and teamwork.",
    sectionTitles: {
      overview: "Overview & gameplay",
      process: "My contribution",
      outcome: "Reflection"
    },
    overview: "ID-8 is played as one team, with one shared pawn. The goal is to complete three challenges from each zone on the board. The board contains coloured areas, modifier cards, challenge cards and a rotating centre disk that can move the pawn to a random location. White spots trigger the disk mechanism. Black spots trigger a modifier card, which makes the next challenge more difficult. Some challenges are timed, some use a small rubric, and others rely on the group judging their own result. The main focus is not winning quickly, but brainstorming, making, discussing and finding efficient solutions together.",
    process: "My contribution was mainly in concept development, early testing, board mechanics, challenge cards, visual direction and physical prototyping. I helped explore different educational objectives before we narrowed the game down to problem-solving, collaboration and creativity. In an early version, we tested more competitive challenges based on missing senses, such as drawing blindfolded while someone else explained without hearing. That test showed the game felt too repetitive and not collaborative enough. I then helped shift the concept towards a cooperative design challenge and worked on elements such as board layout, challenge structure, modifier cards, pawns, packaging and the spinning centre mechanism.",
    outcome: "The final result was ID-8, a hybrid board game with custom pawns, challenge cards, modifiers, packaging and a physical board. Looking back, the project was messy but very useful. It taught me how easy it is to skip alignment in a group, and how important testing is before polishing details. As my first ID project, it introduced me to iteration, teamwork and designing through making.",
    tags: ["hybrid game", "teamwork", "prototyping", "education", "design process"],
    images: [
      { src: "assets/images/project6/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project6/01.jpeg", caption: "game context frame" },
      { src: "assets/images/project6/02.png", caption: "team frame" },
      { src: "assets/images/project6/03.jpeg", caption: "final prototype frame" }
    ]
  },

  project7: {
    file: "project_07.txt",
    category: "app development",
    title: "Workout Tracker App",
    summary: "A personal Android workout tracker prototype built in Flutter to log workouts, create programs, and review training progress.",
    lead: "This personal project started from a frustration with existing workout tracking apps and became a self-directed Flutter prototype.",
    sectionTitles: {
      overview: "Overview & app logic",
      process: "My contribution",
      outcome: "Reflection"
    },
    overview: "The Workout Tracker App is a personal Android prototype built to create programs, start workouts, log exercises, save sets and review training progress over time. The goal was not just to make another basic logging app, but to build something that supports how I personally want to train: quickly entering weight and reps, keeping previous sessions available and eventually giving smarter feedback based on progress. The app was built in Flutter using Dart and a modular screen structure. It includes separate areas for programs, active workouts, analytics, exercise data and settings.",
    process: "My role in this project was basically everything. I designed the structure, built the app, tested the logic, fixed errors and kept refining the interface in the gym until it started to feel usable. I used Riverpod for state management, so the app could handle changing workout data more cleanly. The technical side involved setting up local storage, structured data models, providers and systems for saving and updating workout sessions. I also asked friends to test the app on different devices and with different workout preferences, which helped me avoid designing only from my own training logic.",
    outcome: "The result is a working Android prototype that can be installed through an APK file and used for workout tracking. For me, the project was valuable because it combined something I care about personally with actual software development. It also forced me to think about perspective, because not everyone approaches training with the same habits or mindset. I want to keep refining the app, improve the analytics, make the system more stable and eventually explore iOS or web-based compatibility.",
    tags: ["flutter", "dart", "fitness", "app development", "testing"],
    download: {
      label: "Download Android APK",
      href: "downloads/app-release-2.apk.zip"
    },
    images: [
      { src: "assets/images/project7/cover.png", caption: "cover frame" },
      { src: "assets/images/project7/01.jpeg", caption: "workout page frame" },
      { src: "assets/images/project7/02.jpeg", caption: "program page frame" },
      { src: "assets/images/project7/03.jpeg", caption: "analytics page frame" }
    ]
  },

  project8: {
    file: "project_08.txt",
    category: "data research",
    title: "Exercise & Sleep Quality Study",
    summary: "A sensor-based study about exercise and sleep quality, using Mi Band heart-rate data, ESP32 room measurements, phone audio and daily sleep questionnaires.",
    lead: "This project was made for Making Sense of Sensors and looked at whether endurance exercise before sleep had a visible effect on sleep quality.",
    sectionTitles: {
      overview: "Overview & method",
      process: "My contribution",
      outcome: "Reflection"
    },
    overview: "The Exercise & Sleep Quality Study combined several data sources: Mi Band heart-rate data, ESP32 temperature and humidity measurements, smartphone audio recordings and daily Likert-scale questionnaires. Participants followed rest, light exercise and hard exercise days, then measured their sleep overnight. We used RMSSD as a heart-rate variability metric, compared it with training intensity, and also looked at sleep scores, sleep duration, room conditions and restlessness from audio. The interesting part was not only the result, but how fragile the data chain became once people, sensors and routines were involved.",
    process: "My contribution was mainly in setting up the exercise structure, cleaning and combining the final data, making early heart-rate and sleep-to-exercise visualisations, working on the participant plots and helping write and polish the final report. A lot of the work involved dealing with timestamp problems, missing audio files, sensor exports, participant folders, corrupted recordings and data that did not line up neatly. I helped make the data comparable enough to discuss patterns, while also staying critical about what those patterns could actually prove.",
    outcome: "The final result was inconclusive in a useful way. We did not find a statistically significant relationship between exercise intensity and sleep quality. Some small trends appeared, but they were too inconsistent to claim anything strong. For me, the value of the project was learning how difficult everyday data research actually is. Sleep, exercise, stress, room conditions and human behaviour are all tangled together. This made evidence-based design feel less abstract, but also made me more critical of easy conclusions.",
    tags: ["data", "sensors", "research", "sleep", "exercise", "arduino"],
    images: [
      { src: "assets/images/project8/cover.jpeg", caption: "mi-band for tracking heart-rate data frame" },
      { src: "assets/images/project8/01.jpeg", caption: "sensor setup frame" },
      { src: "assets/images/project8/02.jpeg", caption: "submission size frame" },
      { src: "assets/images/project8/03.jpg", caption: "analysis and findings frame" }
    ]
  },

  project9: {
    file: "project_09.txt",
    category: "system design",
    title: "Project 09",
    summary: "Placeholder entry for a future system design project.",
    lead: "This entry has not been filled in yet. Add a short project note that explains the context, assignment and design intention.",
    sectionTitles: {
      overview: "Overview & system",
      process: "My contribution",
      outcome: "Reflection"
    },
    overview: "Add a short overview of the system, context and central design challenge. Focus on what the project was, who it was for and how the proposed system worked.",
    process: "Add your specific contribution here. Mention the research, mapping, sketching, prototyping, stakeholder work or strategy decisions you were personally involved in.",
    outcome: "Add a short reflection here. Explain what the project taught you, what changed through the process and why it matters for your development as a designer.",
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
    summary: "Placeholder entry for a future product concept project.",
    lead: "This entry has not been filled in yet. Add a short project note that explains the context, assignment and design intention.",
    sectionTitles: {
      overview: "Overview & product",
      process: "My contribution",
      outcome: "Reflection"
    },
    overview: "Add a compact overview of the product concept, use context and main mechanism or form principle. Focus on what the product does and why it was designed.",
    process: "Add your specific contribution here. Mention ideation, sketching, CAD, prototyping, material choices, testing or form development you personally worked on.",
    outcome: "Add a short reflection here. Explain what the final concept showed, what you learned about product development and what you would improve next.",
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
    summary: "Placeholder entry for a future social design project.",
    lead: "This entry has not been filled in yet. Add a short project note that explains the context, assignment and design intention.",
    sectionTitles: {
      overview: "Overview & context",
      process: "My contribution",
      outcome: "Reflection"
    },
    overview: "Add a short overview of the social context, target group and design question. Focus on the people involved and why the project mattered.",
    process: "Add your specific contribution here. Mention interviews, observations, stakeholder mapping, concept development, testing, visual communication or facilitation work.",
    outcome: "Add a short reflection here. Explain what the project taught you about designing with people, assumptions, social context and responsibility.",
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
    summary: "Placeholder entry for a future self-directed project.",
    lead: "This entry has not been filled in yet. Add a short project note that explains why you started the project and what you wanted to explore.",
    sectionTitles: {
      overview: "Overview & intention",
      process: "My contribution",
      outcome: "Reflection"
    },
    overview: "Add a compact overview of the project idea, personal motivation and intended outcome. Focus on what you wanted to test, build or understand.",
    process: "Add your specific contribution here. For a self-directed project, describe how you structured the work, which tools you used and how you tested or iterated the result.",
    outcome: "Add a short reflection here. Explain what the project taught you, how it connects to your identity as a designer and what the next step would be.",
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
      }, 430);
    });
  });
}

function renderProjectsGrid() {
  if (!projectsGrid) return;

  const hiddenProjects = ["project9", "project10", "project11", "project12"];

  const projectEntries = Object.entries(projectData).filter(([key]) => {
    return !hiddenProjects.includes(key);
  });

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

  projectModalOverviewTitle.textContent = project.sectionTitles?.overview || "Overview";
  projectModalProcessTitle.textContent = project.sectionTitles?.process || "My contribution";
  projectModalOutcomeTitle.textContent = project.sectionTitles?.outcome || "Reflection";

  projectModalTags.innerHTML = project.tags
    .map((tag) => `<span>${tag}</span>`)
    .join("");

  renderGallery();
  updateProjectImage();
  closeLightbox();

  projectOverlay.classList.add("open");
  projectOverlay.setAttribute("aria-hidden", "false");
}

function openProjectFromUrl() {
  if (currentPage !== "projects") return;

  const params = new URLSearchParams(window.location.search);
  const projectKey = params.get("project");

  if (!projectKey) return;
  if (!projectData[projectKey]) return;

  openProject(projectKey);
}

function closeProject() {
  if (!projectOverlay) return;

  projectOverlay.classList.remove("open");
  projectOverlay.setAttribute("aria-hidden", "true");
  closeLightbox();

  if (currentPage === "projects") {
    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, "", cleanUrl);
  }
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

  if (projectClose) {
    projectClose.addEventListener("click", closeProject);
  }

  projectOverlay.addEventListener("click", (event) => {
    if (event.target === projectOverlay) {
      closeProject();
    }
  });

  // Lightbox disabled: project images are shown uncropped in the modal.

  if (lightboxBack) {
    lightboxBack.addEventListener("click", closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", () => changeImage(-1));
  }

  if (lightboxNext) {
    lightboxNext.addEventListener("click", () => changeImage(1));
  }
}

function openProfilePhoto() {
  if (!profileOverlay) return;

  profileOverlay.classList.add("open");
  profileOverlay.setAttribute("aria-hidden", "false");
}

function closeProfilePhoto() {
  if (!profileOverlay) return;

  profileOverlay.classList.remove("open");
  profileOverlay.setAttribute("aria-hidden", "true");
}

function initProfilePhoto() {
  if (!profileFileButton || !profileOverlay) return;

  profileFileButton.addEventListener("click", openProfilePhoto);

  profileOverlay.addEventListener("click", (event) => {
    if (event.target === profileOverlay) {
      closeProfilePhoto();
    }
  });
}

document.addEventListener("keydown", (event) => {
  const profileOpen = profileOverlay && profileOverlay.classList.contains("open");

  if (profileOpen && event.key === "Escape") {
    closeProfilePhoto();
    return;
  }

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
  initProfilePhoto();
  openProjectFromUrl();

  if (desktop) {
    desktop.classList.add("page-enter");

    window.setTimeout(() => {
      desktop.classList.remove("page-enter");
    }, 380);
  }
});