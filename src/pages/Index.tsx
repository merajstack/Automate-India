import Navigation from '@/components/Navigation';
import HomeSection from '@/components/sections/HomeSection';
import SlidesSection from '@/components/sections/SlidesSection';
import WorkflowSection from '@/components/sections/WorkflowSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HomeSection />
        <SlidesSection />
        <WorkflowSection />
      </main>
    </div>
  );
};

export default Index;