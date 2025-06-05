import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"
import type { ProjectCategory } from "@/types/post-job"

interface ProjectAccordionProps {
  projects: ProjectCategory[]
}

export default function ProjectAccordion({ projects }: ProjectAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {projects.map((project) => (
        <AccordionItem key={project.id} value={project.id} className="border-b">
          <AccordionTrigger className="py-4 hover:no-underline">
            <span className="text-left font-medium">{project.title}</span>
            
          </AccordionTrigger>
          <AccordionContent>
            <div className="py-2 text-gray-600">
              {project.description || "Get professional help with your " + project.title + " project."}
            </div>
            <div className="pt-2 pb-4">
              <a
                href={`/services/${project.id}`}
                className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
              >
                Find providers
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
