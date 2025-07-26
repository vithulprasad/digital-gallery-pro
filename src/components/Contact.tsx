import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
const Contact = () => {
    const form = useRef();
    const [active,setActive] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
     setActive(true)
    emailjs.sendForm(
      'service_5kaemui',     // e.g. 'service_abc123'
      'template_x4tlhb8',    // e.g. 'template_xyz456'
      form.current,
      'HbK1hLPIPU29BN0Dj'      // e.g. 'ZUNPaXXXXXXXX'
    ).then(
      () => {
        setActive(false)
        alert('Message sent successfully!');
      },
      (error) => {
        console.error(error);
         setActive(false)
        alert('Something went wrong.');
      }
    );
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a chat about technology and design.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">vidhulprasad3@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+91 9074764296</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">India,Kerala,kozhikode</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-border/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  asChild
                >
                  <a href="https://github.com/vithulprasad" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-border/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/vidhul-prasad-597567276/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-border/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  asChild
                >
                  <a href="https://x.com/VIDHUL479896" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border-border/20 bg-glass-gradient backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
              
              <form ref={form} onSubmit={sendEmail}  className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/30 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      
                      name="first_name" placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/30 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      
                      name="last_name" placeholder="Last Name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/30 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                     name="email"  placeholder="Your Email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/30 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    placeholder="Type your message..."
                    name="message" 
                  />
                </div>
                
         <Button 
          type="submit" 
          disabled={active} // Disable only when sending
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
        >
          {active ? 'Sending in progress' : 'Send Message'}
        </Button>

              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;