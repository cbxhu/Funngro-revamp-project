import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
  fallbackSubtitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#13233A] via-[#0F1E33] to-[#0B192C] p-8 text-center border border-white/10 ${className}`}
      >
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#22C55E]/15 text-[#22C55E]">
          <ImageOff className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="text-sm font-semibold text-white">{fallbackTitle}</p>
        {fallbackSubtitle && (
          <p className="mt-1 max-w-xs text-xs text-slate-400">{fallbackSubtitle}</p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
