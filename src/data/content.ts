// Every piece of copy on the site lives here. Edit this file, not the components.
//
// NOTE: current startup work is deliberately absent. Nothing on this site should
// name a company that hasn't announced itself.

export const site = {
  name: "Suchay Kommisetty",
  tagline: "CS @ UT Austin — Turing Scholars & Robotics Honors '29",
  location: "Austin, TX",
  email: "suchayk@utexas.edu",
  github: "https://github.com/SuchayK",
  linkedin: "https://www.linkedin.com/in/suchay-sai-kommisetty",
  // Used for <meta> tags and the canonical URL. Update once the domain is live.
  url: "https://suchayk.github.io",
  description:
    "CS student in UT Austin's Turing Scholars and Robotics Honors programs working on computer vision and robot perception.",
};

export const intro = [
  "I'm a computer science student in UT Austin's Turing Scholars and Robotics Honors programs, and I want to do research in computer vision and robot perception.",
  "At Sony, I built a real-time basketball action recognition system for Sony cameras using YOLOv8 and spatiotemporal transformers. At the University of Houston, I trained a Mask R-CNN model that segments renal tubules and immune cells in lupus nephritis biopsies, which was published and presented at ASN Kidney Week 2025, and I built \"I Don't Know\" classifiers that let self-driving systems pass uncertain predictions to a human instead of guessing, which cut false positives by 37%.",
  "I'm looking for Summer 2027 software engineering and machine learning internships.",
];

export type Experience = {
  role: string;
  org: string;
  detail: string;
  period: string;
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Artificial Intelligence Intern",
    org: "Sony Electronics",
    detail:
      "Built a real-time basketball action recognition system for Sony cameras using YOLOv8 and spatiotemporal transformers to track and predict player actions simultaneously.",
    period: "May 2025 – Aug 2026",
    tags: ["Python", "PyTorch", "YOLO", "Computer Vision"],
  },
  {
    role: "Student Research Assistant",
    org: "The Ohio State University",
    detail:
      "Studied visual memorability with human recall studies and a dataset of 20,000+ labeled images, and built CNN pipelines with visual and linguistic feature extraction to predict image memorability scores for Nike digital ad optimization.",
    period: "Mar 2025 – Sep 2025",
    tags: ["Deep Learning", "CNNs"],
  },
  {
    role: "Research Intern, Real-Time Systems Lab",
    org: "University of Houston",
    detail:
      "Built confidence-based \"I Don't Know\" classifiers that let an autonomous driving system defer uncertain obstacle and sign predictions to a human operator, cutting the false positive rate by 37%. Trained on 500,000+ annotated objects from the Waymo Open Dataset and nuScenes, and tested on DuckieTown robots and in SUMO traffic simulation.",
    period: "Jan 2025 – Jul 2025",
    tags: ["Autonomous Vehicles", "Object Detection", "Machine Learning"],
  },
  {
    role: "Lead Student Researcher, Mohan Lab",
    org: "University of Houston",
    detail:
      "Trained a Detectron2 Mask R-CNN model on 3,000+ labeled kidney biopsy images to segment renal tubules and immune cells for lupus nephritis diagnosis. First co-author on TRIMS, presented at ASN Kidney Week 2025.",
    period: "May 2024 – Sep 2025",
    tags: ["PyTorch", "Detectron2", "Image Segmentation"],
  },
  {
    role: "Research Intern, LIMESS",
    org: "Stanford University",
    detail:
      "Built LSTM and CNN models that detect anomalies in EPA air-quality data (PM2.5 and ozone), reaching 99.87% to 100% accuracy with a ROC-AUC of 1.0.",
    period: "May 2023 – Aug 2024",
    tags: ["Deep Learning", "Machine Learning"],
  },
];

export type Research = {
  title: string;
  venue: string;
  year: string;
  summary: string;
  href?: string;
};

