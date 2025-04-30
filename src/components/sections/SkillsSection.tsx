import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Cpu, Lightbulb, Settings } from 'lucide-react'; // Using relevant icons

interface SkillsSectionProps {
  skills: {
    languages: string[];
    technologies: string[];
    toolsPlatforms: string[];
    softSkills: string[];
  };
}

const skillCategories = [
  { title: 'Languages', dataKey: 'languages', icon: Code },
  { title: 'Technologies', dataKey: 'technologies', icon: Cpu },
  { title: 'Tools & Platforms', dataKey: 'toolsPlatforms', icon: Settings },
  { title: 'Soft Skills', dataKey: 'softSkills', icon: Lightbulb },
] as const; // Use `as const` for stricter typing

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            // Ensure dataKey is a valid key of skills
            const categorySkills = skills[category.dataKey as keyof typeof skills];
            return (
              <Card key={category.title} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                   <div className="p-2 bg-primary/10 rounded-md">
                     <Icon className="h-6 w-6 text-primary" />
                   </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
