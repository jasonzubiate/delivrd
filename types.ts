export interface RevealedImage {
  src: string;
  x: number;
  y: number;
}

export interface Label {
  id: string;
  name: string;
  url: string;
  img: string;
  owner: string;
}

export interface LabelCardListProps {
  labels: Label[] | [];
}

export interface LabelCardProps {
  label: Label;
}

export type FormFields = {
  name: string;
  link: string;
  instagram: string;
};
