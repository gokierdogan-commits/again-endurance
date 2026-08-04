'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { submitCoachingApplication } from '@/app/actions/coaching'
import { trackEvent, AnalyticsEvent } from '@/lib/analytics'
import { cn } from '@/lib/utils'

const fitnessLevels = ['just-starting', 'returning', 'occasionally-active', 'regularly-active'] as const
const runningExperience = ['yes', 'no', 'a-little'] as const

const schema = z.object({
  name:             z.string().min(2, 'Please enter your full name.'),
  email:            z.string().email('Please enter a valid email address.'),
  country:          z.string().min(1, 'Please enter your country.'),
  fitnessLevel:     z.enum(fitnessLevels, 'Please select your current fitness level.'),
  hasRunBefore:     z.enum(runningExperience, 'Please let us know if you have run before.'),
  biggestChallenge: z.string().min(10, 'Please describe your biggest challenge.'),
  goal:             z.string().min(10, 'Please describe your goal.'),
  whyWorkWithMe:    z.string().min(10, 'Please share why you want to work with me.'),
  consent:          z.boolean().refine((v) => v === true, 'You must agree to be contacted before submitting.'),
  website:          z.string().max(0).optional(), // honeypot
})

type FormData = z.infer<typeof schema>

const inputClass = cn(
  'w-full bg-surface-2 border border-edge text-copy text-sm px-4 py-3',
  'placeholder:text-copy-3 transition-colors duration-150',
  'hover:border-copy-3',
  'focus:outline-none focus:border-accent',
)

const labelClass = 'block text-xs font-medium tracking-wide text-copy-2 mb-2'
const errorClass = 'flex items-start gap-1.5 text-xs text-danger mt-1.5'

