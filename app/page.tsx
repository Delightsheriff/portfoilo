import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full  py-12  ">
      <div className="container max-w-5xl px-0 md:px-6">
        <div className="flex items-center justify-center max-w-[700px]  mx-auto">
          {/* <div className="grid gap-12 lg:grid-cols-2"> */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold tracking-tighter  text-text-light dark:text-text-dark sm:text-4xl md:text-5xl">
              Hello, I&apos;m Delight Amadi-Sheriff
            </h2>
            <p className=" text-text-light dark:text-text-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m a passionate full-stack developer who embarked on my tech
              journey in 2022. Since then, I&apos;ve been dedicated to creating
              impactful web solutions that blend appealing design with robust
              functionality. My experience includes valuable internships at HNG,
              NIIT Port Harcourt, and SmartHub, where I honed my skills in both
              frontend and backend development. As an ALX Software Engineering
              graduate, I&apos;ve further solidified my expertise in crafting
              efficient, user-centric applications.
            </p>
            <p className="text-text-light dark:text-text-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I thrive on tackling challenging projects and am excited to bring
              my problem-solving skills and innovative mindset to a dynamic
              team. My goal is to contribute meaningfully to projects that push
              the boundaries of web development and make a real difference in
              the digital world.
            </p>
            <Link
              href="https://drive.google.com/file/d/1amjF_SzXe91wb9aOtIgqWM9eR9yG30qS/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-sm font-medium text-center text-background-light bg-text-light rounded-md hover:bg-box-light transition-colors duration-300 dark:text-background-dark dark:bg-text-dark dark:hover:bg-box-dark"
            >
              View Resumé
            </Link>
          </div>
          {/* <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {skillsData.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                imageSrc={skill.imageSrc}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
