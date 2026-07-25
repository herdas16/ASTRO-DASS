// DASS Auto Detailing — WhatsApp Deep Link Helper
// Centralized WhatsApp link builder per PRD §6.8

/** WhatsApp Business number (single source of truth) */
const WA_NUMBER = '6281339933358';

/** CTA context types matching PRD §6.8 table */
export type WaCTAContext =
  | 'contact'         // #1 — Header "Hubungi Kami" / Footer "WhatsApp Us" / Floating Chat
  | 'promo'           // #2 — Hero "Klaim Promo via WhatsApp"
  | 'package-premium' // #3 — Kartu Premium
  | 'package-luxury'  // #4 — Kartu Luxury
  | 'booking'         // #5 — Form Booking submit
  | 'portfolio';      // #7 — CTA dari halaman Galeri Portofolio

/** Data from booking form */
export interface BookingFormData {
  nama?: string;
  mobil?: string;
  paket?: string;
  cabang?: string;
}

/**
 * Build a WhatsApp deep link URL with prefilled message.
 *
 * @param context - The CTA location/context
 * @param data - Optional form data (only used for 'booking' context)
 * @returns Full wa.me URL with encoded message
 */
export function buildWhatsappLink(
  context: WaCTAContext,
  data?: BookingFormData
): string {
  const message = buildMessage(context, data);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WA_NUMBER}?text=${encodedMessage}`;
}

function buildMessage(context: WaCTAContext, data?: BookingFormData): string {
  const greeting = 'Halo DASS Auto Detailing,';

  switch (context) {
    case 'contact':
      return [
        greeting,
        'Saya ingin bertanya-tanya seputar layanan nano ceramic coating.',
        'Mohon info lebih lanjut, terima kasih.',
      ].join('\n');

    case 'promo':
      return [
        greeting,
        'Saya tertarik dan ingin mengklaim promo coating.',
        'Paket: Belum Menentukan',
        'Mohon info lebih lanjut, terima kasih.',
      ].join('\n');

    case 'package-premium':
      return [
        greeting,
        'Saya tertarik dan ingin mengklaim promo coating.',
        'Paket: Premium (2 Lapis) - Rp 3.5M',
        'Mohon info lebih lanjut, terima kasih.',
      ].join('\n');

    case 'package-luxury':
      return [
        greeting,
        'Saya tertarik dan ingin mengklaim promo coating.',
        'Paket: Luxury (3 Lapis+) - Rp 5.5M',
        'Mohon info lebih lanjut, terima kasih.',
      ].join('\n');

    case 'booking': {
      const lines = [greeting, 'Saya tertarik dan ingin mengklaim promo coating.'];
      if (data?.nama) lines.push(`Nama: ${data.nama}`);
      if (data?.mobil) lines.push(`Mobil: ${data.mobil}`);
      if (data?.paket) lines.push(`Paket: ${data.paket}`);
      if (data?.cabang) lines.push(`Cabang: ${data.cabang}`);
      lines.push('Mohon info lebih lanjut, terima kasih.');
      return lines.join('\n');
    }

    case 'portfolio':
      return [
        greeting,
        'Saya baru saja melihat galeri hasil pengerjaan kalian dan tertarik untuk coating mobil saya.',
        'Mohon info lebih lanjut, terima kasih.',
      ].join('\n');

    default:
      return [
        greeting,
        'Saya ingin bertanya-tanya seputar layanan nano ceramic coating.',
        'Mohon info lebih lanjut, terima kasih.',
      ].join('\n');
  }
}
