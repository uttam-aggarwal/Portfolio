import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Project {
  title: string;
  date: string;
  description: string[];
  tech: string[];
  link?: string; // Optional project link
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12">Projects</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {projects.map((project, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg shadow-sm overflow-hidden bg-card">
              <AccordionTrigger className="px-6 py-4 hover:bg-accent/50 transition-colors text-lg font-medium">
                <div className="flex justify-between items-center w-full">
                   <span>{project.title}</span>
                   <span className="text-sm font-normal text-muted-foreground">{project.date}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0">
                <div className="space-y-3 mb-4">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-muted-foreground">{desc}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((techItem) => (
                    <Badge key={techItem} variant="outline">
                      {techItem}
                    </Badge>
                  ))}
                </div>
                 {project.link && (
                    <Button variant="link" asChild className="p-0 h-auto">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
