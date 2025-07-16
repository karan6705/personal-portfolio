import { Building2, Users, Code, GraduationCap, Briefcase } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const workExperience = [
  {
    id: 3,
    title: "Peer Academic Success Coach",
    company: "University Housing, San Jose State University",
    location: "San Jose, CA",
    period: "Jun 2025 – Present",
    icon: <Users className="h-5 w-5" />,
    category: "work",
    achievements: [
      "Facilitate roommate mediation and lead floor meetings to build an inclusive residential community",
      "Plan and execute 10+ programs that deliver academic coaching and personal-development resources",
      "Collaborate with campus partners and serve as mandated reporter to ensure HIPAA-level confidentiality and resident safety"
    ]
  },
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "MATC Group Inc.",
    location: "Piscataway, NJ",
    period: "May 2025 – July 2025",
    icon: <Code className="h-5 w-5" />,
    category: "work",
    achievements: [
      "Designed and implemented a React.js quiz component with RESTful API integration, boosting learner engagement by 30%",
      "Built a nightly Python ETL pipeline using requests and pandas to aggregate LMS JSON data into CSV reports, reducing manual reporting time by 75%",
      "Automated SCORM packaging with a Python script to assemble lesson assets into compliant bundles, cutting content-release steps by 80%"
    ]
  },
  {
    id: 2,
    title: "Volunteer Software Developer",
    company: "ContCentric IT Services Pvt Ltd",
    location: "Delaware, United States",
    period: "May 2024 – August 2024",
    icon: <Code className="h-5 w-5" />,
    category: "work",
    achievements: [
      "Accomplished annotation of 8,200 wheel frames through LabelImg and Python automation, achieving 100% ground-truth coverage for model training",
      "Accomplished a 38% improvement in wheel anomaly detection precision through YOLOv8 model training with PyTorch and targeted data augmentation",
      "Accomplished a 62% reduction in reporting time through a Flask API integrated with Google Maps and WeasyPrint, using RESTful endpoints to automate geospatial PDF report generation"
    ]
  }
];

const leadershipExperience = [
  {
    id: 5,
    title: "iSucceed Peer Mentor",
    company: "San Jose State University",
    location: "United States",
    period: "Aug 2024 – Jul 2025",
    icon: <Users className="h-5 w-5" />,
    category: "leadership",
    achievements: [
      "As an iSucceed Peer Mentor, I support new students in their transition to university life, offering guidance, resources, and encouragement to help them succeed academically and personally.",
      "Through one-on-one mentoring and group workshops, I foster a welcoming and inclusive environment, helping students build confidence and a sense of belonging at SJSU.",
      "Skills: Student Counseling · Leadership · Strategic Planning"
    ]
  },
  {
    id: 4,
    title: "Community Desk Assistant",
    company: "San Jose State University",
    location: "San Jose, CA",
    period: "Nov 2024 – May 2025",
    icon: <Users className="h-5 w-5" />,
    category: "leadership",
    achievements: [
      "I provide welcoming front-line support at the community desk, ensuring that students, visitors, and staff receive timely assistance and reliable information.",
      "By upholding university policies and collaborating with fellow housing staff, I maintain a safe, vibrant, and inclusive environment for all residents.",
      "I manage diverse operational tasks such as lockout procedures, key distribution, and meticulous record-keeping in this role. My focus on attention to detail and adherence to safety protocols supports seamless daily operations and fosters resident confidence.",
      "Additionally, I assist in coordinating community-building initiatives and resident engagement activities, working alongside a dedicated team to bolster student success.",
      "Through proactive communication and adept problem-solving, I strive to deliver responsive and professional support, elevating the on-campus living experience.",
      "Skills: Skilled Multi-tasker"
    ]
  },
  {
    id: 1,
    title: "IBM Z Student Ambassador",
    company: "IBM",
    location: "United States",
    period: "Jul 2024 – Dec 2024",
    icon: <Building2 className="h-5 w-5" />,
    category: "leadership",
    achievements: [
      "Led six virtual IBM Z workshops, leveraging IBM's official curricula to train 75 ambassadors in mainframe fundamentals, increasing platform engagement by 60%",
      "Launched four peer-mentoring forums and demo sessions to share best practices, expanding the ambassador network and driving 15+ cross-campus collaborations"
    ]
  },
  {
    id: 2,
    title: "EP-PR Team Officer",
    company: "Software and Engineering Club (SCE), San Jose State University",
    location: "San Jose, CA",
    period: "May 2023 – Apr 2024",
    icon: <GraduationCap className="h-5 w-5" />,
    category: "leadership",
    achievements: [
      "Spearheaded eight campus tech events through targeted social-media campaigns and cross-club partnerships, attracting 120+ attendees per event and boosting turnout by 60%",
      "Mobilized 200+ students via weekly outreach workshops and email newsletters, growing club membership by 35% and expanding professional networking opportunities"
    ]
  }
];

