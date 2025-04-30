import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Phone } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  info: {
    name: string;
    bio: string;
    linkedin: string;
    email: string;
    github: string;
    mobile: string;
    resumeUrl: string;
  };
}

export default function HeroSection({ info }: HeroSectionProps) {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {info.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {info.bio}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg">
              <Link href={info.resumeUrl} download>
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Link>
            </Button>
             {/* Removed AI Portfolio Tailor button */}
             {/* <Button variant="outline" size="lg" asChild>
               <Link href="#tailor">
                  AI Portfolio Tailor
                </Link>
            </Button> */}
          </div>
           <div className="flex space-x-4 pt-6">
             <Link href={info.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Button variant="outline" size="icon" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={info.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                 <Button variant="outline" size="icon" aria-label="LinkedIn">
                   <Linkedin className="h-5 w-5" />
                 </Button>
              </Link>
              <Link href={`mailto:${info.email}`} aria-label="Email">
                 <Button variant="outline" size="icon" aria-label="Email">
                   <Mail className="h-5 w-5" />
                 </Button>
              </Link>
               <Link href={`tel:${info.mobile}`} aria-label="Mobile Phone">
                 <Button variant="outline" size="icon" aria-label="Phone">
                   <Phone className="h-5 w-5" />
                 </Button>
               </Link>
           </div>
        </div>
        <div className="hidden md:flex justify-center">
           {/* Using Picsum for a placeholder image */}
          <Image
            src="https://picsum.photos/seed/uttam-portfolio/500/500"
            alt="Uttam Aggarwal - Placeholder Portrait"
            width={400}
            height={400}
            className="rounded-full shadow-lg border-4 border-primary/20 object-cover"
            priority // Load image sooner
          />
        </div>
      </div>
    </section>
  );
}
