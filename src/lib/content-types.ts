export interface LocalizedText {
  en: string;
  ar?: string;
}

export interface Tournament {
  id: string;
  visible: boolean;
  order: number;
  name: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  /** Date / teams / registration status line shown above the CTA */
  meta: LocalizedText;
  bannerUrl: string;
  battlefyUrl: string;
  /** Absent or false means registration is still open. */
  registrationClosed?: boolean;
  format: LocalizedText[];
  rules: LocalizedText[];
  prizes: LocalizedText[];
}

export interface Partner {
  id: string;
  visible: boolean;
  order: number;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
  stats: LocalizedText[];
  logoUrl: string;
  websiteUrl: string;
  discordUrl: string;
}

export interface SiteContent {
  version: 1;
  tournaments: Tournament[];
  partners: Partner[];
}
