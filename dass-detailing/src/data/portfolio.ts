// DASS Auto Detailing — Portfolio Gallery Data
// Source of truth for gallery items (PRD §6.9)
// Update this file to add/remove portfolio items

import type { ImageMetadata } from 'astro';

export interface PortfolioItem {
  id: string;
  type: 'image' | 'video';
  src: ImageMetadata | string;
  thumbnail?: string;
  caption?: string;
  branch?: string;
  alt: string;
}

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/portfolio/*.{jpeg,jpg,png,gif,webp,heic,heif,HEIC}',
  { eager: true }
);

export const portfolioItems: PortfolioItem[] = Object.keys(images).map((key, index) => {
  // Extract filename for alt text
  const filename = key.split('/').pop()?.split('.')[0] || `portfolio-${index}`;
  
  return {
    id: `portfolio-${index}`,
    type: 'image',
    src: images[key].default,
    caption: 'Hasil Pengerjaan DASS Auto Detailing',
    branch: 'sukoharjo',
    alt: `DASS Auto Detailing - ${filename}`,
  };
});
