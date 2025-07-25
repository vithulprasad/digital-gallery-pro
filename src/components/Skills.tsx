import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Database, Globe, Smartphone, GitBranch } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React.js, Vue.js, Modern JavaScript",
    skills: ["React.js", "Vue.js", "JavaScript ES6+", "HTML5", "CSS3", "Responsive Design"]
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Express.js, APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "Server-side Logic"]
  },
  {
    icon: Globe,
    title: "Full-Stack Integration",
    description: "End-to-end application development",
    skills: ["API Design", "Database Design", "Authentication", "State Management", "MVC Architecture", "Deployment"]
  },
  {
    icon: Palette,
    title: "Frontend Frameworks",
    description: "Modern UI libraries and frameworks",
    skills: ["React Components", "Vue Components", "Tailwind CSS", "Bootstrap", "Material UI", "Responsive UI"]
  },
  {
    icon: Smartphone,
    title: "Web Technologies",
    description: "Core web development technologies",
    skills: ["DOM Manipulation", "AJAX", "JSON", "Local Storage", "Session Management", "Progressive Web Apps"]
  },
  {
    icon: GitBranch,
    title: "Development Tools",
    description: "Version control and development workflow",
    skills: ["Git", "GitHub", "VS Code", "NPM", "Webpack", "Code Reviews"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I work with a wide range of technologies to bring ideas to life, 
            from concept to deployment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="border-border/20 bg-glass-gradient backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 mr-4">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;