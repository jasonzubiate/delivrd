export interface RevealedImage {
  src: string;
  x: number;
  y: number;
}

export interface Label {
  id: string;
  name: string;
  url: string | null;
  description: string;
  genres: string[];
  submissionMethod: string | null;
  contactInfo: ContactInfo;
  location: string | null;
  img: string;
  featuredArtists: string[];
  accepting: boolean;
}

export interface ContactInfo {
  email: string | null;
  socialMedia: SocialMedia;
}

export interface SocialMedia {
  instagram: string | null;
  twitter: string | null;
  youtube: string | null;
}

export interface LabelCardListProps {
  labels: Label[] | [];
}

export interface LabelCardProps {
  label: Label;

}