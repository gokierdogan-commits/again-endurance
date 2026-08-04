import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatExternalUrl(url: string): string {
  if (!url || url === 'https://example.com') return '#'
  return url
}

export function isValidAffiliateUrl(url: string): boolean {
  return url.startsWith('http') && url !== 'https://example.com'
}
