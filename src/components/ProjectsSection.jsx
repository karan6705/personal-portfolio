import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const projects = [
  // Original three projects first
  {
    id: 1,
    title: "Stock Market Streaming Engine",
    description: "A real-time stock market data streaming engine that provides live market data, price updates, and trading analytics with high-performance data processing capabilities.",
    overview: "Developed a comprehensive real-time stock market data streaming engine using Python and WebSocket technology. The system processes live market data from multiple sources, providing real-time price updates, trading analytics, and high-performance data processing capabilities. Features include real-time data aggregation, market trend analysis, and automated trading signal generation.",
    image: "/projects/project1.png",
    tags: ["Python", "WebSocket", "Real-time Data", "Financial APIs"],
    demoUrl: "#",
    githubUrl: "#",
    date: "May 2025 – July 2025"
  },
  {
    id: 2,
    title: "10-K Financial Report Summarizer",
    description: "An AI-powered tool that analyzes and summarizes 10-K financial reports, extracting key insights and providing comprehensive financial analysis for investors and analysts.",
    overview: "Built an advanced AI-powered financial analysis tool that processes and summarizes 10-K reports using natural language processing. The system extracts key financial metrics, risk factors, and business insights from complex regulatory documents. Features include automated report parsing, sentiment analysis, and comprehensive financial dashboard generation for investment decision-making.",
    image: "/projects/project2.png",
    tags: ["AI/ML", "NLP", "Financial Analysis", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/karan6705/10-K-Report-Summarizer",
    date: "April 2025 – May 2025"
  },
  {
    id: 3,
    title: "Researcher AI Next-Gen Website Scraping Tool",
    description: "Advanced web scraping tool with AI capabilities for intelligent data extraction, content analysis, and automated research workflows with enhanced accuracy and efficiency.",
    overview: "Developed a sophisticated web scraping tool with AI capabilities for intelligent data extraction and content analysis. The system uses machine learning algorithms to identify and extract relevant information from websites, providing automated research workflows with enhanced accuracy and efficiency. Features include intelligent content filtering, automated data validation, and comprehensive reporting capabilities.",
    image: "/projects/project3.png",
    tags: ["AI/ML", "Web Scraping", "Data Extraction", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/karan6705/Web-Scraper-AI",
    date: "December 2024 – January 2025"
  },
  // Recently added projects as 4, 5, 6
  {
    id: 6,
    title: "FacultyConnect",
    description: "JavaFX app for managing academic office hours, semesters, courses, and student bookings with persistent SQLite storage.",
    overview: "Built a JavaFX application to manage academic office hours, enabling departments to define semesters with custom start/end dates, curate a course catalog, set up time slots by day and location, and let students book, modify, or cancel appointments via a searchable calendar view. All data persists in a local SQLite database with an MVC architecture that cleanly separates models, FXML views, and controllers.",
    image: "/projects/project4.png",
    tags: ["Java 17", "JavaFX", "FXML", "MVC", "SQLite", "Maven"],
    demoUrl: "#",
    githubUrl: "https://github.com/karan6705/FacultyConnect",
    date: "2025"
  },
  {
    id: 7,
    title: "Wheel - Vision",
    description: "Computer vision pipeline for detecting defects in vehicle wheels using YOLOv8 and automated PDF reporting.",
    overview: "Developed a computer‑vision pipeline to detect defects in vehicle wheels. I annotated over 8,200 frames using LabelImg and automated dataset preparation with Python scripts. Training a YOLOv8 model in PyTorch yielded a 38 % boost in detection precision, and I exposed detection results through a Flask API that generates geospatially tagged PDF reports via Google Maps integration and WeasyPrint, cutting manual reporting time by 62 %.",
    image: "/projects/project5.png",
    tags: ["Python", "LabelImg", "Ultralytics", "YOLOv8", "Flask API", "Google Maps API", "WeasyPrint"],
    demoUrl: "#",
    githubUrl: "https://github.com/karan6705/wheel-vision",
    date: "2025"
  },
  {
    id: 8,
    title: "TweetSentiment Analyzer",
    description: "End-to-end sentiment classification pipeline for tweets using NLTK, scikit-learn, and Logistic Regression.",
    overview: "Created an end‑to‑end sentiment‑classification pipeline for tweets. After cleaning raw data by stripping handles, URLs, and non‑alphanumeric characters, I tokenized and stemmed text with NLTK, vectorized it into a 1,000‑feature bag‑of‑words model using scikit‑learn's CountVectorizer, and trained a Logistic Regression classifier that achieved 95 % accuracy and a 0.72 ROC‑AUC. The model and vectorizer are saved as joblib artifacts, with helper functions for real‑time prediction on new tweets.",
    image: "/projects/project6.png",
    tags: ["Python", "pandas", "NLTK", "scikit-learn", "LogisticRegression", "joblib"],
    demoUrl: "#",
    githubUrl: "https://github.com/karan6705/Twitter-Sentiment-Analysis",
    date: "2025"
  },
  {
    id: 9,
    title: "SJSU Exam Scheduler",
    description: "Full-stack exam scheduling system serving 1,000+ students with Spring Boot backend, ReactJS frontend, and multi-platform deployment.",
    overview: "Engineered a full‑stack Spring Boot backend with PostgreSQL for CRUD exam management and a ReactJS frontend, dockerized for consistency and deployed on Heroku, Vercel & Supabase to serve 1,000+ students and reduce manual calendar setup by 80 %.",
    image: "/projects/project7.png",
    tags: ["Spring Boot", "ReactJS", "PostgreSQL", "Docker", "Heroku", "Vercel", "Supabase"],
    demoUrl: "https://final-scheduler.vercel.app",
    githubUrl: "https://github.com/karan6705/SJSU-Exams-Scheduler",
    date: "2025"
  },
];

export const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate projects one by one
            projects.forEach((project, index) => {
              setTimeout(() => {
                setVisibleProjects(prev => [...prev, project.id]);
              }, index * 300); // 300ms delay between each project
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          {projects.map((project, key) => (
            <div
              key={key}
              className={cn(
                "group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-all duration-700 transform h-fit",
                visibleProjects.includes(project.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              )}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Main Card Content */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground"> {project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium border border-primary rounded-full bg-secondary text-foreground transition-all duration-300 hover:bg-primary hover:text-background"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-primary mb-4 font-medium">
                  {project.date}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Expandable Overview Section */}
              <div className={cn(
                "overflow-hidden transition-all duration-500 ease-in-out",
                hoveredProject === project.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="px-6 pb-6 border-t border-border/50 bg-card">
                  <div className="pt-4">
                    <h4 className="text-lg font-semibold mb-3 text-primary">Project Overview</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 bg-primary text-black text-2xl"
            target="_blank"
            href="https://github.com/karan6705"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
