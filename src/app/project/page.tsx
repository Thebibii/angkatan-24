import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/ui/blur-fade";
import { projectList } from "@/constant";
import React from "react";

const Project = () => {
  const BLUR_FADE_DELAY = 0.04;
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          {projectList.map((project, _) => (
            <BlurFade key={_} delay={BLUR_FADE_DELAY * 12 + _ * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
