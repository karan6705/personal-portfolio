import { useState } from "react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "C", level: 85 },
      { name: "SQL", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 88 },
      { name: "TypeScript", level: 80 },
    ]
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "ReactJS", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 88 },
      { name: "FastAPI", level: 82 },
      { name: "Spring Boot", level: 80 },
      { name: "Streamlit", level: 85 },
      { name: "Selenium", level: 88 },
      { name: "BeautifulSoup4", level: 90 },
      { name: "Pandas", level: 92 },
      { name: "Flask", level: 85 },
      { name: "scikit-learn", level: 88 },
      { name: "TensorFlow", level: 85 },
      { name: "Keras", level: 83 },
      { name: "BERT", level: 80 },
      { name: "YOLOv8", level: 82 }
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Git", level: 95 },
      { name: "GitHub", level: 92 },
      { name: "Postman", level: 90 },
      { name: "Firebase", level: 82 },
      { name: "Figma", level: 80 },
      { name: "Bootstrap", level: 85 },
      { name: "CodePen", level: 80 },
      { name: "Supabase", level: 78 },
      { name: "Netlify", level: 85 },
      { name: "Vercel", level: 88 },
      { name: "Kafka", level: 75 }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "Azure SQL", level: 80 },
      { name: "MongoDB", level: 85 }
    ]
  }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", ...skillCategories.map(cat => cat.name.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-"))];

  const filteredCategories = activeCategory === "all" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.name.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-") === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical <span className="text-primary"> Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across various domains.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize hover:scale-105",
                activeCategory === category
                  ? "bg-primary text-black text-3xl shadow-lg"
                  : "bg-card text-foreground hover:bg-secondary hover:shadow-md"
              )}
            >
              {category === "all" ? "All Skills" : category.replace(/-/g, " ")}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-semibold text-center text-primary">
                <span className="text-primary">{category.name}</span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group bg-card p-4 rounded-lg shadow-xs card-hover text-center relative overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-primary/20"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Skill name */}
                    <div className="text-lg font-medium text-foreground transition-all duration-300 group-hover:opacity-0 relative z-10">
                      {skill.name}
                    </div>
                    
                    {/* Percentage overlay on hover */}
                    <div className="absolute inset-0 bg-primary/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-background animate-pulse">
                          {skill.level}%
                        </div>
                        <div className="text-xs text-background/80">
                          Proficiency
                        </div>
                      </div>
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-2 left-2 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                      <div className="absolute top-4 right-3 w-1 h-1 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 delay-100"></div>
                      <div className="absolute bottom-3 left-3 w-1 h-1 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 delay-200"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
