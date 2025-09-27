import HomeSection from '@/components/sections/HomeSection';
import SlidesSection from '@/components/sections/SlidesSection';
import WorkflowSection from '@/components/sections/WorkflowSection';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-center h-14 sm:h-16 px-4 sm:px-6">
            <div className="font-semibold text-lg sm:text-xl gradient-text">
              Portfolio
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-14 sm:pt-16">
        <Tabs defaultValue="home" className="w-full">
          {/* Tab Navigation */}
          <div className="sticky top-14 sm:top-16 z-40 bg-warm-white/95 backdrop-blur-sm border-b border-border">
            <div className="container-custom px-3 sm:px-6 py-3 sm:py-4">
              <TabsList className="w-full max-w-xs sm:max-w-md mx-auto h-10 sm:h-12 bg-secondary/50 p-1">
                <TabsTrigger value="home" className="flex-1 text-xs sm:text-sm font-medium px-2 sm:px-3">
                  Home
                </TabsTrigger>
                <TabsTrigger value="slides" className="flex-1 text-xs sm:text-sm font-medium px-2 sm:px-3">
                  Slides
                </TabsTrigger>
                <TabsTrigger value="workflow" className="flex-1 text-xs sm:text-sm font-medium px-2 sm:px-3">
                  Workflow
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          {/* Tab Content */}
          <TabsContent value="home" className="mt-0">
            <HomeSection />
          </TabsContent>
          
          <TabsContent value="slides" className="mt-0">
            <SlidesSection />
          </TabsContent>
          
          <TabsContent value="workflow" className="mt-0">
            <WorkflowSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;