export function CoachingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState<string>('')
  const successRef = useRef<HTMLDivElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  // On mobile the success message renders much shorter than the form it
  // replaces, so the scroll position can land past it — bring it into view.
  useEffect(() => {
    if (status === 'success') {
      successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [status])

  async function onSubmit(data: FormData) {
    setStatus('loading')
    setServerError('')

    try {
      const result = await submitCoachingApplication(data)
      if (result.success) {
        setStatus('success')
        trackEvent(AnalyticsEvent.COACHING_FORM_SUBMIT)
        reset()
      } else {
        setStatus('error')
        setServerError(result.error ?? 'Submission failed. Please try again.')
      }
    } catch {
      setStatus('error')
      setServerError('Something went wrong. Please try again or contact us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div ref={successRef} className="border border-edge p-8 text-center space-y-4">
        <CheckCircle size={32} className="text-ok mx-auto" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-copy">Application received.</h3>
        <p className="text-copy-2 text-sm leading-relaxed max-w-sm mx-auto">
          I&apos;ll review your situation and contact you if it looks like a good fit.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users, catches bots */}
      <div aria-hidden="true" className="hidden" tabIndex={-1}>
        <label htmlFor="website">Leave this empty</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <input id="name" type="text" autoComplete="name" placeholder="Gökhan Erdogan"
            className={cn(inputClass, errors.name && 'border-danger')}
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" role="alert" className={errorClass}>
              <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <input id="email" type="email" autoComplete="email" placeholder="you@example.com"
            className={cn(inputClass, errors.email && 'border-danger')}
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" role="alert" className={errorClass}>
              <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="country" className={labelClass}>
            Country <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <input id="country" type="text" autoComplete="country-name" placeholder="Switzerland"
            className={cn(inputClass, errors.country && 'border-danger')}
            aria-required="true"
            aria-describedby={errors.country ? 'country-error' : undefined}
            {...register('country')}
          />
          {errors.country && (
            <p id="country-error" role="alert" className={errorClass}>
              <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.country.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="fitnessLevel" className={labelClass}>
            Current fitness level <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <select
            id="fitnessLevel"
            className={cn(inputClass, 'cursor-pointer appearance-none', errors.fitnessLevel && 'border-danger')}
            aria-required="true"
            aria-describedby={errors.fitnessLevel ? 'fitness-error' : undefined}
            defaultValue=""
            {...register('fitnessLevel')}
          >
            <option value="" disabled>Select…</option>
            <option value="just-starting">Just starting out</option>
            <option value="returning">Returning after a break</option>
            <option value="occasionally-active">Occasionally active</option>
            <option value="regularly-active">Regularly active, but inconsistent</option>
          </select>
          {errors.fitnessLevel && (
            <p id="fitness-error" role="alert" className={errorClass}>
              <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.fitnessLevel.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="hasRunBefore" className={labelClass}>
          Have you run before? <span className="text-danger" aria-hidden="true">*</span>
        </label>
        <select
          id="hasRunBefore"
          className={cn(inputClass, 'cursor-pointer appearance-none', errors.hasRunBefore && 'border-danger')}
          aria-required="true"
          aria-describedby={errors.hasRunBefore ? 'run-error' : undefined}
          defaultValue=""
          {...register('hasRunBefore')}
        >
          <option value="" disabled>Select…</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="a-little">A little</option>
        </select>
        {errors.hasRunBefore && (
          <p id="run-error" role="alert" className={errorClass}>
            <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.hasRunBefore.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="biggestChallenge" className={labelClass}>
          Your biggest challenge <span className="text-danger" aria-hidden="true">*</span>
        </label>
        <textarea
          id="biggestChallenge"
          rows={3}
          placeholder="e.g. I can't maintain consistency. I start strong but drop off within a few weeks."
          className={cn(inputClass, 'resize-none', errors.biggestChallenge && 'border-danger')}
          aria-required="true"
          aria-describedby={errors.biggestChallenge ? 'challenge-error' : undefined}
          {...register('biggestChallenge')}
        />
        {errors.biggestChallenge && (
          <p id="challenge-error" role="alert" className={errorClass}>
            <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.biggestChallenge.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="goal" className={labelClass}>
          Your goal <span className="text-danger" aria-hidden="true">*</span>
        </label>
        <textarea
          id="goal"
          rows={3}
          placeholder="e.g. Run 5 km without stopping. Build a habit I can actually keep."
          className={cn(inputClass, 'resize-none', errors.goal && 'border-danger')}
          aria-required="true"
          aria-describedby={errors.goal ? 'goal-error' : undefined}
          {...register('goal')}
        />
        {errors.goal && (
          <p id="goal-error" role="alert" className={errorClass}>
            <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.goal.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="whyWorkWithMe" className={labelClass}>
          Why do you want to work with me? <span className="text-danger" aria-hidden="true">*</span>
        </label>
        <textarea
          id="whyWorkWithMe"
          rows={3}
          placeholder="Whatever made you consider applying."
          className={cn(inputClass, 'resize-none', errors.whyWorkWithMe && 'border-danger')}
          aria-required="true"
          aria-describedby={errors.whyWorkWithMe ? 'why-error' : undefined}
          {...register('whyWorkWithMe')}
        />
        {errors.whyWorkWithMe && (
          <p id="why-error" role="alert" className={errorClass}>
            <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.whyWorkWithMe.message}
          </p>
        )}
      </div>

      {/* Consent */}
      <div className="space-y-4">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            className={cn(
              'mt-0.5 w-4 h-4 shrink-0 border border-edge bg-surface-2',
              'accent-accent cursor-pointer',
              errors.consent && 'border-danger'
            )}
            aria-required="true"
            aria-describedby={errors.consent ? 'consent-error' : undefined}
            {...register('consent')}
          />
          <span className="text-sm text-copy-2 leading-relaxed">
            I agree to be contacted by Gökhan Erdogan regarding my application. I
            understand that submitting this form does not guarantee a spot.
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" role="alert" className={errorClass}>
            <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.consent.message}
          </p>
        )}
      </div>

      {/* Server error */}
      {status === 'error' && serverError && (
        <div role="alert" className="flex items-start gap-2 p-4 border border-danger-dim bg-danger-dim text-danger text-sm">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {serverError}
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'loading'}
        className="w-full sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Submitting…
          </>
        ) : (
          'Apply'
        )}
      </Button>

      <p className="text-xs text-copy-3 leading-relaxed">
        Your data is used only to review your application and respond. See the{' '}
        <a href="/privacy" className="underline hover:text-copy-2 transition-colors">
          privacy policy
        </a>{' '}
        for details.
      </p>
    </form>
  )
}
