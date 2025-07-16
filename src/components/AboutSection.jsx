import { Briefcase, Code, User, Database, Cpu } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const skills = [
  {
    id: 1,
    title: "Backend Developer",
    description: "Building robust server-side applications and APIs with modern technologies.",
    icon: <Code className="h-6 w-6 text-primary" />
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "Developing intelligent solutions with AI/ML algorithms and data processing.",
    icon: <Cpu className="h-6 w-6 text-primary" />
  },
  {
    id: 3,
    title: "Database Management",
    description: "Designing and optimizing database systems for efficient data storage and retrieval.",
    icon: <Database className="h-6 w-6 text-primary" />
  },
  {
    id: 4,
    title: "Software Prototyping",
    description: "Rapidly prototyping and iterating software solutions to validate concepts.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  }
];

export const AboutSection = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skills one by one
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => [...prev, skill.id]);
              }, index * 200); // 200ms delay between each skill
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* Side-by-side layout for profile and about points */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column: Profile box */}
            <div className="flex-1 bg-card p-8 rounded-lg shadow-xs flex flex-col items-center justify-center mb-8 md:mb-0">
              <img 
                src="/projects/profile2.png" 
                alt="Karan Raval" 
                className="w-56 h-56 rounded-full object-cover border-4 border-primary/20 shadow-lg mb-6 transition-transform duration-500 hover:scale-110"
              />
              <div className="text-center">
                <h3 className="text-3xl font-semibold mb-2 text-foreground">Karan Nehalkumar Raval</h3>
                <p className="text-lg text-muted-foreground mb-1">Computer Science Student</p>
                <p className="text-muted-foreground">San Jose State University</p>
              </div>
            </div>
            {/* Right column: Overview box */}
            <div className="flex-1 bg-card p-8 rounded-lg shadow-xs flex flex-col justify-center">
              <h4 className="text-xl font-semibold mb-6 text-primary">Overview</h4>
              <ul className="space-y-4 text-muted-foreground text-left pl-6 mb-8">
                {[ 
                  "As a dedicated Computer Science student at San Jose State University, I've developed a strong foundation in both theoretical concepts and practical applications.",
                  "My journey in technology has led me to work on diverse projects ranging from web applications to machine learning solutions.",
                  "I believe in continuous learning and staying updated with the latest technologies to create innovative solutions that make a difference.",
                  "Passionate about building scalable applications and exploring cutting-edge technologies in software development."
                ].map((point, idx) => (
                  <li
                    key={idx}
                    className={cn(
                      "flex items-start opacity-0 translate-x-[-40px] animate-bullet-fade-in",
                    )}
                    style={{
                      animation: `bullet-fade-in 0.7s ease forwards`,
                      animationDelay: `${idx * 0.18 + 0.2}s`
                    }}
                  >
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <a href="#contact" className="cosmic-button bg-primary text-background">
                  Get In Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/karanraval05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Cards - Horizontal Layout */}
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={cn(
                "gradient-border p-6 card-hover transition-all duration-700 transform bg-card",
                visibleSkills.includes(skill.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              )}
            >
              <div className="text-center">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-lg mb-3 text-foreground">{skill.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
