import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import EducationSection from '@/components/sections/EducationSection';
// Removed import PortfolioTailorSection from '@/components/sections/PortfolioTailorSection';
import { Separator } from '@/components/ui/separator';

// Static data definition remains the same

const personalInfo = {
  name: "Uttam Aggarwal",
  bio: "A passionate Computer Science student with expertise in C++, Python, Machine Learning, and AI. Proven problem-solver with a creative mindset and strong attention to detail. Eager to leverage technical skills and logical thinking to contribute to innovative projects.",
  linkedin: "https://linkedin.com/in/uttam-aggarwal", // Ensure full URL
  email: "uttamaggarwal321@gmail.com", // Corrected email
  github: "https://github.com/uttam-aggarwal", // Ensure full URL
  mobile: "++918750303281", // Placeholder number
  resumeUrl: "/resume.pdf", // Placeholder path for resume download
};

const skillsData = {
  languages: ["C++", "Python", "C", "SQL"],
  technologies: ["Machine learning", "AI", "Scikit-learn", "TensorFlow", "NLTK", "GloVe", "Pandas", "NumPy", "Matplotlib"],
  toolsPlatforms: ["MySQL", "Google Colab", "Jupyter notebook", "PyCharm", "Blender", "Unity"],
  softSkills: ["Problem-Solving", "Creative thinking", "Attention to Detail", "Logical & Structured Thinking"],
};

const projectsData = [
  {
    title: "Careerio – Career path recommender model",
    date: "Nov 2024",
    description: [
      "Developed a Career Recommendation System using Python, GloVe, and Scikit-learn to assist high school students in exploring diverse career options.",
      "Processed 1,000+ job entries containing job titles, descriptions, skills, interests, and sectors to build a comprehensive dataset.",
      "Implemented weighted GloVe embeddings and KMeans clustering with hierarchical refinement to enhance similarity matching.",
      "Delivered personalized career recommendations by optimizing clustering techniques for accuracy and relevance.",
    ],
    tech: ["Python", "GloVe", "Scikit-learn", "KMeans", "Hierarchical Clustering"],
  },
  {
    title: "Named Entity Recognition system (NER)",
    date: "Sep 2024",
    description: [
       "Built a Deep Learning-based NER System using an LSTM model to extract and classify entities like names, organizations, and locations with 95.6% accuracy.",
       "Pre-processed and tokenized text using NLTK and leveraged GloVe embeddings for improved contextual understanding.",
       "Optimized model performance through hyperparameter tuning, dropout regularization, and bidirectional LSTM layers.",
       "Enhanced entity recognition accuracy by integrating advanced deep learning techniques for robust extraction.",
    ],
    tech: ["Python", "TensorFlow", "LSTM", "NLTK", "GloVe", "Neural Networks"],
  },
  {
     title: "Flappy Bird with dynamic themes",
     date: "July 2024",
     description: [
       "Developed an interactive Flappy Bird game using Unity and C# scripting, enhancing engagement with customizable themes.",
       "Implemented a theme toggle system allowing seamless switching between day, night, and custom themes for a dynamic user experience.",
       "Optimized collision detection and scoring mechanics to ensure smooth and responsive gameplay.",
       "Enhanced player interaction by refining game mechanics for an intuitive and immersive experience.",
     ],
     tech: ["Unity", "C#", "Creative thinking"],
  },
];

const certificatesData = [
  { name: "NLP specialization", issuer: "Deeplearning.ai", date: "9 May 2024" },
  { name: "The Bits and Bytes of Computer Networking", issuer: "Google", date: "3 Feb 2024" },
  { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft", date: "30 July 2024" },
  { name: "Approximation Algorithms and Linear Programming", issuer: "University of Colorado Boulder", date: "29 April 2024" },
];

const achievementsData = [
  { description: "Rated 1314 on Codeforces contest", date: "30 Jan 2024" },
  { description: "Rated 1504 on LeetCode contest", date: "30 Nov 2024" },
  { description: "Solved over 1000+ problems on DSA on various platforms", date: "30 Jan 2025" },
  { description: "Scored 100/100 in chemistry CBSE boards", date: "17 Mar 2022" },
];

const educationData = [
 {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    details: "CGPA: 8.04",
    duration: "Since August 2022",
 },
 {
    institution: "Birla School Pilani",
    location: "Pilani, Rajasthan",
    degree: "Intermediate",
    details: "Percentage: 94.6%",
    duration: "April 2020 - March 2022",
 },
 {
    institution: "Rockfield Public School",
    location: "Rohini, Delhi",
    degree: "Matriculation",
    details: "Percentage: 78%",
    duration: "April 2015 - March 2020",
 },
];

export default function Home() {
  // Removed the 'allPersonalDetails' variable consolidation as the AI Tailor section is removed.

  return (
    <>
      <HeroSection info={personalInfo} />
      <Separator className="my-12 md:my-16" />
      <SkillsSection skills={skillsData} />
      <Separator className="my-12 md:my-16" />
      <ProjectsSection projects={projectsData} />
      <Separator className="my-12 md:my-16" />
      <CertificatesSection certificates={certificatesData} />
      <Separator className="my-12 md:my-16" />
      <AchievementsSection achievements={achievementsData} />
      <Separator className="my-12 md:my-16" />
      <EducationSection education={educationData} />
      {/* Removed the Separator and PortfolioTailorSection */}
      {/* <Separator className="my-12 md:my-16" /> */}
      {/* <PortfolioTailorSection personalDetails={allPersonalDetails} /> */}
    </>
  );
}
