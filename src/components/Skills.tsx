import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Database, Globe, Smartphone, GitBranch } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Vue.js",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "JavaScript ES6+"]
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, APIs, Databases",
    skills: ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Prototyping, User Research",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing", "Design Systems"]
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "Modern web standards and tools",
    skills: ["HTML5", "CSS3", "Webpack", "Vite", "PWA", "Web Performance"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Flutter, Responsive Design",
    skills: ["React Native", "Flutter", "Responsive Design", "Mobile-First", "PWA", "Cross-Platform"]
  },
  {
    icon: GitBranch,
    title: "DevOps & Tools",
    description: "Git, CI/CD, Cloud platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"]
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