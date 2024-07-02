import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Skill {
  name: string;
  imageSrc: string;
}

const skillsData: Skill[] = [
  { name: "HTML", imageSrc: "/html.png" },
  { name: "CSS", imageSrc: "/css.png" },
  { name: "JavaScript", imageSrc: "/js.png" },
  { name: "Git", imageSrc: "/git.png" },
  { name: "React", imageSrc: "/react.png" },
  { name: "Next.js", imageSrc: "/nextjs.png" },
  { name: "Tailwind CSS", imageSrc: "/tailwindcss.png" },
  { name: "TypeScript", imageSrc: "/typescript.png" },
  { name: "Node.js", imageSrc: "/nodejs.png" },
  { name: "MongoDB", imageSrc: "/mongodb.png" },
  { name: "supabase", imageSrc: "/supabase.png" },
  { name: "express", imageSrc: "/express-js.png" },
];

interface SkillCardProps {
  name: string;
  imageSrc: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, imageSrc }) => (
  <div className="flex flex-col items-center justify-center gap-4 rounded-lg border  dark:border-box-light p-4 space-y-2 text-center shadow-shadow-light  shadow-md dark:shadow-md transition-transform duration-300 ease-in-out group hover:scale-95 ">
    <div className="relative w-12 h-12">
      <Image
        src={imageSrc}
        alt={`${name} logo`}
        layout="fill"
        objectFit="contain"
      />
    </div>
    <span className="text-sm font-medium text-text-light capitalize dark:text-text-dark">
      {name}
    </span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container max-w-5xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-text-light dark:text-text-dark sm:text-4xl md:text-5xl">
              I work with Full Stack Technologies
            </h2>
            <p className="max-w-[700px] text-text-light dark:text-text-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As a full stack developer, I&apos;ve worked with a wide range of
              tools and frameworks over the years for personal, professional,
              and open source projects. I&apos;m currently expanding my skills
              with Next.js and TypeScript.
            </p>
            <p className="text-text-light dark:text-text-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the technologies I&apos;ve used:
            </p>
            <Link
              href="#"
              className="inline-block px-6 py-3 text-sm font-medium text-center text-background-light bg-text-light rounded-md hover:bg-box-light transition-colors duration-300 dark:text-background-dark dark:bg-text-dark dark:hover:bg-box-dark"
            >
              View Resumé
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {skillsData.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                imageSrc={skill.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
