import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Delight Amadi-Sheriff",
  description:
    "Explore the projects developed by Delight Amadi-Sheriff, showcasing expertise in full stack development, web applications, and innovative solutions.",
  keywords:
    "Full Stack Projects, Web Development, JavaScript Projects, React Projects, Node.js Projects, Portfolio, Delight Amadi-Sheriff Projects, GitHub Projects, Web Applications, Frontend, Backend",
};

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

const projectsData: Project[] = [
  {
    id: "1",
    title: "My Blog website",
    description: "I write about tech and lifestyle",
    technologies: ["React", "Tailwind", "Sanity(CMS)"],
    imageUrl: "/pt.png",
    githubUrl: "https://github.com/preshpi/Sanity-react-blog",
    liveUrl: "https://preshblog.vercel.app/",
  },
  {
    id: "2",
    title: "My Blog website",
    description: "I write about tech and lifestyle",
    technologies: ["React", "Tailwind", "Sanity(CMS)"],
    imageUrl: "/pt.png",
    githubUrl: "https://github.com/preshpi/Sanity-react-blog",
    liveUrl: "https://preshblog.vercel.app/",
  },
  {
    id: "3",
    title: "My Blog website",
    description: "I write about tech and lifestyle",
    technologies: ["React", "Tailwind", "Sanity(CMS)"],
    imageUrl: "/pt.png",
    githubUrl: "https://github.com/preshpi/Sanity-react-blog",
    liveUrl: "https://preshblog.vercel.app/",
  },

  // Add more projects here...
];

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
}) => (
  <div className="w-full bg-background-light dark:bg-background-dark rounded-lg shadow-lg overflow-hidden">
    <div className="w-full aspect-square relative">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        className="object-fill "
      />
    </div>

    <div className="p-5 pt-9 pb-9 flex flex-col">
      <h3 className="font-medium text-lg text-text-light dark:text-text-dark">
        {title}
      </h3>
      <p className="text-text-light dark:text-text-dark text-sm mt-2">
        {description}
      </p>
      <div className="mt-3 text-text-light dark:text-text-dark">
        {technologies.map((tech, index) => (
          <span key={index}>
            {tech}
            {index < technologies.length - 1 && " + "}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-6">
        <Link
          href={githubUrl}
          className="flex items-center gap-2 text-sm text-text-light dark:text-text-dark hover:opacity-75 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-5 h-5" />
          Code
        </Link>
        <Link
          href={liveUrl}
          className="flex items-center gap-2 text-sm text-text-light dark:text-text-dark hover:opacity-75 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiExternalLink className="w-5 h-5" />
          View
        </Link>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section className="w-full  py-12 ">
      <div className="container max-w-5xl px-0 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-text-light dark:text-text-dark sm:text-4xl md:text-5xl">
              My Digital Playground
            </h2>
            <p className="max-w-[700px] text-text-light dark:text-text-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Welcome to my project showcase, where code meets creativity. As a
              full-stack developer, I craft digital experiences from sleek
              front-end designs to robust back-end architectures. Each
              noteworthy project in my GitHub repository represents a unique
              challenge conquered, demonstrating my passion for innovative
              solutions across the development stack.
            </p>
            <p className="max-w-[700px] text-text-light dark:text-text-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore my work to see how I transform ideas into reality, pushing
              the boundaries of web development
            </p>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Delightsheriff"
              className="inline-block px-6 py-3 text-sm font-medium text-center text-background-light bg-text-light rounded-md hover:bg-box-light transition-colors duration-300 dark:text-background-dark dark:bg-text-dark dark:hover:bg-box-dark"
            >
              View Github
            </Link>
          </div>
          <div className="rounded-lg shadow-none lg:shadow-md  lg:max-h-[500px] lg:overflow-y-auto scroll-smooth p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
