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
    resumeHref: resumePdf, // local file in src/assets/resume.pdf
  },

  hero: {
    title: "Hi, I’m Neha 👋",
    subtitle: "Software Engineer • SRE • Cloud Enthusiast",
    objective:
      "I build reliable, scalable cloud-native systems. Seeking roles in SRE/Cloud/System Reliability.",
    ctaText: "View My Work",
    ctaLink: "#projects",
    resumeCtaText: "Download Resume",
    resumeHref: resumePdf,
    profileImg,
  },

  about: {
    paragraphs: [
      "I’m Neha — a Software Engineer and SRE with 4+ years of experience building reliable, scalable, and efficient cloud-native systems. I have strong hands-on experience with AWS, automation, infrastructure reliability, and optimizing system performance.",
      "I enjoy working across the full stack, solving problems end-to-end, and designing systems that make real impact. I love learning, improving, and taking on new challenges — whether it’s DevOps, backend systems, cloud infrastructure, or building tools that make engineering teams more productive.",
    ],
    signature: signatureImg,
  },

//   experience: [
//     {
//       company: "Replicon",
//       role: "Site Reliability Engineer (SRE)",
//       period: "2021 — Present",
//       location: "Bengaluru, India",
//       achievements: [
//         "Led design and automation of deployment pipelines for microservices on AWS.",
//         "Improved system availability by implementing proactive monitoring and playbooks.",
//         "Built cost-optimization tooling that reduced cloud spend by 18%.",
//       ],
//     },
//     {
//       company: "Company XYZ",
//       role: "Backend Engineer",
//       period: "2019 — 2021",
//       location: "Remote",
//       achievements: [
//         "Built internal tools to automate release processes.",
//         "Optimized database queries and reduced request latency by 30%.",
//       ],
//     },
//   ],

//   projects: [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio website built using React + Vite showcasing my skills, projects, experience, and contact details.",
//       tech: ["React", "Vite", "Tailwind", "Framer Motion"],
//       link: "#",
//     },
//     {
//       title: "AWS Automation Scripts",
//       description:
//         "A collection of automation scripts for EC2, Lambda, IAM, CloudWatch and other AWS services to simplify infrastructure tasks.",
//       tech: ["Python", "AWS CLI", "Bash"],
//       link: "#",
//     },
//     {
//       title: "Monitoring Dashboard",
//       description:
//         "A real-time SRE dashboard that tracks system reliability, uptime, and alerts using custom metrics and monitoring tools.",
//       tech: ["Grafana", "Prometheus", "Node.js"],
//       link: "#",
//     },
//   ],

    experience: [
    {
        company: "Replicon",
        role: "Site Reliability Engineer (SRE)",
        period: "2021 — Present",
        location: "Bengaluru, India",

        brief:
        "Led design and automation of deployment pipelines, improved system uptime, and built internal tooling for reliability.",

        details: [
        "Designed automated deployment pipelines for microservices running on AWS.",
        "Improved system availability by implementing intelligent monitoring and incident-management workflows.",
        "Built custom AWS cost-optimization tooling which reduced cloud spend by 18%.",
        "Led root-cause analysis and reliability improvements across multiple production systems.",
        ],
    },
    {
        company: "Company XYZ",
        role: "Backend Engineer",
        period: "2019 — 2021",
        location: "Remote",

        brief:
        "Developed backend systems and automated tools improving engineering productivity and performance.",

        details: [
        "Built internal tools to automate release and testing processes.",
        "Optimized database queries, reducing API latency by 30%.",
        "Contributed to design of backend services in Node.js and Python.",
        ],
    },
    ],

    projects: [
    {
        title: "Portfolio Website",
        tech: ["React", "Vite", "Tailwind", "Framer Motion"],

        brief:
        "A polished portfolio website showcasing my work, experience and projects, built with React and Vite.",

        details: [
        "Implemented responsive layout and animations using Framer Motion.",
        "Built dynamic components fed from a single JSON-like configuration file.",
        "Deployed optimized build to AWS S3 with CloudFront CDN.",
        ],

        link: "#",
    },

    {
        title: "AWS Automation Scripts",
        tech: ["Python", "AWS CLI", "Bash"],

        brief:
        "A collection of automation scripts for AWS services like EC2, Lambda, IAM, S3, and CloudWatch.",

        details: [
        "Automated EC2 instance lifecycle operations.",
        "Wrote IAM user provisioning + access control automation.",
        "Built Lambda deployment automation using Python & AWS CLI.",
        ],

        link: "#",
    },

    {
        title: "Monitoring Dashboard",
        tech: ["Grafana", "Prometheus", "Node.js"],

        brief:
        "A real-time monitoring dashboard tracking system uptime, latency, and reliability metrics.",

        details: [
        "Configured Prometheus exporters for microservices.",
        "Set up Grafana dashboards with custom alert rules.",
        "Implemented Node.js data collectors for metrics ingestion.",
        ],

        link: "#",
    },
    ],


  skills: [
    "AWS",
    "EC2",
    "Lambda",
    "CloudWatch",
    "IAM",
    "S3",
    "VPC",
    "Route53",
    "Docker",
    "Kubernetes",
    "Linux",
    "Bash",
    "Python",
    "Node.js",
    "React",
    "SQL",
    "Git",
    "Monitoring",
    "SRE Practices",
    "vibe-coding"
  ],

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