const certificationHonours = [
  {
    id: 1,
    title: "AWS Fundamentals",
    company: "Amazon Web Services",
    location: "",
    period: "2025",
    icon: <GraduationCap className="h-5 w-5" />,
    category: "certification",
    achievements: [
      "Completed AWS Fundamentals certification, demonstrating foundational knowledge of cloud computing and AWS services."
    ],
    pdf: "/projects/certificate1.pdf"
  },
  {
    id: 2,
    title: "Cybersecurity Fundamentals (IBM)",
    company: "IBM",
    location: "",
    period: "2023",
    icon: <GraduationCap className="h-5 w-5" />,
    category: "certification",
    achievements: [
      "Completed IBM Cybersecurity Fundamentals certification, covering essential concepts in information security, risk management, and threat mitigation."
    ],
    pdf: "/projects/certificate2.pdf"
  },
  {
    id: 3,
    title: "President's Scholar",
    company: "San Jose State University",
    location: "",
    period: "Spring 2024 | Spring 2025",
    icon: <GraduationCap className="h-5 w-5" />,
    category: "certification",
    achievements: [
      "Awarded President's Scholar for outstanding academic achievement in Spring 2024 and Spring 2025."
    ],
    pdf: "/projects/certificate3.pdf"
  },
  {
    id: 4,
    title: "UIUX with Figma and Adobe XD",
    company: "Udemy",
    location: "",
    period: "2025",
    icon: <GraduationCap className="h-5 w-5" />,
    category: "certification",
    achievements: [
      "Instructors: Marcus Menti, Zechariah Tech",
      "Date: March 17, 2025",
      "Length: 10.5 total hours",
      "Recipient: Karan Raval"
    ],
    pdf: "/projects/certificate4.pdf"
  },
];

const categories = [
  { id: "work", name: "Work Experience", count: workExperience.length },
  { id: "leadership", name: "Leadership Experience", count: leadershipExperience.length },
  { id: "certification", name: "Certification and Honours", count: certificationHonours.length }
];

export const WorkExperienceSection = () => {
  const [activeCategory, setActiveCategory] = useState("work");
  const [hoveredExperience, setHoveredExperience] = useState(null);

  const getFilteredExperience = () => {
    if (activeCategory === "work") return workExperience;
    if (activeCategory === "leadership") return leadershipExperience;
    if (activeCategory === "certification") return certificationHonours;
    return [];
  };

  const filteredExperience = getFilteredExperience();

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground mb-2">WHAT I'VE DONE SO FAR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground transition-all duration-500" key={activeCategory}>
            {activeCategory === 'work' && (<><span className="text-primary">Work</span> Experience</>)}
            {activeCategory === 'leadership' && (<><span className="text-primary">Leadership</span> Experience</>)}
            {activeCategory === 'certification' && (<><span className="text-primary">Certification</span> and Honours</>)}
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-card rounded-lg p-1 shadow-xs">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2",
                  activeCategory === category.id
                    ? "bg-primary text-black text-xl shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                )}
              >
                <span>{category.name}</span>
                <span className="bg-primary/20 text-white px-2 py-0.5 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30"></div>

          <div className="space-y-12">
            {filteredExperience.map((experience, index) => (
              <div key={experience.id} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-card z-10 flex items-center justify-center">
                  <div className="text-white">
                    {experience.icon}
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div 
                    className="bg-card p-6 rounded-lg shadow-xs card-hover transition-all duration-300"
                    onMouseEnter={() => setHoveredExperience(experience.id)}
                    onMouseLeave={() => setHoveredExperience(null)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-3xl font-semibold text-foreground mb-2">
                          {experience.title}
                        </h3>
                        <div className="space-y-1">
                          <p className="text-primary font-medium text-lg">
                            {experience.company}
                          </p>
                          <p className="text-base text-muted-foreground">
                            {experience.location}
                          </p>
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-base text-muted-foreground font-medium">
                          {experience.period}
                        </p>
                      </div>
                    </div>
                    
                    {/* Expandable Achievements Section */}
                    <div className={cn(
                      "overflow-hidden transition-all duration-500 ease-in-out",
                      hoveredExperience === experience.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <div className="pt-4 border-t border-border/50">
                        <h4 className="text-lg font-semibold mb-3 text-primary">Key Achievements</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-lg text-muted-foreground flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                          {experience.pdf && (
                            <li className="mt-2">
                              <a href={experience.pdf} target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium">View Certificate (PDF)</a>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom node */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 bg-primary rounded-full border-4 border-card z-10 flex items-center justify-center">
            <Briefcase className="h-3 w-3 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}; 