// Centralized TypeScript types for the application

export type FolderId = 'selected' | 'ongoing';

export interface Folder {
  id: FolderId;
  label: string;
  works: Project[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year?: string;
  role?: string;
  client?: string;
  content?: string;
  contentSections?: ContentSection[];
  images?: string[];
  processImages?: ProcessImages;
  isOngoing?: boolean;
}

export interface ContentSection {
  title: string;
  body: string[];
}

export interface ProcessImages {
  research?: string[];
  wireframes?: string[];
  designSystem?: string[];
  iterations?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  instagramUrl?: string;
  images?: string[];
  content: BlogContent[];
}

export interface BlogContent {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

export interface FolderCardProps {
  folder: Folder;
  folderIndex: number;
}
