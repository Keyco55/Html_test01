export interface ProfileLink {
  label: string;
  url: string;
  type: 'github' | 'youtube' | 'blog' | 'email' | 'other';
  description?: string;
}

export interface CareerJourneyStep {
  step: string;
  category: string;
  description: string;
}

export interface ProfileData {
  name: string;
  title: string;
  shortBio: string;
  fullBio: string[];
  journeySteps: CareerJourneyStep[];
  links: ProfileLink[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  periodNeedsConfirmation?: boolean;
  department?: string;
  description: string;
  verifiedHighlights: string[];
  skills: string[];
  contextNote?: string;
  privacyComplianceNote?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  program: string;
  period: string;
  degreeOrType: 'bachelor' | 'training' | 'global_service';
  major?: string;
  minor?: string;
  gpa?: string;
  description: string;
  verifiedHighlights: string[];
  categoryBadge: string;
  cautionNotice?: string;
}

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  organizationConfirmed: boolean;
  organization?: string;
  description: string;
}

export interface ContentItem {
  id: string;
  platform: 'youtube' | 'naver_blog';
  title: string;
  channelOrBlogName: string;
  url: string;
  badge: string;
  roleScope: string[];
  description: string;
  focusTopics: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  items: string[];
  practicalContext: string;
}

export interface ResumeData {
  profile: ProfileData;
  experiences: ExperienceItem[];
  education: EducationItem[];
  awards: AwardItem[];
  content: ContentItem[];
  skills: SkillCategory[];
}
