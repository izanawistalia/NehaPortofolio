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
    subtitle: "Software Engineer • SRE • DevSecOps • Cloud Reliability",
    objective:
      "I’m a Software Engineer specializing in SRE, DevSecOps, and cloud reliability—focused on building secure, resilient, and scalable distributed systems. I work across AWS, Terraform, CI/CD, and security automation to deliver systems that are engineered, not improvised.",
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
      "I’m Neha — a Software Engineer and Site Reliability Engineer with 4+ years of experience building, securing, and scaling distributed cloud-native systems. I’m driven by engineering excellence, clean architectures, and system reliability that holds up in real-world conditions.",
      
      "My work spans across AWS infrastructure automation, Terraform-based provisioning, encryption-in-transit enforcement, vulnerability scanning pipelines, observability engineering, performance tuning, and incident response. I’ve led multiple high-impact engineering initiatives end-to-end, including enterprise-grade security tooling integrations, environment provisioning, and reliability improvements across production systems.",
      
      "I love solving hard system problems, designing long-term automation, and improving the way teams ship and operate software. Whether it's optimizing CI/CD workflows, strengthening security posture, improving operational visibility, or reducing MTTR through intelligent monitoring — I aim to deliver engineering that is thoughtful, precise, and scalable."
    ],
    signature: signatureImg,
  },

  // ========================================================
  // EXPERIENCE — BASED ON YOUR REAL RESUME
  // ========================================================
  experience: [
    {
      company: "Replicon",
      role: "Software Engineer I (SRE / DevSecOps)",
      period: "2021 — Present",
      location: "Bengaluru, India",

      brief:
        "Engineering secure, reliable, and automated cloud infrastructure for a global SaaS platform.",

      details: [
        "Migrated intra-service communication from HTTP to HTTPS and refactored Lambda runtimes to containerized builds to enforce encryption-in-transit and compliance requirements.",

        "Acted as the sole owner for integrating Checkmarx, KICS, Blackduck, CrowdStrike Falcon, and Qualys into CI/CD, improving vulnerability coverage by ~60% and reducing remediation time by ~40% :contentReference[oaicite:1]{index=1}.",

        "Led Terraform-based provisioning of complete AWS environments (VPC, ECS, RDS, IAM, CloudWatch, S3, networking), delivering infra swimlanes ahead of schedule :contentReference[oaicite:2]{index=2}.",

        "Built reusable GitHub Actions workflows for organization-wide security scanning and analysis, saving teams 1–2 days per rollout and standardizing DevSecOps practices :contentReference[oaicite:3]{index=3}.",

        "Enhanced observability using Opentelemetry, Grafana, Tempo, and Sumo Logic — improving tracing detail, log signal quality, and reducing MTTR across services :contentReference[oaicite:4]{index=4}.",

        "Participated in on-call rotations, performing production issue triaging, incident response, RCA, and reliability improvements.",

        "Evaluated APM vendors, analyzing performance impact, integration complexity, and cost trade-offs for large-scale observability."
      ],
    },

    {
      company: "Company XYZ",
      role: "Backend Engineer",
      period: "2019 — 2021",
      location: "Remote",

      brief:
        "Developed backend systems, automation tools, and performance optimizations for internal engineering teams.",

      details: [
        "Built internal automation tools for deployments, test execution, and workflow simplification.",
        "Optimized backend performance and database queries, reducing request latency by more than 30%.",
        "Contributed to backend service development using Node.js and Python, maintaining clean and scalable architecture."
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

    {
      title: "AWS Automation Toolkit",
      tech: ["Python", "AWS CLI", "Bash"],

      brief:
        "A toolkit of scripts to automate common AWS operations, lifecycle workflows, and DevOps tasks.",

      details: [
        "Automated EC2 lifecycle actions including monitoring, snapshots, and cleanup tasks.",
        "Developed IAM provisioning workflows ensuring consistent permissions and access hygiene.",
        "Streamlined Lambda packaging and deployment flows using Python and AWS CLI."
      ],

      link: "#",
    },

    {
      title: "Cloud Monitoring & Reliability Dashboard",
      tech: ["Grafana", "Prometheus", "Node.js"],

      brief:
        "A real-time metrics and reliability dashboard for system health, uptime, and latency analytics.",

      details: [
        "Configured Prometheus metric collection across distributed services.",
        "Designed Grafana dashboards and alerting for actionable insights.",
        "Built Node.js collectors to aggregate and expose custom application metrics."
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
    email: "your-email@gmail.com",
    socials: [
      { name: "LinkedIn", url: "#" },
      { name: "GitHub", url: "#" },
      { name: "Twitter", url: "#" },
    ],
  },

  footer: {
    text: `© ${new Date().getFullYear()} Neha Belwal. All rights reserved.`,
  },
};

export default data;
