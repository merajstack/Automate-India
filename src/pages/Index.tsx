import Navigation from '@/components/Navigation';
import HomeSection from '@/components/sections/HomeSection';
import SlidesSection from '@/components/sections/SlidesSection';
import WorkflowSection from '@/components/sections/WorkflowSection';
import { useState } from 'react';

const Index = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation expandedSections={expandedSections} toggleSection={toggleSection} />
      <main>
        <HomeSection />
        
        {/* Conditionally render sections based on expanded state */}
        <div className={`transition-all duration-500 overflow-hidden ${
          expandedSections.has('slides') 
            ? 'max-h-none opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <SlidesSection />
        </div>
        
        <div className={`transition-all duration-500 overflow-hidden ${
          expandedSections.has('workflow') 
            ? 'max-h-none opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <WorkflowSection />
        </div>
      </main>
    </div>
  );
};

export default Index;