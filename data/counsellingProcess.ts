import type { CounsellingProcessStep, FloatingIconName } from "@/types";

export const counsellingProcess: CounsellingProcessStep[] = [
  {
    step: 1,
    title: "Student Profile Discussion",
    description:
      "Careerkick evaluates the student's NEET score, AIR, category, domicile state, preferred course, budget, and college expectations to build a personalized counselling strategy.",
    icon: "user-search",
    status: "Profile Analysis",
    accent: "blue",
    highlights: ["NEET rank review", "Category and domicile mapping", "Budget and course fit"],
    orbitIcons: ["shield", "calendar", "file", "location"],
  },
  {
    step: 2,
    title: "Course & College Planning",
    description:
      "Suitable medical courses and colleges are shortlisted based on rank, category, preferences, and expected admission possibilities.",
    icon: "graduation-cap",
    status: "Planning",
    accent: "green",
    highlights: ["Course shortlist", "College matching", "Admission probability"],
    orbitIcons: ["graduation-cap", "check", "location", "calendar"],
  },
  {
    step: 3,
    title: "Budget & State Planning",
    description:
      "Parents receive detailed guidance on fees, state counselling options, government and private colleges, and realistic admission pathways.",
    icon: "wallet",
    status: "Financial Planning",
    accent: "orange",
    highlights: ["Fee comparison", "State option planning", "Budget route clarity"],
    orbitIcons: ["wallet", "file", "location", "check"],
  },
  {
    step: 4,
    title: "Document Pre-Screening",
    description:
      "Required documents are verified beforehand to avoid registration, verification, and reporting issues later.",
    icon: "file-check",
    status: "Verification",
    accent: "purple",
    highlights: ["Document checklist", "Missing paper review", "Verification readiness"],
    orbitIcons: ["file", "shield", "check", "calendar"],
  },
  {
    step: 5,
    title: "Counselling Road Map",
    description:
      "A complete counselling roadmap is created with timelines, choice filling strategy, counselling routes, and round-wise planning.",
    icon: "map",
    status: "Strategy",
    accent: "cyan",
    highlights: ["Round planning", "Choice strategy", "Route map"],
    orbitIcons: ["map", "calendar", "location", "shield"],
  },
  {
    step: 6,
    title: "Portal Registration & Choice Filling",
    description:
      "Careerkick provides expert assistance during registration and choice filling to maximize admission opportunities.",
    icon: "mouse-pointer-click",
    status: "Application",
    accent: "yellow",
    highlights: ["Registration flow", "Choice locking", "Portal support"],
    orbitIcons: ["mouse-pointer-click", "calendar", "file", "check"],
  },
  {
    step: 7,
    title: "Round-wise Updates & Allotment Guidance",
    description:
      "Students receive regular updates regarding official notices, counselling rounds, allotment results, deadlines, and next actions.",
    icon: "bell-ring",
    status: "Live Updates",
    accent: "red",
    highlights: ["Official notice tracking", "Round alerts", "Deadline reminders"],
    orbitIcons: ["bell", "calendar", "check", "location"],
  },
  {
    step: 8,
    title: "Reporting & Final Admission",
    description:
      "After seat allotment, Careerkick assists with reporting, fee payment, admission documents, upgrade options, and final admission completion.",
    icon: "badge-check",
    status: "Admission Complete",
    accent: "emerald",
    highlights: ["Reporting help", "Fee payment", "Final admission closure"],
    orbitIcons: ["badge-check", "shield", "wallet", "location"],
  },
];

export const floatingWorkflowIcons: FloatingIconName[] = [
  "bell",
  "shield",
  "graduation-cap",
  "check",
  "location",
  "calendar",
  "file",
  "wallet",
];
