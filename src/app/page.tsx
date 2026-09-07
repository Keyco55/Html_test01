import React from 'react';
import {
  HeroSection,
  FeaturedProjectsSection,
  AboutSection,
  ExperienceSection,
  DeveloperToolingSection,
  ContentSection,
  SkillsSection,
  EducationSection,
  AwardsSection,
  ResumeSection,
  ContactSection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Featured Projects */}
      <FeaturedProjectsSection />

      {/* 3. About */}
      <AboutSection />

      {/* 4. Experience */}
      <ExperienceSection />

      {/* 5. Developer Tooling */}
      <DeveloperToolingSection />

      {/* 6. Content */}
      <ContentSection />

      {/* 7. Skills */}
      <SkillsSection />

      {/* 8. Education & Awards */}
      <EducationSection />
      <AwardsSection />

      {/* 9. Resume */}
      <ResumeSection />

      {/* 10. Contact */}
      <ContactSection />
    </div>
  );
}
