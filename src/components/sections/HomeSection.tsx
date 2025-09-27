import { Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center max-w-7xl mx-auto">
          {/* Introduction Text */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 xl:order-1 animate-fade-in">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
                Hello, I'm{' '}
                <span className="gradient-text">Your Name</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground font-light">
                Welcome to my digital space
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-foreground/80 leading-relaxed">
                I'm passionate about creating meaningful solutions and sharing insights 
                through my work. This portfolio showcases my journey, methodologies, 
                and the impact I strive to make in my field.
              </p>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-foreground/80 leading-relaxed">
                Explore my presentation slides and workflow diagrams to understand 
                my approach to problem-solving and project execution.
              </p>
            </div>
          </div>

          {/* Video Frame - Responsive for All Screen Sizes */}
          <div className="relative order-1 xl:order-2 animate-scale-in">
            <Card className="card-elevated p-4 sm:p-6 lg:p-8 xl:p-10 bg-gradient-soft hover-scale transition-all duration-300">
              <div className="aspect-video bg-muted rounded-lg relative overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] 2xl:min-h-[500px]">
                <video 
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  preload="metadata"
                >
                  <source src="/videos/navigation-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="mt-6 sm:mt-8 lg:mt-10 space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">Introduction & Navigation</h3>
                <p className="text-muted-foreground text-base sm:text-lg lg:text-xl xl:text-2xl">
                  Get acquainted with my work and learn how to navigate through 
                  the different sections of this portfolio.
                </p>
              </div>
            </Card>
            
            {/* Automation Examples Section */}
            <div className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20 animate-fade-in">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mb-6 sm:mb-8 lg:mb-10">
                Automation Models
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center">
                <Button 
                  variant="default" 
                  size="lg"
                  className="flex-1 sm:flex-none px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 text-base sm:text-lg lg:text-xl xl:text-2xl font-medium hover-scale transition-all duration-300"
                >
                  Retail Automation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 sm:flex-none px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 text-base sm:text-lg lg:text-xl xl:text-2xl font-medium hover-scale transition-all duration-300"
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