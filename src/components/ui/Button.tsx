import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
  disabled?: boolean
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  external?: boolean
  type?: undefined
  onClick?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-bg border border-accent hover:bg-accent-2 hover:border-accent-2 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
  ghost:
    'bg-transparent text-copy border border-edge hover:border-copy-2 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
  outline:
    'bg-transparent text-accent border border-accent hover:bg-accent-dim focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, disabled } = props

  const classes = cn(
    'inline-flex items-center justify-center gap-2',
    'font-medium tracking-wide transition-colors duration-150',
    'disabled:opacity-40 disabled:cursor-not-allowed',
    'focus-visible:outline-none',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (props.href !== undefined) {
    const { href, external } = props
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={classes}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
