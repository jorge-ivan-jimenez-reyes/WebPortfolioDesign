export interface Project {
  id?: number;
  title: string;
  description: string;
  technologies?: string[];
  type?: string;
  date?: string;
  videoSrc?: string;
  imageSrc?: string;
  href?: string;
  actionText?: string;
  actionLink?: string;
}
