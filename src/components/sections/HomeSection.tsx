import { Play } from 'lucide-react';
import { Card } from '@/components/ui/card';

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Introduction Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm{' '}
                <span className="gradient-text">Your Name</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Welcome to my digital space
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm passionate about creating meaningful solutions and sharing insights 
                through my work. This portfolio showcases my journey, methodologies, 
                and the impact I strive to make in my field.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Explore my presentation slides and workflow diagrams to understand 
                my approach to problem-solving and project execution.
              </p>
            </div>
          </div>

          {/* Video Frame */}
          <div className="relative">
            <Card className="card-elevated p-8 bg-gradient-soft">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Video placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-peach-light to-peach opacity-10"></div>
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-medium">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Navigation Video</h3>
                    <p className="text-sm text-muted-foreground">
                      Video content will be added here
                    </p>
                  </div>
                </div>
                
                {/* Commented video element for later use */}
                {/*
                <video 
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  poster="/path-to-poster-image.jpg"
                >
                  <source src="your-video-url.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                */}
              </div>
              
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-semibold">Introduction & Navigation</h3>
                <p className="text-muted-foreground">
                  Get acquainted with my work and learn how to navigate through 
                  the different sections of this portfolio.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;