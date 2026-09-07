/**
 * Product & Featured Projects domain types for KEYCO Portfolio v1.
 * Strict typing without 'any', aligned with Clean Architecture & Domain isolation.
 */

export type ProjectStatusType =
  | 'Closed Beta'
  | 'Active Production'
  | 'Open Source'
  | 'Preparing Public Release'
  | 'Internal Production Verified';

export type ProjectTier = 'heroic' | 'featured' | 'standard';

export type ProjectCategory =
  | 'Full-Stack Product'
  | 'Development Orchestration'
  | 'macOS Native Tool'
  | 'Growth & Automation'
  | 'Developer Infrastructure';

export interface ProjectMetric {
  readonly label: string;
  readonly value: string;
  readonly note?: string;
}

export interface ProjectLink {
  readonly label: string;
  readonly url: string;
  readonly isExternal?: boolean;
  readonly badge?: string;
  readonly icon?: 'github' | 'external' | 'doc' | 'lock';
}

export interface ProjectMetadata {
  readonly role: string;
  readonly timeline: string;
  readonly platform: string;
  readonly scope: string;
}

export interface ProjectNarrative {
  readonly problem: string;
  readonly solution: string;
  readonly keyContributions: readonly string[];
  readonly technicalHighlights: readonly string[];
  readonly learned: string;
}

export interface ProjectArchitecture {
  readonly containerId: string;
  readonly title: string;
  readonly description: string;
  readonly diagramType: 'multi-agent-workflow' | 'kbo-hub-architecture' | 'ai-status-hub-flow';
  readonly svgArtifactPath?: string;
}

export interface Project {
  readonly id: string;
  readonly slug: string;
  readonly displayOrder: number;
  readonly tier: ProjectTier;
  readonly title: string;
  readonly nameEn: string;
  readonly subtitle: string;
  readonly category: ProjectCategory;
  readonly status: ProjectStatusType;
  readonly summary: string;
  readonly metadata: ProjectMetadata;
  readonly narrative: ProjectNarrative;
  readonly techStack: readonly string[];
  readonly featuredStack: readonly string[];
  readonly metrics: readonly ProjectMetric[];
  readonly links: readonly ProjectLink[];
  readonly architecture?: ProjectArchitecture;
  readonly screenshotPlaceholder?: {
    readonly caption: string;
    readonly mockupType: 'browser' | 'terminal' | 'macos-app' | 'workflow';
    readonly badgeText?: string;
  };
}

export interface DeveloperToolItem {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly category: string;
  readonly purpose: string;
  readonly keyFeatures: readonly string[];
  readonly techStack: readonly string[];
  readonly badge: string;
  readonly terminalCommand?: string;
  readonly status: 'Active In Use' | 'Production Tooling' | 'Local Automation';
}
