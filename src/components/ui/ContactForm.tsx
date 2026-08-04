'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { submitContactEnquiry } from '@/app/actions/contact'
import { trackEvent, AnalyticsEvent } from '@/lib/analytics'
import { cn } from '@/lib/utils'

const enquiryTypes = ['product-testing', 'brand-partnership', 'event', 'content', 'other'] as const

const schema = z.object({
  name:        z.string().min(2, 'Please enter your name.'),
  email:       z.string().email('Please enter a valid email address.'),
  company:     z.string().optional(),
  enquiryType: z.enum(enquiryTypes, 'Please select an enquiry type.'),
  message:     z.string().min(20, 'Please provide more detail about your enquiry.'),
  website:     z.string().max(0).optional(), // honeypot
})

type FormData = z.infer<typeof schema>

const inputClass = cn(
  'w-full bg-surface-2 border border-edge text-copy text-sm px-4 py-3',
  'placeholder:text-copy-3 transition-colors duration-150',
  'hover:border-copy-3 focus:outline-none focus:border-accent'
)
const labelClass = 'block text-xs font-medium tracking-wide text-copy-2 mb-2'
const errorClass = 'flex items-start gap-1.5 text-xs text-danger mt-1.5'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormData) {
    setStatus('loading')
    setServerError('')
    try {
      const result = await submitContactEnquiry(data)
      if (result.success) {
        setStatus('success')
        trackEvent(AnalyticsEvent.PARTNERSHIP_ENQUIRY)
        reset()
      } else {
        setStatus('error')
        setServerError(result.error ?? 'Submission failed. Please try again.')
      }
    } catch {
      setStatus('error')
      setServerError('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-edge p-8 text-center space-y-4">
        <CheckCircle size={32} className="text-ok mx-auto" aria-hidden="true" />
        <h3 className="text-base font-semibold text-copy">Message received.</h3>
        <p className="text-copy-2 text-sm">I&apos;ll be in touch if the collaboration looks like a fit.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot */}
      <div aria-hidden="true" className="hidden" tabIndex={-1}>
        <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <input id="contact-name" type="text" autoComplete="name" placeholder="Your name"
            className={cn(inputClass, errors.name && 'border-danger')}
            {...register('name')}
          />
          {errors.name && (
            <p role="alert" className={errorClass}><AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <input id="contact-email" type="email" autoComplete="email" placeholder="you@brand.com"
            className={cn(inputClass, errors.email && 'border-danger')}
            {...register('email')}
          />
          {errors.email && (
            <p role="alert" className={errorClass}><AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Brand or company <span className="text-copy-3">(optional)</span>
          </label>
          <input id="contact-company" type="text" placeholder="Brand GmbH"
            className={inputClass}
            {...register('company')}
          />
        </div>

        <div>
          <label htmlFor="contact-type" className={labelClass}>
            Enquiry type <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <select id="contact-type"
            className={cn(inputClass, 'cursor-pointer appearance-none', errors.enquiryType && 'border-danger')}
            {...register('enquiryType')}
          >
            <option value="">Select…</option>
            <option value="product-testing">Product testing</option>
            <option value="brand-partnership">Brand partnership</option>
            <option value="event">Event or appearance</option>
            <option value="content">Content collaboration</option>
            <option value="other">Other</option>
          </select>
          {errors.enquiryType && (
            <p role="alert" className={errorClass}><AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.enquiryType.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message <span className="text-danger" aria-hidden="true">*</span>
        </label>
        <textarea id="contact-message" rows={5}
          placeholder="Describe your idea, product, or what you'd like to discuss."
          className={cn(inputClass, 'resize-none', errors.message && 'border-danger')}
          {...register('message')}
        />
        {errors.message && (
          <p role="alert" className={errorClass}><AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.message.message}</p>
        )}
      </div>

      {status === 'error' && serverError && (
        <div role="alert" className="flex items-start gap-2 p-4 border border-danger-dim bg-danger-dim text-danger text-sm">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {serverError}
        </div>
      )}

      <Button type="submit" variant="primary" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <><Loader2 size={15} className="animate-spin" aria-hidden="true" /> Sending…</>
        ) : (
          'Send message'
        )}
      </Button>
    </form>
  )
}
