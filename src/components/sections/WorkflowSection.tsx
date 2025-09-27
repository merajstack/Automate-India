import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ZoomIn, Download, Maximize2 } from 'lucide-react';
import workflowDiagram from '@/assets/workflow-diagram.png';

const WorkflowSection = () => {
  const handleImageClick = () => {
    // Open image in new tab for full view
    window.open(workflowDiagram, '_blank');
  };

  return (
    <section id="workflow" className="section-padding bg-warm-white">
      <div className="container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Workflow <span className="gradient-text">Diagram</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive visualization of my process flow, methodology, and 
            systematic approach to project execution and decision-making.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="card-elevated p-8 bg-gradient-soft">
            {/* Workflow Diagram */}
            <div className="space-y-6">
              <div className="relative group cursor-pointer" onClick={handleImageClick}>
                <div className="aspect-auto bg-warm-white rounded-lg overflow-hidden shadow-medium">
                  {/* Replace this placeholder with your actual workflow diagram */}
                  <img 
                    src={workflowDiagram}
                    alt="Workflow Diagram - Please replace with your actual workflow diagram image"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* To replace: Update the import path to point to your workflow diagram image */}
                  
                  {/* Overlay for zoom hint */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-warm-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2 shadow-medium">
                      <Maximize2 className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Click to enlarge</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagram Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Process Overview</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-primary">Key Components</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Member entry and QR/NFC code scanning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Form submission and automated registration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Payment processing and method selection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Membership tracking and renewal management</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-primary">Process Flow</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      This diagram illustrates the complete user journey from initial 
                      entry through membership management, including automated email 
                      systems, payment verification, and renewal processes. Each 
                      decision point and action is clearly mapped to ensure optimal 
                      user experience and system efficiency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button onClick={handleImageClick} className="flex items-center gap-2">
                  <ZoomIn className="w-4 h-4" />
                  View Full Size
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Diagram
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;