import Image from "next/image";
import { Card, CardHeader } from "../ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
          {/* btns */}
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <div className="w-full flex flex-wrap gap-x-1">
          {project.category.split(",").map((cat, index) => {
            return (
              <Badge
                key={index}
                className="uppercase text-sm font-normal mb-2"
              >
                {cat}
              </Badge>
            );
          })}
        </div>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
