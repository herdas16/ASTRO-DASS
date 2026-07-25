// DASS Auto Detailing — Portfolio Gallery Data
// Source of truth for gallery items (PRD §6.9)
// Update this file to add/remove portfolio items

export interface PortfolioItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  caption: string;
  category: string;
  branch: string;
  alt: string;
}

export const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'sedan', label: 'Sedan' },
  { id: 'suv', label: 'SUV' },
  { id: 'mpv', label: 'MPV' },
  { id: 'premium', label: 'Paket Premium' },
  { id: 'luxury', label: 'Paket Luxury' },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'luxury-fortuner-01',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
    caption: 'Toyota Fortuner — Paket Luxury',
    category: 'suv',
    branch: 'sukoharjo',
    alt: 'Toyota Fortuner setelah nano ceramic coating paket Luxury, tampak kilau maksimal di bawah cahaya studio',
  },
  {
    id: 'premium-civic-01',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    caption: 'Honda Civic — Paket Premium',
    category: 'sedan',
    branch: 'sukoharjo',
    alt: 'Honda Civic setelah nano ceramic coating paket Premium, permukaan cat reflektif seperti cermin',
  },
  {
    id: 'luxury-alphard-01',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1606611013004-1a84d6c35ac9?w=800&q=80',
    caption: 'Toyota Alphard — Paket Luxury',
    category: 'mpv',
    branch: 'karanganyar',
    alt: 'Toyota Alphard hitam dengan hasil coating nano ceramic, tampak glossy dan premium',
  },
  {
    id: 'premium-crv-01',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    caption: 'Honda CR-V — Paket Premium',
    category: 'suv',
    branch: 'karanganyar',
    alt: 'Honda CR-V putih setelah coating, efek hydrophobic terlihat jelas',
  },
  {
    id: 'luxury-camry-01',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    caption: 'Toyota Camry — Paket Luxury',
    category: 'sedan',
    branch: 'sukoharjo',
    alt: 'Toyota Camry silver dengan hasil coating nano ceramic Luxury, kilau showroom-quality',
  },
  {
    id: 'premium-avanza-01',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
    caption: 'Toyota Avanza — Paket Premium',
    category: 'mpv',
    branch: 'sukoharjo',
    alt: 'Toyota Avanza setelah nano ceramic coating Premium, perlindungan cat jangka panjang',
  },
];
