export const profile = {
  name: "Dr. Amit Tammanagoudar",
  title: "Pharm D Graduate & Clinical Research Coordinator",
  location: "Bengaluru, India",
  phone: "8660512429",
  email: "amittammangoudar905@gmail.com",
  linkedin: "https://www.linkedin.com/in/dr-amit-tammanagoudar/",
  image: `${import.meta.env.BASE_URL}profile.jpg`,
};

export const about = {
  lead: "Dedicated and highly motivated Doctor of Pharmacy graduate with a passion for improving healthcare outcomes — seeking to apply clinical research and pharmaceutical-care skills toward advancements in the field.",
  body: "Eager to bring healthcare management, leadership and team collaboration to work that fosters innovation and enhances patient well-being — committed to continuous learning and professional growth through effective project management and data analysis.",
};

export const experience = [
  {
    visit: "V04",
    window: "2023 — Ongoing",
    role: "Clinical Research Coordinator",
    org: "St. John's Research Institute, Bengaluru",
    notes: [
      "Coordinated patient recruitment, visits and study activities in compliance with ICH-GCP guidelines.",
      "Maintained the Trial Master File (TMF) and Investigator Site File (ISF), keeping both audit-ready at all times.",
      "Acted as primary liaison between sponsor and investigator, keeping every stakeholder aligned.",
      "Supported monitoring visits and audits, resolving TMF queries within timeline.",
    ],
  },
  {
    visit: "V03",
    window: "2023",
    role: "Site Budgeting & Financial Tracking",
    org: "St. John's Research Institute, Bengaluru",
    notes: [
      "Reviewed protocol-required procedures and Schedule of Events to support accurate cost estimation.",
      "Tracked procedure-based cost reconciliation, invoice review and sponsor/CRO payment follow-up.",
      "Coordinated participant reimbursements and documented billable study activities.",
    ],
  },
  {
    visit: "V02",
    window: "2022 — 2023",
    role: "Protocol Operations & Compliance",
    org: "St. John's Research Institute, Bengaluru",
    notes: [
      "Translated protocol requirements into site operations — visit trackers, staff training, deviation management.",
      "Conducted site monitoring visits to verify compliance with protocol, ICH-GCP, SOPs and regulations.",
      "Reviewed source documents and safety data, ensuring timely adverse event (AE) reporting.",
    ],
  },
  {
    visit: "V01",
    window: "2022",
    role: "Study Start-Up & Feasibility",
    org: "St. John's Research Institute, Bengaluru",
    notes: [
      "Managed clinical trial data entry and review within Electronic Data Capture (EDC) systems.",
      "Verified investigator qualifications, site facilities and staff readiness for study conduct.",
      "Conducted protocol review and feasibility assessment against inclusion/exclusion criteria and endpoints.",
    ],
  },
];

export const skillGroups = [
  {
    icon: "ClipboardCheck",
    title: "Trial Documentation",
    items: ["TMF / ISF management", "CRF & regulatory binders", "Audit readiness", "Deviation & CAPA tracking"],
  },
  {
    icon: "Activity",
    title: "Site Operations",
    items: ["Patient recruitment & enrollment", "Visit tracker design", "Protocol-window coordination", "Staff training"],
  },
  {
    icon: "ShieldCheck",
    title: "Compliance & Safety",
    items: ["ICH-GCP adherence", "Adverse event reporting", "Informed consent compliance", "SOP monitoring"],
  },
  {
    icon: "Beaker",
    title: "Data & Budgeting",
    items: ["EDC data entry & review", "Site budget development", "Cost reconciliation", "Sponsor/CRO payment follow-up"],
  },
  {
    icon: "Users",
    title: "Stakeholder Liaison",
    items: ["Sponsor–investigator coordination", "Monitoring visit support", "Feasibility assessment", "Cross-team communication"],
  },
];

export const projects = [
  {
    id: "P-01",
    title: "Assessment of Knowledge, Attitude & Practices of Healthcare Professionals Regarding ADR Reporting",
    desc: "Studied how healthcare professionals perceive and act on adverse drug reaction reporting, surfacing gaps between awareness and practice.",
  },
  {
    id: "P-02",
    title: "Healthcare Workers' Engagement in Adverse Drug Reaction Reporting",
    desc: "Examined engagement patterns among healthcare workers in reporting ADRs, identifying drivers of participation.",
  },
  {
    id: "P-03",
    title: "Compliance & Attitude Towards ADR Reporting Systems",
    desc: "Evaluated healthcare professionals' compliance with, and attitudes toward, existing ADR reporting systems.",
  },
];

export const certifications = [
  { title: "ICH-GCP (Good Clinical Practice)", org: "Certification", year: "" },
  { title: "Workshop on Pharmacovigilance", org: "H.S.K College of Pharmacy, in collaboration with NCC-PvPI", year: "2022" },
  { title: "International Pharmacology Conference", org: "B.V.V.S H.S.K College of Pharmacy & S.N. Medical College", year: "2023" },
];

export const education = {
  degree: "Doctor of Pharmacy (Pharm D)",
  college: "B.V.V.S Hanagal Shri Kumareshwar College of Pharmacy, Bagalkot",
  internship: "Internship — Hanagal Shri Kumareshwar Hospital, Navanagar",
};

export const languages = ["English", "Kannada", "Hindi", "Marathi", "Malayalam"];

export const creator = {
  name: "Veeresh Dodamani",
  linkedin: "https://www.linkedin.com/in/veeresh-dodamani-4a47a6179/",
};
