import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

interface CertificatesSectionProps {
  certificates: Certificate[];
}

export default function CertificatesSection({ certificates }: CertificatesSectionProps) {
  return (
    <section id="certificates" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="flex flex-row items-start space-x-4 pb-3">
                 <div className="p-2 bg-primary/10 rounded-md mt-1">
                  <Award className="h-5 w-5 text-primary" />
                 </div>
                <div>
                   <CardTitle className="text-lg">{certificate.name}</CardTitle>
                   <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Issued: {certificate.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
