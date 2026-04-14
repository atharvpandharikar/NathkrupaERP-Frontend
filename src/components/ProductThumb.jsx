import React, { useState } from 'react';

export default function ProductThumb({ src, title }) {
  const [broken, setBroken] = useState(!src);
  return (
    <div className="relative w-full h-full min-h-[120px] flex items-center justify-center">
      {!broken && src ? (
        <img
          src={src}
          alt={title || 'Product'}
          className="w-full h-full object-contain max-h-[200px]"
          loading="lazy"
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="w-full max-w-[160px] aspect-square rounded-full border-[6px] border-white bg-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
          <div className="w-full h-full border-4 border-gray-300 rounded-full flex items-center justify-center">
            <div className="w-1/2 h-1/2 rounded-full border-2 border-gray-400" />
          </div>
        </div>
      )}
    </div>
  );
}
