const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/20 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent"></div>
          <span className="ml-3 text-lg font-semibold text-foreground">Alex Johnson</span>
        </div>
        
        <p className="text-muted-foreground mb-4">
          Building digital experiences that matter
        </p>
        
        <p className="text-sm text-muted-foreground">
          © 2024 Alex Johnson. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;