import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
   
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-foreground " />
       <div className="h-36 w-36   absolute z-10 top-32 right-20 hidden md:block  font-semibold text-blue-600 border-4 border-white px-3 py-3 text-base
  before:content-[''] before:absolute before:top-[-4px] before:left-[-4px] before:w-[calc(50%+4px)] before:h-[calc(50%+4px)] before:border-t-4 before:border-l-4 before:border-foreground
  after:content-[''] after:absolute after:bottom-[-4px] after:right-[-4px] after:w-[calc(50%+4px)] after:h-[calc(50%+4px)] after:border-b-4 after:border-r-4 after:border-foreground">
            <div  className="bg-red-300 w-full h-full">
                
            </div>
       </div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text">
            Vidhul Prasad
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
          Full-Stack Node.js Developer
        </p>
        
        <p className="text-lg text-white mb-12 max-w-2xl mx-auto">
          I create robust web applications with 3+ years of experience in frontend and backend development. 
          Specialized in React.js, Vue.js, Node.js, and Express.js.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-foreground/20 text-foreground hover:bg-foreground/10 px-8 py-3 text-lg"
          >
            Contact Me
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;