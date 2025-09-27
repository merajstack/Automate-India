import { Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Introduction Text */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm{' '}
                <span className="gradient-text">Your Name</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light">
                Welcome to my digital space
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                I'm passionate about creating meaningful solutions and sharing insights 
                through my work. This portfolio showcases my journey, methodologies, 
                and the impact I strive to make in my field.
              </p>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                Explore my presentation slides and workflow diagrams to understand 
                my approach to problem-solving and project execution.
              </p>
            </div>
          </div>

          {/* Video Frame - Mobile First, Larger Size */}
          <div className="relative order-1 lg:order-2">
            <Card className="card-elevated p-4 sm:p-6 bg-gradient-soft">
              <div className="aspect-video bg-muted rounded-lg relative overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
                <video 
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  preload="metadata"
                >
                  <source src="/videos/navigation-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold">Introduction & Navigation</h3>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Get acquainted with my work and learn how to navigate through 
                  the different sections of this portfolio.
                </p>
              </div>
            </Card>
            
            {/* Automation Examples Section */}
            <div className="mt-8 sm:mt-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">
                Automation Models
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Button 
                  variant="default" 
                  size="lg"
                  className="flex-1 sm:flex-none px-6 py-3 text-base sm:text-lg font-medium"
                >
                  Retail Automation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 sm:flex-none px-6 py-3 text-base sm:text-lg font-medium"
                >
                  Fitness Automation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;