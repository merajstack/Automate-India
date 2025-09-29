import { FileText, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SlidesSection = () => {
  return (
    <section id="slides" className="section-padding bg-gradient-soft">
      <div className="container-custom">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Presentation <span className="gradient-text">Slides</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My presentation slides showcasing key insights and methodologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <Card className="card-elevated p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
            {/* Slide Thumbnail Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-peach-light to-cream rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
              <div className="relative z-10 text-center space-y-2 sm:space-y-3 px-4">
                <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto" />
                <div className="space-y-1">
                  <p className="text-base sm:text-lg font-medium">Presentation Slides</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Ready for your content</p>
                </div>
              </div>
            </div>

            {/* COMMENTED OUT: Add your slide content here */}
            {/* 
            Replace the above placeholder div with your actual slide content.
            You can embed your slides here using:
            - An iframe for Google Slides, SlideShare, etc.
            - An image carousel for slide images
            - A PDF viewer component
            - Direct HTML content
            
            Example:
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe 
                src="YOUR_SLIDE_URL_HERE" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                allowFullScreen
              />
            </div>
            */}

            {/* Slide Information */}
            <div className="space-y-3 sm:space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold">Your Presentation Title</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Brief description of your presentation content and key topics covered.
                </p>
              </div>

              <div className="flex justify-center">
                <Button variant="default" size="lg" className="w-full sm:w-auto">
                  <Eye className="w-4 h-4 mr-2" />
                  View Slides
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SlidesSection;