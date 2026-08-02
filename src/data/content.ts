// Every piece of copy on the site lives here. Edit this file, not the components.
//
// NOTE: current startup work is deliberately absent. Nothing on this site should
// name a company that hasn't announced itself.

export const site = {
  name: "Suchay Kommisetty",
  tagline: "CS @ UT Austin — Turing Scholars '30",
  location: "Austin, TX",
  email: "suchay.kommisetty@gmail.com",
  github: "https://github.com/SuchayK",
  linkedin: "https://www.linkedin.com/in/suchay-kommisetty-474125285",
  // Used for <meta> tags and the canonical URL. Update once the domain is live.
  url: "https://suchaykommisetty.com",
  description:
    "CS student at UT Austin working on applied computer vision and machine learning. Medical image segmentation, uncertainty-aware models, and competition robotics.",
};

export const intro = [
  "I'm a CS student in the Turing Scholars honors program at UT Austin. I work on applied computer vision and machine learning — most recently instance segmentation for medical microscopy, which I presented at ASN Kidney Week 2025.",
  "Before that I spent four years in competition robotics and competitive programming, which is where I learned that most of the difficulty in an autonomous system isn't the algorithm — it's everything that drifts, slips, or arrives late.",
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
    role: "SWE/AI Intern",
    org: "Sony × University at Buffalo Visual Computing Lab",
    detail:
      "Instance segmentation of immune cells in lymph node microscopy. Trained and evaluated Mask R-CNN models on annotated histology data, and built the tiling preprocessor that made whole-slide images tractable for inference.",
    period: "2024",
    tags: ["Python", "PyTorch", "Detectron2", "Computer Vision"],
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
    title: "Automated segmentation for renal histology",
    venue: "ASN Kidney Week",
    year: "2025",
    summary:
      "Mask R-CNN instance segmentation of immune cells in lymph node microscopy, developed with the UB Visual Computing Lab.",
    href: "https://github.com/SuchayK/Detectron2-Immune-Cells",
  },
  {
    title: "Uncertainty-aware classifiers for autonomous driving",
    venue: "IEEE IEMDC — poster",
    year: "2025",
    summary:
      "Abstaining classifiers that decline to predict when confidence is low, evaluated on driving perception tasks where a wrong answer costs more than no answer.",
  },
  {
    title: "Air-quality anomaly detection",
    venue: "Independent",
    year: "2024",
    summary:
      "LSTM and CNN models for detecting anomalies in time-series air-quality sensor data.",
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
    name: "SceneSponsor",
    blurb:
      "An agent that places branded products inside creator videos that already exist, instead of interrupting them with an ad. A vision model reads sampled frames and plans placement geometry per keyframe — surface, perspective, lighting, occlusion risk — and the clip is composited with FFmpeg in an isolated worker. Nothing exports until the creator reviews the agent's reasoning and approves it.",
    href: "https://github.com/toyeshhm/ScreenSponsor",
    context: "Team project · Daytona HackSprint #5 with Braintrust, San Francisco",
    role: "Worked across the stack — scene-understanding pipeline, video rendering, creator studio UI, and the job API.",
    tags: ["TypeScript", "Next.js", "Fireworks AI", "FFmpeg", "Supabase"],
  },
  {
    name: "Detectron2 Immune Cells",
    blurb:
      "Mask R-CNN instance segmentation of immune cells in lymph node microscopy. The research code behind the Kidney Week presentation.",
    href: "https://github.com/SuchayK/Detectron2-Immune-Cells",
    tags: ["Python", "PyTorch", "Detectron2"],
  },
  {
    name: "Robot Tour",
    blurb:
      "Autonomous maze navigation for Science Olympiad. A* over a walled grid, gyro-corrected odometry, and two PID loops — built around the fact that dead reckoning drifts.",
    href: "https://github.com/SuchayK/Pololu---Robot-Tour",
    tags: ["C++", "Arduino", "Path planning", "Controls"],
  },
  {
    name: "VEX V5 Competition Robot",
    blurb:
      "Six-motor drive with three-encoder odometry, inertial-corrected PID, and pneumatics. Four seasons of iteration.",
    href: "https://github.com/SuchayK/VEXRobot1",
    tags: ["C++", "Odometry", "PID"],
  },
  {
    name: "greenAcres",
    blurb:
      "Crop yield prediction from geolocation plus live weather and soil data. Built for TSA with a two-person team.",
    href: "https://github.com/SuchayK/greenAcres",
    tags: ["JavaScript", "ML"],
  },
];

export const awards = [
  { name: "USACO Platinum", detail: "Highest division" },
  { name: "AIME Qualifier", detail: "2×" },
  { name: "VEX Robotics Worlds", detail: "5× qualifier" },
];
