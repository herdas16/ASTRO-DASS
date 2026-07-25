// DASS Auto Detailing — Pricing Data
// Source of truth for package pricing (PRD §6.5)

export interface PricingPackage {
  id: string;
  name: string;
  layers: string;
  price: string;
  priceRaw: number;
  description: string;
  features: string[];
  warranty: string;
  isFeatured: boolean;
}

export const packages: PricingPackage[] = [
  {
    id: 'premium',
    name: 'Premium',
    layers: '2 Lapis',
    price: 'Rp 3.5M',
    priceRaw: 3500000,
    description: 'Ideal untuk proteksi harian',
    features: [
      'Premium Wash & Decontamination',
      '1-Step Paint Correction',
      '2 Layers 9H Nano Ceramic',
      'Garansi 2 Tahun',
    ],
    warranty: 'Garansi 2 Tahun',
    isFeatured: false,
  },
  {
    id: 'luxury',
    name: 'Luxury',
    layers: '3 Lapis+',
    price: 'Rp 5.5M',
    priceRaw: 5500000,
    description: 'Proteksi maksimal & kilau ekstrim',
    features: [
      'Signature Wash & Iron Decon',
      'Multi-Stage Paint Correction',
      '3 Layers 9H+ Nano Ceramic',
      'Glass & Wheel Coating (Full)',
      'Garansi 3 Tahun',
    ],
    warranty: 'Garansi 3 Tahun',
    isFeatured: true,
  },
];

/** Promo countdown target date — update this to change promo period */
export const promoEndDate = '2026-08-10T23:59:59+07:00';
