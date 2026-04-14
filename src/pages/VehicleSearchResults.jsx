import React, { useEffect, useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  fetchProductsList,
  fetchCompatibilitySearch,
  fetchTypesenseSearch,
  resolveApiMediaUrl,
} from '../api/shop';
import { formatProductPrice, productCode } from '../utils/productFormat';
import ProductThumb from '../components/ProductThumb';

function normalizeListItem(row) {
  if (!row) return null;
  const id = row.product_id ?? row.id;
  if (!id) return null;
  return {
    product_id: String(id),
    title: row.title || 'Untitled',
    image: row.image || '',
    brand: row.brand,
    price_inclusive_tax: row.price_inclusive_tax,
    starting_price: row.starting_price,
    discounted_price: row.discounted_price,
    price: row.price,
    barcode_number: row.barcode_number,
    barcode: row.barcode,
    hsn_code: row.hsn_code,
  };
}

export default function VehicleSearchResults() {
  const [searchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = useMemo(() => {
    const q = searchParams.get('q')?.trim() || '';
    const makerId = searchParams.get('maker_id') || '';
    const modelId = searchParams.get('model_id') || '';
    const year = searchParams.get('year') || '';
    const variantId = searchParams.get('variant_id') || '';
    const compatibilityGroupId = searchParams.get('compatibility_group_id') || '';
    return { q, makerId, modelId, year, variantId, compatibilityGroupId };
  }, [searchParams]);

  useEffect(() => {
    let cancelled = false;
    const { q, makerId, modelId, year, variantId, compatibilityGroupId } = query;
    const hasVehicle = Boolean(
      makerId || modelId || year || variantId || compatibilityGroupId
    );

    async function run() {
      setLoading(true);
      setError(null);
      try {
        if (hasVehicle) {
          const res = await fetchCompatibilitySearch({
            maker_id: makerId || undefined,
            model_id: modelId || undefined,
            year: year || undefined,
            variant_id: variantId || undefined,
            compatibility_group_id: compatibilityGroupId || undefined,
            q: q || '*',
            page: 1,
            per_page: 50,
          });
          if (cancelled) return;
          const raw = Array.isArray(res.data) ? res.data : [];
          setItems(raw.map(normalizeListItem).filter(Boolean));
        } else if (q) {
          const res = await fetchTypesenseSearch({ q, page: 1, perPage: 50 });
          if (cancelled) return;
          const raw = Array.isArray(res.data) ? res.data : [];
          setItems(raw.map(normalizeListItem).filter(Boolean));
        } else {
          const res = await fetchProductsList({ pageSize: 48, page: 1 });
          if (cancelled) return;
          const raw = Array.isArray(res.results) ? res.results : [];
          setItems(raw.map(normalizeListItem).filter(Boolean));
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Something went wrong.');
          setItems([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [query]);

  const subtitle = useMemo(() => {
    const { q, makerId, modelId, year, variantId, compatibilityGroupId } = query;
    const parts = [];
    if (makerId) parts.push('Maker selected');
    if (modelId) parts.push('Model line selected');
    if (compatibilityGroupId) parts.push('Compatibility group selected');
    if (year) parts.push(`Year ${year}`);
    if (variantId) parts.push('Variant selected');
    if (q) parts.push(`Keyword “${q}”`);
    return parts.length ? parts.join(' · ') : 'All products';
  }, [query]);

  return (
    <div className="w-full bg-white font-sans min-h-[60vh]">
      <div className="max-w-[1400px] mx-auto px-10 py-10">
        <div className="mb-8">
          <h1 className="text-[32px] font-bold text-[#111827] leading-tight">Parts search</h1>
          <p className="text-[#6b7280] text-base font-medium mt-1">{subtitle}</p>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {loading &&
            Array.from({ length: 12 }).map((_, idx) => (
              <div key={`sk-${idx}`} className="animate-pulse">
                <div className="aspect-square bg-gray-100 rounded-[16px] mb-3" />
                <div className="h-3 bg-gray-100 rounded w-2/3 mb-2" />
                <div className="h-3 bg-gray-100 rounded w-full mb-2" />
                <div className="h-4 bg-gray-100 rounded w-1/2" />
              </div>
            ))}

          {!loading &&
            items.map((item) => {
              const brandName = item.brand?.name || '—';
              const code = productCode(item);
              return (
                <Link
                  key={item.product_id}
                  to={`/products/${item.product_id}`}
                  className="cursor-pointer group block text-left"
                >
                  <div className="aspect-square bg-gray-50 rounded-[16px] mb-3 flex items-center justify-center p-4 group-hover:bg-gray-100 transition-colors overflow-hidden">
                    <ProductThumb src={resolveApiMediaUrl(item.image)} title={item.title} />
                  </div>
                  <div className="flex justify-between items-start mb-1 gap-1">
                    <span className="text-[12px] font-bold text-gray-400 truncate">{brandName}</span>
                    {code ? (
                      <span className="text-[10px] font-bold text-gray-300 tracking-wider uppercase shrink-0">
                        {code}
                      </span>
                    ) : null}
                  </div>
                  <h4 className="text-[13px] font-bold text-[#111827] line-clamp-2 mb-1 min-h-[2.5rem]">
                    {item.title}
                  </h4>
                  <p className="text-[14px] font-black text-[#111827]">{formatProductPrice(item)}</p>
                </Link>
              );
            })}

          {!loading && !items.length && !error && (
            <p className="col-span-full text-center text-[#6b7280] py-12">
              No products found for this search.
            </p>
          )}
        </div>

        <div className="text-center pb-12">
          <Link
            to="/"
            className="text-[#f47a4d] text-base font-black hover:underline underline-offset-8"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
