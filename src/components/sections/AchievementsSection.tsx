import { Trophy, Calendar } from 'lucide-react';

interface Achievement {
  description: string;
  date: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export default function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section id="achievements" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12">Achievements</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-4 p-4 border rounded-lg shadow-sm bg-card hover:bg-accent/10 transition-colors">
                <div className="flex-shrink-0 mt-1">
                   <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <p className="font-medium">{achievement.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                     <Calendar className="h-4 w-4 mr-1.5" />
                     <span>{achievement.date}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
