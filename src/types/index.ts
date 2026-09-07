/**
 * Shared base types for Portfolio v1 Foundation.
 * Domain-specific types reside in respective feature track contracts.
 */

export interface BaseSectionProps {
  id?: string;
  className?: string;
}

export interface NavItem {
  readonly label: string;
  readonly href: string;
}
