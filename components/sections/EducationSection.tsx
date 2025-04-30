import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  details: string;
  duration: string;
}

interface EducationSectionProps {
  education: EducationItem[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12">Education</h2>
        <div className="relative max-w-3xl mx-auto pl-10 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-border">
          {education.map((edu, index) => (
            <div key={index} className="mb-10 relative">
               <div className="absolute left-[-29px] top-1.5 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-sm"></div>
               <div className="ml-4 bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                 <h3 className="text-xl font-semibold mb-1">{edu.institution}</h3>
                 <p className="text-muted-foreground mb-1 flex items-center text-sm">
                   <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" /> {edu.location}
                 </p>
                 <p className="font-medium mb-1">{edu.degree}</p>
                 <p className="text-sm text-muted-foreground mb-2">{edu.details}</p>
                 <p className="text-sm text-muted-foreground flex items-center">
                   <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0" /> {edu.duration}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
