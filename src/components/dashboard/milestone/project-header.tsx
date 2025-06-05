"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import type { ProjectData } from "@/types/milestone";

interface ProjectHeaderProps {
  project: ProjectData;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <Card className="p-8 shadow-none border-primary-500/10 border-2 gap-0 mb-9.5">
      <h2 className="text-2xl font-bold mb-4.5">{project.title}</h2>
      <div className="flex items-center gap-2">
        <Image
          src={project.freelancer.avatar || "/placeholder.svg"}
          alt={project.freelancer.name}
          width={42}
          height={42}
          className="rounded-md"
        />
        <div>
          <p className="font-medium text-base text-para">    
            {project.freelancer.name}
          </p>
          <p className="text-xs text-light-para">{project.freelancer.role}</p>
        </div>
      </div>
    </Card>
  );
}
