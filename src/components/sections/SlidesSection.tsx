import { FileText, Download, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SlidesSection = () => {
  // Placeholder data - will be replaced with actual slides
  const slideGroups = [
    {
      title: "Presentation Title 1",
      description: "Brief description of the presentation content and key topics covered.",
      slides: 24,
      thumbnail: null, // Will be replaced with actual thumbnail
    },
    {
      title: "Presentation Title 2", 
      description: "Another presentation covering different aspects of the subject matter.",
      slides: 18,
      thumbnail: null,
    },
    {
      title: "Presentation Title 3",
      description: "Comprehensive overview with detailed analysis and insights.",
      slides: 32,
      thumbnail: null,
    }
  ];

  return (
    <section id="slides" className="section-padding bg-gradient-soft">
      <div className="container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Presentation <span className="gradient-text">Slides</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my collection of presentations that showcase key insights, 
            methodologies, and findings from my work and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slideGroups.map((group, index) => (
            <Card key={index} className="card-elevated p-6 space-y-6">
              {/* Slide Thumbnail Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-peach-light to-cream rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
                <div className="relative z-10 text-center space-y-3">
                  <FileText className="w-12 h-12 text-primary mx-auto" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{group.slides} Slides</p>
                    <p className="text-xs text-muted-foreground">Preview Available</p>
                  </div>
                </div>
              </div>

              {/* Slide Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Placeholder for additional slides */}
        <div className="mt-12 text-center">
          <Card className="card-elevated p-8 bg-gradient-primary/10">
            <div className="space-y-4">
              <FileText className="w-16 h-16 text-primary mx-auto" />
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">More Slides Coming Soon</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Additional presentations and slide decks will be added to this section. 
                  Check back regularly for updates.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SlidesSection;