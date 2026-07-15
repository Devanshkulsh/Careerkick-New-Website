export type CareerOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  imageUrl: string;
  imageAlt: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  applyLabel?: string;
};

export const LOCAL_CAREER_OPENINGS: CareerOpening[] = [
  {
    id: "admissions-counsellor",
    title: "Admissions Counsellor",
    department: "Admissions",
    location: "Kanpur, Uttar Pradesh",
    employmentType: "Full-time",
    imageUrl: "/logo_circle.png",
    imageAlt: "Admissions counsellor role illustration",
    summary:
      "Guide prospective students and families through the admission journey with clarity and care.",
    responsibilities: [
      "Counsel students on course options, application steps, and deadlines.",
      "Follow up with leads and maintain accurate admission records.",
      "Support documentation, form filling, and coordination with internal teams.",
    ],
    requirements: [
      "Strong communication and interpersonal skills.",
      "Comfortable working with students and parents.",
      "Prior counselling or admissions experience is preferred.",
    ],
    applyLabel: "Send Resume",
  },
  {
    id: "senior-admissions-counsellor",
    title: "Senior Admissions Counsellor",
    department: "Admissions",
    location: "Kanpur, Uttar Pradesh",
    employmentType: "Full-time",
    imageUrl: "/logo_circle2.png",
    imageAlt: "Senior admissions counsellor role illustration",
    summary:
      "Lead higher-value counselling conversations and help shape smart admission strategies.",
    responsibilities: [
      "Handle complex counselling queries and student case reviews.",
      "Improve conversion quality across enquiry and admission stages.",
      "Mentor junior counsellors with process guidance and best practices.",
    ],
    requirements: [
      "Proven experience in counselling, admissions, or student guidance.",
      "Good decision-making and problem-solving skills.",
      "Ability to handle multiple student conversations with confidence.",
    ],
    applyLabel: "Apply Now",
  },
  {
    id: "admissions-team-lead",
    title: "Admissions Team Lead",
    department: "Admissions",
    location: "Kanpur, Uttar Pradesh",
    employmentType: "Full-time",
    imageUrl: "/logo_circle3.png",
    imageAlt: "Admissions team lead role illustration",
    summary:
      "Own team performance, guide daily workflow, and keep the admissions process moving smoothly.",
    responsibilities: [
      "Manage counsellor performance, targets, and day-to-day coordination.",
      "Track team outcomes and support improvement plans.",
      "Ensure students receive timely and consistent guidance.",
    ],
    requirements: [
      "Team handling or leadership experience in admissions or sales.",
      "Strong organisation and communication skills.",
      "Comfortable with targets and process ownership.",
    ],
    applyLabel: "Join Team",
  },
  {
    id: "human-resources-executive",
    title: "Human Resources Executive",
    department: "Human Resources",
    location: "Kanpur, Uttar Pradesh",
    employmentType: "Full-time",
    imageUrl: "/logo-bg.png",
    imageAlt: "Human resources executive role illustration",
    summary:
      "Support hiring, onboarding, and people operations for a growing admissions team.",
    responsibilities: [
      "Assist with recruitment, onboarding, and employee coordination.",
      "Maintain basic HR records and internal communication.",
      "Support the team with people-first workplace processes.",
    ],
    requirements: [
      "Interest in recruitment, coordination, or HR operations.",
      "Clear written and verbal communication.",
      "Ability to stay organised and work with confidentiality.",
    ],
    applyLabel: "Apply Now",
  },
];
