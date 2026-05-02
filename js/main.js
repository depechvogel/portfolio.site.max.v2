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
    title: "BOB — Stress-Relief Companion",
    summary: "A portable interactive companion that senses possible stress through heart rate data and guides the user through a calming breathing exercise.",
    lead: "As part of our industrial design project CBL-P2, we developed BOB: a portable stress-relief companion designed to help users become aware of stress and regulate their breathing. I worked on this as one of the five students in the group, contributing from early ideation to the final interactive prototype. The project combined creative electronics, mechanical prototyping, user research, interaction design and product embodiment into one functioning prototype.",
    overview: "BOB is a relatively small, soft companion that uses heart rate data to sense possible stress. When the user holds BOB, a pulse sensor reads the heart rate and compares it to a manually set threshold. Since every user has a different resting heart rate, this threshold can be adjusted. When the measured value is elevated, BOB responds with red LED feedback and starts a 40-second breathing exercise. During this interaction, the product expands and contracts through an internal servo-powered mechanism, helping the user synchronise their breathing with the movement. If the heart rate is not elevated, BOB gives calmer blue visual feedback.",
    process: "Our process followed an iterative industrial design approach. We started with broad brainstorming around supportive companions and our design brief, then narrowed the concept down to stress relief because it was meaningful, testable and technically achievable. We researched breathing exercises, calming music and stress-ball interaction to understand how physical products can help with emotional regulation. From there, we explored sensors, Arduino programming, LEDs, servo movement, 3D printed parts and soft materials. A major part of the process was integrating electronics and mechanics into one coherent product architecture. The prototype used an Arduino Uno, pulse sensor, RGB LED strip, mini servo, battery pack and custom 3D printed components. We tested different holding positions with users to decide where the heart rate sensor should be placed. The mechanical system was also redesigned several times to make the breathing motion smoother, more reliable and easier to assemble.",
    outcome: "The final outcome was a working interactive prototype that responded to individual users. BOB became more than a technical device; it became an embodied interaction tool that makes stress visible and gives the user a simple action to follow.",
    tags: ["prototype", "interaction", "industrial design", "arduino", "embodied interaction", "stress relief"],
    images: [
      { src: "assets/images/project1/cover.jpeg", caption: "cover frame" },
      { src: "assets/images/project1/01.jpg", caption: "context frame" },
      { src: "assets/images/project1/02.jpeg", caption: "process frame" },
      { src: "assets/images/project1/03.jpeg", caption: "outcome frame" }
    ]
  },

  project2: {
    file: "project_02.txt",
    category: "service design",
    title: "Hart van Woensel",
    summary: "A preventive health concept for Catharina Hospital and the Woensel neighbourhood, focused on community, participation and low-threshold support.",
    lead: "This project was a part of P3 within the Health & Inclusive Design squad. We developed Hart van Woensel: a preventive health concept for Catharina Hospital and the Woensel neighbourhood. I contributed mainly to research, sketching, visualisation, model making and stakeholder communication. Compared to earlier projects, this was less about making one physical product and more about designing a system that could connect people, places and organisations.",
    overview: "The project started from a real problem: Catharina Hospital is under increasing pressure, while some health-related issues are connected to everyday life outside the hospital. Loneliness, limited support at home, low structure after discharge and lack of community connection can all influence whether people need care. Our central design direction became a community centre that supports preventive health in a non-medical way. Instead of telling people to become healthier, Hart van Woensel creates situations where social contact, movement, shared meals and informal support can happen naturally.",
    process: "Our process was strongly research-driven. We started by mapping the healthcare context, stakeholders and existing initiatives around Woensel. Through interviews, field observations, literature research and meetings with Catharina Hospital, we learned that accessibility and trust were crucial. People do not always want to ask for help directly, so the concept had to feel welcoming rather than clinical or problem-focused. We explored different directions, including digital platforms and activity-based interventions, before shifting towards a broader product-service system. This system included a physical community centre, recurring activities, a website, a booklet, a visual identity and a communication structure for hospital staff. Blue Zone principles, behavioural psychology and local field research helped shape the final decisions. I contributed mostly by translating research into visual material: sketches, spatial concepts, presentation slides, branding explorations and the physical model. This pushed me to work more deliberately with hierarchy, clarity and storytelling, something I had not focused on very much before.",
    outcome: "The final outcome was Hart van Woensel, a community-centred concept built around participation instead of medical treatment. Activities such as shared dinners, cycling, creative sessions and intergenerational events form the main entry points. The concept was received positively by Catharina Hospital, who saw potential in using it as a starting point for future development. For me, this project was a nice introduction to working on something that is not necessarily a product, but rather a concept.",
    tags: ["research", "system", "concept"],
    images: [
      { src:"assets/images/project2/cover.jpeg", caption: "cover frame" },
      { src: "assets/images/project2/01.jpeg", caption: "context frame" },
      { src: "assets/images/project2/02.jpeg", caption: "process frame" },
      { src: "assets/images/project2/03.jpeg", caption: "outcome frame" }
    ]
  },

  project3: {
    file: "project_03.txt",
    category: "interaction design",
    title: "The Bomb Clock",
    summary: "An interactive wake-up puzzle that turns stopping an alarm into a tense sequence of tactile, embodied actions.",
    lead: "The Bomb Clock was made for the Aesthetics of Interaction course as a wake-up puzzle that deliberately makes stopping an alarm more tense and inconvenient. Instead of designing a smooth waking up experience, we wanted to explore what happens when waking up becomes something you have to perform. The project moved from an individual cardboard idea to a group prototype with Arduino, 3D printed parts, buttons, wires, sliders and a large red release button.",
    overview: "The concept started with a simple question: what if turning off an alarm was not one lazy press, but a sequence of embodied actions? The final object became a bomb-like alarm clock that has to be “defused”. Users interact with different sides of the object by twisting a knob, connecting wires, solving a sliding puzzle and pressing a button grid. Only after completing the tasks does the large red top button become available to press. The interaction is not meant to be efficient. It is meant to build tension, hesitation and a small feeling of reward when the alarm is finally stopped.",
    process: "The first version was rough and incredibly low fidelity. I made a cardboard clock that had to be picked up, flipped upside down and slammed onto the table to stop the alarm. Later, the idea shifted into a shared interaction with two synchronized prototypes. This brought in cooperation and competition, because silencing the alarm depended on what another person was doing too. In the third iteration, the focus moved to material quality. Cardboard and tape were replaced by wood, foam springs, hidden click switches, magnets and a rotating knob with more resistance. For the final version, we moved into a 3D printed casing with Arduino-controlled LEDs, buttons and puzzle elements. We also removed the digital display after feedback, because it explained too much and distracted from the physical interaction.",
    outcome: "The final prototype was a mostly functional interactive alarm puzzle. The most satisfying part was the final release of the red top button, which only became usable after the other tasks were completed, using a Wizard of Oz trick. This course and project were really fun and it was great spending more time figuring out the electronic components and having that system be connected to tactile actions.",
    tags: ["interaction", "arduino", "prototype", "tactile", "embodied interaction"],
    images: [
      { src: "assets/images/project3/cover.jpeg", caption: "cover frame" },
      { src: "assets/images/project3/01.jpeg", caption: "context frame" },
      { src: "assets/images/project3/02.png", caption: "process frame" },
      { src: "assets/images/project3/03.jpeg", caption: "outcome frame" }
    ]
  },

  project4: {
    file: "project_04.txt",
    category: "speculative design",
    title: "Earth Day Celebration",
    summary: "A speculative dinner about fairness, labour and social division, staged through a fictional Earth Day ritual in a future space colony.",
    lead: "Earth Day Celebration was made for DUB220 as a speculative dinner about fairness, labour and social division. The project placed four participants inside a fictional space-colony ritual, where Earth is no longer home but something remembered through ceremony. My contribution was mainly in shaping the physical reveal, sketching the capsule interaction, making visual material and helping frame the dinner as a designed social experiment.",
    overview: "Once a year, people in the scenario receive an Earth Day capsule. It looks celebratory, but it also ranks them. Before the dinner, each participant was given a mechanical click counter. The amount of clicks represented their “work performance” and determined the quality of their meal. High performers received steak, seasoned potatoes and grilled vegetables. Lower performers received spam, boiled potatoes and minimally seasoned vegetables. On paper, the rule was equal: everyone had the same task. In practice, the system immediately created competition, suspicion and comparison.",
    process: "The most difficult part of the process was designing the moment before people knew what they had received. We made a capsule with a hard metallic outside and a soft floral inside, so the object hinted at a memory of Earth. It opened like a flower, turning the meal into a reveal instead of just a serving. That reveal became the focal point of the dinner. We also deliberately left some rules unclear. We did not tell participants whether sharing was allowed, or whether using help from others while clicking counted as cheating. This made the dinner less controlled, but more revealing. One participant used friends to raise his score. Another became frustrated after ending third. During the meal, a high performer offered steak to the lower group, but they refused it. Later, food and water were stolen from the higher-ranked side.",
    outcome: "The result was a speculative interaction that explored fairness in a sense. The project showed that equal rules do not automatically create equal experiences. Small design choices, like a counter, a reveal mechanism or an uneven menu, were enough to create pride, jealousy, resistance and discomfort. This project really opened my eyes to speculative design, a practice where exaggeration and making things weird can be very useful.",
    tags: ["speculative design", "interaction", "ritual", "testing", "social behaviour"],
    images: [
      { src: "assets/images/project4/cover.png", caption: "cover frame" },
      { src: "assets/images/project4/01.jpeg", caption: "context frame" },
      { src: "assets/images/project4/02.png", caption: "process frame" },
      { src: "assets/images/project4/03.jpeg", caption: "outcome frame" }
    ]
  },

  project5: {
    file: "project_05.txt",
    category: "physical computing",
    title: "Creative Programming",
    summary: "Two Creative Programming projects exploring generative visuals in Processing and an Arduino-controlled rocket game.",
    lead: "For Creative Programming, I made two smaller projects that explored different sides of coding as a design tool. Challenge 1 was a generative visual experiment. I created a code file that produced randomized eye compositions using vector shapes, constraints and variation. Challenge 2 moved from image-making into interaction. I made a small rocket game in Processing, controlled through an Arduino setup with a thermistor and potentiometer.",
    overview: "The first challenge was mainly about learning how to build visuals through code. I started with static eye sketches and then developed them into a generative composition with randomized skin colours, eye positions and four different quadrants. The second challenge became more game-like. The player controls a rocket, dodges clouds and stars, and tries to reach a finish line. Left-right movement is controlled with a potentiometer. The boost is controlled by heat through a thermistor, which I thought made the interaction very unique. Video: https://www.youtube.com/watch?v=-PtuvHu_7ZY",
    process: "Challenge 1 started visually. I first worked with vector-based shapes to understand the sclera, iris and pupil before making the image more dynamic. A big issue appeared when I used a mask to keep the iris inside the eye socket. It worked visually, but the mask was raster-based and did not export properly as a vector PDF. I had to rebuild that behaviour with constraints instead. That was frustrating, but it helped me understand the difference between something that works on screen and something that fits the technical requirements. Challenge 2 was more about real-time input. I had limited hardware available, so I worked with a potentiometer, buttons and a thermistor. The thermistor became the most interesting part. I used serial communication to send the Arduino values into Processing, then mapped the heat data to the rocket boost. I also added a calibration phase, because the sensor values changed depending on room temperature and hand distance. Later, I adjusted gravity, drag, acceleration, screen constraints and camera offsetting to make the movement feel better.",
    outcome: "The final result shows two different ways of using creative programming. The first project is more visual and generative. The second is more interactive and responsive. It included game states, collisions, dynamic flames, clouds, stars, a cloud belt, win and death screens. I liked that the second challenge felt a bit like the old Flash games I used to play. Simple, but still fun because the controls gave it personality. This course was a great introduction to a more creative take on coding.",
    tags: ["electronics", "making", "prototype"],
    images: [
      { src: "assets/images/project5/cover.png", caption: "cover frame" },
      { src: "assets/images/project5/01.jpg", caption: "context frame" },
      { src: "assets/images/project5/02.png", caption: "process frame" },
      { src: "assets/images/project5/03.jpg", caption: "outcome frame" }
    ]
  },

  project6: {
    file: "project_06.txt",
    category: "hybrid game design",
    title: "ID-8",
    summary: "A hybrid physical-digital board game for design students, focused on creative problem-solving, teamwork and design challenges.",
    lead: "This was my first project at Industrial Design. We created ID-8, a hybrid physical-digital board game about creative problem-solving and teamwork. The assignment asked for an educational game, but we slowly narrowed that down to something more specific: a game for design students. I contributed to the concept development, early testing, board mechanics, challenge cards, visual direction and physical prototyping.",
    overview: "ID-8 is played as one team, with one shared pawn. The goal is to complete three challenges from each zone on the board. The board contains coloured areas, modifier cards, challenge cards and a rotating centre disk that can move the pawn to a random location. White spots trigger the disk mechanism. Black spots trigger a modifier card, which makes the next challenge more difficult. Some challenges are timed, some use a small rubric, and others rely on the group judging their own result. The main focus is not winning quickly, but brainstorming, making, discussing and finding efficient solutions together.",
    process: "We started by trying to understand the brief itself. What is a physical-digital game? What makes a game educational? At first, we jumped too quickly into ideas and struggled to agree on a direction. After listing fourteen possible educational objectives, we found that problem-solving, collaboration and creativity fitted us best. The first concept was more linear and competitive. It used challenges based on missing senses, like drawing blindfolded while someone else explained without hearing. We roleplayed this with two competing groups and one evaluator. It worked for testing, but it felt too repetitive and not collaborative enough. After that, we changed the game into a cooperative design challenge. A big shift was replacing the digital dice with a digital board. The dice felt like a gimmick. The board made more sense, because it could mirror the physical game and support remote players. For the physical prototype, we explored clay pawns, indented surfaces, plexiglass templates, card layouts, and the spinning centre mechanism.",
    outcome: "The final result was ID-8, a hybrid board game with custom pawns, challenge cards, modifiers, packaging and a physical board. Looking back, the project was messy but very informative. It taught me how easy it is to skip alignment in a group, and how important testing is before polishing details. As my first ID project, it introduced me to iteration, teamwork and designing through making.",
    tags: ["hybrid game", "teamwork", "prototyping", "education", "design process"],
    images: [
      { src: "assets/images/project6/cover.jpg", caption: "cover frame" },
      { src: "assets/images/project6/01.jpeg", caption: "context frame" },
      { src: "assets/images/project6/02.png", caption: "process frame" },
      { src: "assets/images/project6/03.jpeg", caption: "outcome frame" }
    ]
  },

  project7: {
    file: "project_07.txt",
    category: "app development",
    title: "Workout Tracker App",
    summary: "A personal Android workout tracker prototype built in Flutter to log workouts, create programs, and review training progress.",
    lead: "This was a personal project that started from a simple frustration I had in my daily routine. I have spent a decent chunk of my free time for the past 6 years in the gym, and I did not like most of the workout tracking apps that were available. Many of them hide important features behind subscriptions and feel very overloaded with non-essentials. I also had some specific ideas for features that I missed, so at some point I thought: why not just try to build it myself? My role in this project was basically everything. I designed the structure, built the app, tested the logic, fixed errors, and kept refining and testing the interface in the gym until it started to feel usable.",
    overview: "The app is a personal workout tracker built to create programs, start workouts, log exercises, save sets, and review training progress over time. The goal was not just to make another basic logging app, but to build something that supports how I personally want to train: quickly entering weight and reps, keeping previous sessions available, and eventually getting smarter feedback based on progress. The app was built in Flutter, using Dart and a modular screen structure. I used Riverpod for state management, so the app could nicely handle changing workout data. The structure includes separate screens for programs, active workouts, analytics, exercise data, and settings.",
    process: "I approached the app very iteratively. After sketching the basic flow, I built small parts in Flutter and tested them directly on my phone or emulator. Most improvements came from actually using the app during workouts and noticing where the interface was too slow, had bugs, or did not feel intuitive to use. The more technical side involved setting up the app logic behind the screens, including local storage, structured data models, Riverpod providers, and systems for saving and updating workout sessions. I also asked friends to test the app on different devices and with different workout preferences. This helped me avoid designing only from my own workout logic and showed me which parts needed adjusting.",
    outcome: "The result is a working Android prototype that can be installed through an APK file and used for workout tracking. More importantly, it became a project where I could combine an area that I am really interested in with actual software development. I want to keep refining the app, improve the analytics, make the system more stable, and eventually make it compatible with Apple devices as well, either through iOS support, which is very expensive, or a web-based version.",
    tags: ["flutter", "dart", "fitness", "app development", "testing"],
    download: {
      label: "Download Android APK",
      href: "downloads/app-release-2.apk.zip"
    },
    images: [
      { src: "assets/images/project7/cover.png", caption: "Workout tracker app interface" },
      { src: "assets/images/project7/01.jpeg", caption: "Program and workout flow" },
      { src: "assets/images/project7/02.jpeg", caption: "Testing and refinement process" },
      { src: "assets/images/project7/03.jpeg", caption: "Android prototype outcome" }
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
      }, 430);
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

  // Lightbox disabled: project images are shown uncropped in the modal.

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
    }, 380);
  }
});

