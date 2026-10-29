// Photos served from Unsplash's CDN (free under the Unsplash License).
// Credits are listed in the README.

const base = "https://images.unsplash.com/";

export function unsplash(id: string, width: number, height?: number) {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    q: "75",
    w: String(width),
  });
  if (height) params.set("h", String(height));
  return `${base}${id}?${params.toString()}`;
}

export function srcSet(id: string, widths: number[], ratio?: number) {
  return widths
    .map((w) => `${unsplash(id, w, ratio ? Math.round(w * ratio) : undefined)} ${w}w`)
    .join(", ");
}

export const photos = {
  hero: "photo-1758518730264-9235a1e5416b", // Vitaly Gariev
  heritage: "photo-1689351546830-1307635739b1", // yaz00ne alani
  tigris: "photo-1737314417437-b97a7e6229c5", // حسن (Hassan)
  library: "photo-1505664194779-8beaceb93744", // Giammarco Boscaro
  partners: {
    karim: "photo-1758518729286-e8d94cc231f5", // Vitaly Gariev
    zainab: "photo-1581065178047-8ee15951ede6", // Annika Palmari
    omar: "photo-1758518729058-b158e71c5a9b", // Vitaly Gariev
  },
} as const;
