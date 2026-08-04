import { Camera } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PlaceholderImageProps {
  label?: string
  /** Tailwind aspect ratio class, e.g. 'aspect-[3/4]' */
  aspectRatio?: string
  className?: string
}

export function PlaceholderImage({
  label = 'Add image',
  aspectRatio = 'aspect-[3/4]',
  className,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-surface border border-edge',
        aspectRatio,
        className
      )}
      aria-hidden="true"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--color-edge) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Corner crop marks */}
      <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-edge" />
      <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-edge" />
      <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-edge" />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-edge" />
      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
        <Camera
          size={20}
          strokeWidth={1.25}
          className="text-copy-3"
          aria-hidden="true"
        />
        <span className="text-[10px] font-medium tracking-widest uppercase text-copy-3">
          {label}
        </span>
      </div>
    </div>
  )
}
