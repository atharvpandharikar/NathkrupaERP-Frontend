export function formatProductPrice(p) {
  const raw =
    p?.price_inclusive_tax ??
    p?.starting_price ??
    p?.discounted_price ??
    p?.price;
  if (raw == null || raw === '') return '—';
  const n = Number(raw);
  if (Number.isNaN(n)) return '—';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

export function productCode(p) {
  const code = p?.barcode_number || p?.barcode || p?.hsn_code;
  if (!code) return '';
  const s = String(code);
  return s.length > 8 ? `${s.slice(0, 4)}…${s.slice(-3)}` : s;
}
