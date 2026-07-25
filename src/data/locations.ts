// DASS Auto Detailing — Location Data
// Source of truth for branch locations (PRD §6.10)

export interface Location {
  name: string;
  label: string;
  isMain: boolean;
  mapsUrl: string;
}

export const locations: Location[] = [
  {
    name: 'Sukoharjo',
    label: 'Sukoharjo (Pusat)',
    isMain: true,
    mapsUrl: 'https://maps.app.goo.gl/UZD6xb2UZ9FEnEBR9',
  },
  {
    name: 'Karanganyar',
    label: 'Karanganyar',
    isMain: false,
    mapsUrl: 'https://maps.app.goo.gl/R4Ej5DM3j2bgH4Gy6',
  },
];
