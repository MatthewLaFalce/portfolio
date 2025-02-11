import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Matthew",
  lastName: "LaFalce",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: <>I&apos;m {person.firstName}, a {person.role} at <InlineCode>WinePOS</InlineCode>, where I craft intuitive<br /> user experiences. After hours, I build my own projects.</>
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  icon: "lego",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A passionate and results-driven Software Engineer with over six years of experience building and
        optimizing high-performance applications. Skilled in designing scalable systems, improving
        code efficiency, and solving complex technical challenges. Adept at collaborating across
        teams to drive innovation and deliver impactful solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "WinePOS by Innovative Computer Solutions",
        timeframe: "2018 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Spearheaded the design and implementation of a centralized authentication platform
            and data gateway, unifying access to over 800 merchant databases. This system
            streamlines authentication, enforces security policies, and provides a single entry
            point for managing data across all merchants.
          </>,
          <>
            Reimplemented the company&apos;s ETL pipeline, reducing maintenance tasks by 50% and
            added a user-friendly interface, allowing non-technical employees to manage data
            integration through configurable mappings, scheduling, and error handling.
          </>,
          <>
            Designed and built an app platform that automates invoice processing by parsing
            data from PDFs, eliminating the need for merchants to manually enter invoice
            details. The system extracts, validates, and standardizes data, improving accuracy
            and efficiency.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Monmouth University",
        description: <>Studied software engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Ruby on Rails",
        description: <>Able to build full scale enterprise applications with ease.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Go",
        description: <>Building highly efficent, lightweight APIs and CLIs.</>,
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI.</>,
      },
    ],
  },
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MatthewLaFalce",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/matthew-lafalce/",
  },
];

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  icon: "coffee",
  username: "matthewlafalce", // Your username on Dev.to
};

export { person, home, about, social, blog };