export const research: Research[] = [
  {
    title: "TRIMS: Deep-Learning Segmentation of Renal Tubules and Immune Cells in 32-Marker Spatial Proteomic Images from Lupus Nephritis Biopsies",
    venue: "ASN Kidney Week",
    year: "2025",
    summary:
      "Detectron2 Mask R-CNN segmentation of renal tubules and immune cells in lupus nephritis biopsies, from the University of Houston Mohan Lab.",
    href: "https://www.asn-online.org/education/kidneyweek/2025/program-abstract.aspx?controlId=4347523",
  },
  {
    title: "Perovskite solar cells with quantum dot buffer layers",
    venue: "IEEE IEMDC — presentation",
    year: "2025",
    summary:
      "SCAPS-1D simulations of AgS2, In2S3 and PbS quantum dot buffer layers. Tuning the AgS2 layer raised simulated power conversion efficiency from 7.99% to 27.99%. 3rd place, Science and Engineering Fair of Houston.",
  },
];

export type Project = {
  name: string;
  blurb: string;
  href: string;
  tags: string[];
  /** Shown as a small line under the title, e.g. where it was built. */
  context?: string;
  /**
   * What you personally did. Set this on any team project — the repo won't
   * always show it, and "what did you actually build" is the first question
   * anyone asks about group work.
   */
  role?: string;
};

export const projects: Project[] = [
  {
    name: "Dance Fantasy",
    blurb:
      "Takes any song and builds a dance routine on the beat, a 3D dancer teaches you the moves while your webcam scores you, and friends can join from their own devices.",
    href: "https://dancefantasy.tech",
    context: "HackTX 2026 · 1st Place Overall (~700 hackers) and Best Use of SerpApi",
    role: "Built the v2 scoring system that scores each player's webcam movements against the routine.",
    tags: ["TypeScript", "React", "MediaPipe"],
  },
  {
    name: "Forge Runner",
    blurb:
      "A low-cost delivery robot for small restaurants and bars that follows tape instead of mapping the room with LiDAR. An ESP32 drives it to the right seat by counting tape strips with light sensors, and it snaps together from 15 3D-printed parts for about $105 per robot.",
    href: "https://forge-runner-rho.vercel.app",
    context: "UT Austin Makeathon 2026 · Most Technical Award",
    tags: ["ESP32", "C++", "Robotics"],
  },
  {
    name: "Cricket Guru Auto-Player",
    blurb:
      "An auto-player for a Discord T20 cricket game with 50,000+ players. It reads each delivery off the screen with OCR, scores every shot by expected runs minus a wicket penalty, and clicks the best one. Reached about 15th of 50,000+ players.",
    href: "https://www.linkedin.com/in/suchay-sai-kommisetty/details/projects/",
    tags: ["Python", "OpenCV", "Tesseract OCR"],
  },
  {
    name: "Green Acres",
    blurb:
      "Pick a point on a map and a Keras model behind a Flask API combines local weather with soil values to rank 22 crops that will grow there.",
    href: "https://github.com/SuchayK/greenAcres",
    context: "TSA Software Development · 1st, Texas TSA State 2025 · Nationals semifinalist",
    tags: ["Python", "TensorFlow", "Flask", "JavaScript"],
  },
  {
    name: "Robot Tour",
    blurb:
      "Autonomous maze navigation for Science Olympiad on a Pololu 3pi+. I wrote the A* path planner, and separate PID loops for distance and gyro-measured turns keep dead-reckoning drift low.",
    href: "https://www.linkedin.com/in/suchay-sai-kommisetty/details/projects/",
    context: "2nd, Texas State 2025",
    tags: ["C++", "Path planning", "PID"],
  },
];

export const awards = [
  { name: "HackTX 2026", detail: "1st Place Overall" },
  { name: "UT Austin Makeathon", detail: "Most Technical Award" },
  { name: "National Merit", detail: "Finalist" },
  { name: "USACO", detail: "Platinum" },
  { name: "AIME Qualifier", detail: "2024, 2025" },
  { name: "VEX Robotics Worlds", detail: "5× qualifier" },
];
