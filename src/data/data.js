// src/data/data.js
import profileImg from "../assets/profile.jpg";
import signatureImg from "../assets/signature.png";
import resumePdf from "../assets/resume.pdf";

const data = {
  name: "Neha Belwal",
  brand: "NehaBelwal",

  navbar: {
    links: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    resumeLabel: "Resume",
    resumeHref: resumePdf,
  },

  // ========================================================
  // HERO SECTION
  // ========================================================
  hero: {
    title: "Hi, I’m Neha 👋",
    subtitle: "Software Engineer • SRE • DevOps • Cloud Reliability",
    objective:
      "I engineer cloud systems that are fast, secure, and impossible to break. From AWS to automation, I build infrastructure that scales without drama and performs when it matters the most..",
    ctaText: "View My Work",
    ctaLink: "#projects",
    resumeCtaText: "Download Resume",
    resumeHref: resumePdf,
    profileImg,
  },

  // ========================================================
  // ABOUT ME — PREMIUM, CONFIDENT, PROFESSIONAL
  // ========================================================
  about: {
    paragraphs: [
      "I’m Neha — a Software Engineer and SRE with 4+ years of experience building high-reliability, cloud-native systems.",
      
      "I thrive where performance, security, and scalability meet.",
      
      "I work across AWS, Terraform, CI/CD, observability, and DevSecOps — focusing on turning complex distributed systems into clean, automated, dependable architectures. I love solving problems that most people shy away from, and I bring clarity, structure, and calm into chaotic environments.",
      "My engineering philosophy is simple: Be precise. Be reliable. Build systems that never make you second-guess them.",
      "I’m currently growing toward Software Architecture — designing end-to-end systems that are not just functional, but elegant and future-proof.",
      "When I’m not optimizing something, I’m learning something new, refining my craft, and pushing myself to level up, every single day."
    ],
    signature: signatureImg,
  },

  // ========================================================
  // EXPERIENCE — BASED ON YOUR REAL RESUME
  // ========================================================
  experience: [
    {
      company: "Replicon",
      role: "Software Engineer I (SRE / DevOps)",
      period: "Oct 2021 — Present",
      location: "Bengaluru, India",

      brief:
        "Engineering secure, high-performance cloud infrastructure and driving reliability at scale for a global SaaS platform.",

      details: [
        "Security Tooling Integration (Solo Project) : Improved vulnerability coverage by ~60% and reduced remediation turnaround by ~40%. By leading as Sole technical owner for integrating Checkmarx, KICS, CrowdStrike Falcon, and Qualys into CI/CD workflows.",

        "Security & Compliance : Achieved enterprise-grade encryption compliance and strengthened system-wide security posture, by migrating the intra network communication from http to https and implimenting the org wide FIPS compliance.",

        "AWS Infrastructure Provisioning (Terraform) : Standardized infra provisioning, reduced manual errors, and accelerated environment readiness. Led Terraform-based provisioning of complete AWS environments (VPC, ECS, RDS, IAM, CloudWatch, S3, networking), delivering infra swimlanes ahead of schedule.",

        "Reusable GitHub Actions Workflows : Increased CI/CD efficiency and ensured consistent security compliance across teams. Designed and implemented org-wide reusable workflows for static analysis/security scanning.",

        "Monitoring & Reliability : Drove environment health monitoring project with Opentelemetry, Dynatrace, and Sumo Logic; optimized log pipelines and generated actionable insights.",

        "Participated in on-call rotations, performing production issue triaging, incident response, RCA, and reliability improvements.",

        "Evaluated APM vendors, analyzing performance impact, integration complexity, and cost trade-offs for large-scale observability.",

        "Resolved ACL inconsistencies during client data restoration using AWS .NET SDK (C#), ensuring secure and seamless recovery.",
      ],
    },
  ],

  // ========================================================
  // PROJECTS — REALISTIC, CLEAN, AND TECH-FOCUSED
  // ========================================================
  projects: [
    {
      title: "Portfolio Website (This Site)",
      tech: ["React", "Vite", "Tailwind", "Framer Motion"],

      brief:
        "A modern personal portfolio engineered for performance, aesthetics, and maintainability.",

      details: [
        "Designed a responsive layout using React + Tailwind with reusable UI components.",
        "Integrated smooth animations and interactive visuals using Framer Motion.",
        "Structured content through a single modular data file for clean scalability.",
        "Deployed optimized build using CI/CD workflows and CDN distribution."
      ],

      link: "#",
    },
  ],

  // ========================================================
  // SKILLS — ENHANCED, ORDERED, POLISHED
  // ========================================================
  skills: [
    "AWS",
    "EC2", 
    "ECS", 
    "ECR",
    "VPC",
    "IAM",
    "Route53",
    "CloudWatch",
    "S3",
    "Lambda",
    "Terraform",
    "CI/CD",
    "GitHub Actions",
    "CodePipeline",
    "CodeBuild",
    "DevSecOps",
    "Checkmarx",
    "KICS",
    "Blackduck",
    "CrowdStrike",
    "Qualys",
    "Docker",
    "Linux",
    "Python",
    "Node.js",
    "C#",
    "SQL",
    "Monitoring & Observability",
    "Grafana",
    "Prometheus",
    "OpenTelemetry",
    "Sumo Logic",
    "Distributed Systems",
    "Reliability Engineering",
    "Incident Response",
    "vibe-coding"
  ],

  // ========================================================
  // CONTACT
  // ========================================================
  contact: {
    email: "nehabn09@gmail.com",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/neha-belwal-0886a318b" },
      { name: "GitHub", url: "https://github.com/izanawistalia" },
    ],
  },

  footer: {
    text: `© ${new Date().getFullYear()} Neha Belwal. All rights reserved.`,
  },
};

export default data;
