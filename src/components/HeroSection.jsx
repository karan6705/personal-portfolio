import { ArrowDown } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 text-foreground"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Karan
            </span>
            <span className="ml-2 text-foreground opacity-0 animate-fade-in-delay-2">
              {" "}Nehalkumar Raval
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-primary mt-2 min-h-[2.5rem]">
            <Typewriter
              words={['Frontend Developer', 'Software Engineer', 'AI/ML Enthusiast', 'Backend Developer']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a Computer Science student at San Jose State University, specializing in full-stack development 
            using JavaScript, React, Node.js, and SQL. I'm passionate about building scalable, user-friendly 
            applications and collaborating across teams to deliver impactful solutions.
          </p>

          <div className="group pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col items-center">
            <span className="inline-block w-52 h-52 rounded-full border-4 border-primary shadow-lg overflow-hidden bg-background transition-transform duration-500 hover:scale-110 hover:shadow-2xl">
              <img src="/projects/profile1.png" alt="Karan Raval" className="w-full h-full object-cover" />
            </span>
            <span className="mt-6 text-lg text-primary font-semibold transition-transform duration-500 group-hover:scale-110 group-hover:animate-wiggle">That's me!</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
