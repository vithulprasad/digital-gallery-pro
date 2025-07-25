import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience 
              creating digital solutions that make a difference. I specialize in 
              modern web technologies and love turning complex problems into 
              simple, beautiful designs.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with 
              the developer community through blog posts and mentoring.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Frontend</h4>
                <p className="text-muted-foreground">React, TypeScript, Next.js, Tailwind CSS</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Backend</h4>
                <p className="text-muted-foreground">Node.js, Python, PostgreSQL, MongoDB</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-border/20 bg-glass-gradient backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">🚀 Experience</h3>
                <p className="text-muted-foreground">
                  5+ years in web development, working with startups and enterprises 
                  to deliver scalable solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20 bg-glass-gradient backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">🎯 Focus</h3>
                <p className="text-muted-foreground">
                  Performance optimization, user experience, and clean, 
                  maintainable code architecture.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20 bg-glass-gradient backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">💡 Philosophy</h3>
                <p className="text-muted-foreground">
                  Technology should serve people, not the other way around. 
                  Every line of code should have purpose.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;