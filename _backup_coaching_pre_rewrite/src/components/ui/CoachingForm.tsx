'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { submitCoachingApplication } from '@/app/actions/coaching'
import { trackEvent, AnalyticsEvent } from '@/lib/analytics'
import { cn } from '@/lib/utils'

const trainingLevels = ['beginner', 'returning', 'intermediate', 'advanced'] as const
const coachingFormats = ['async', 'live', 'mixed', 'unsure'] as const
const howFoundOptions = ['instagram', 'youtube', 'strava', 'tiktok', 'friend', 'search', 'other'] as const

const timezones = [
  'UTC-12:00', 'UTC-11:00', 'UTC-10:00 (Hawaii)', 'UTC-09:00 (Alaska)',
  'UTC-08:00 (Pacific US/Canada)', 'UTC-07:00 (Mountain US/Canada)',
  'UTC-06:00 (Central US/Canada)', 'UTC-05:00 (Eastern US/Canada)',
  'UTC-04:00 (Atlantic)', 'UTC-03:00 (Brazil, Argentina)', 'UTC-02:00',
  'UTC-01:00', 'UTC+00:00 (UK, Ireland, Portugal)',
  'UTC+01:00 (Central Europe: Switzerland, Germany, France)',
  'UTC+02:00 (Eastern Europe, South Africa)',
  'UTC+03:00 (Moscow, East Africa)', 'UTC+03:30 (Iran)',
  'UTC+04:00 (Gulf)', 'UTC+04:30 (Afghanistan)', 'UTC+05:00 (Pakistan)',
  'UTC+05:30 (India, Sri Lanka)', 'UTC+05:45 (Nepal)',
  'UTC+06:00 (Bangladesh)', 'UTC+07:00 (Thailand, Vietnam)',
  'UTC+08:00 (China, Singapore, Western Australia)',
  'UTC+09:00 (Japan, Korea)', 'UTC+09:30 (Central Australia)',
  'UTC+10:00 (Eastern Australia)', 'UTC+12:00 (New Zealand)',
] as const

const schema = z.object({
  name:             z.string().min(2, 'Please enter your full name.'),
  email:            z.string().email('Please enter a valid email address.'),
  instagram:        z.string().optional(),
  country:          z.enum(timezones, 'Please select your timezone.'),
  trainingLevel:    z.enum(trainingLevels, 'Please select your training level.'),
  weeklyVolume:     z.string().min(5, 'Please describe your current weekly activity.'),
  mainGoal:         z.string().min(10, 'Please describe your main goal in a bit more detail.'),
  targetEvent:      z.string().optional(),
  biggestChallenge: z.string().min(10, 'Please describe your biggest challenge.'),
  coachingFormat:   z.enum(coachingFormats, 'Please select a coaching format.'),
  howFound:         z.enum(howFoundOptions, 'Please let us know how you found this.'),
  message:          z.string().optional(),
  consent:          z.boolean().refine((v) => v === true, 'You must agree to be contacted before submitting.'),
  website:          z.string().max(0).optional(),
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

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
      <div className="border border-edge p-8 text-center space-y-4">
        <CheckCircle size={32} className="text-ok mx-auto" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-copy">Application received.</h3>
        <p className="text-copy-2 text-sm leading-relaxed max-w-sm mx-auto">
          I&apos;ll review your situation and contact you if the coaching format looks suitable.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      {/* Honeypot — hidden from real users, catches bots */}
      <div aria-hidden="true" className="hidden" tabIndex={-1}>
        <label htmlFor="website">Leave this empty</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      {/* ── Section 1: About you ──────────────────────── */}
      <fieldset className="space-y-5">
        <legend className="text-xs tracking-widest uppercase text-copy-3 font-medium pb-4 border-b border-edge w-full">
          About you
        </legend>

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
            <label htmlFor="instagram" className={labelClass}>
              Instagram username <span className="text-copy-3">(optional)</span>
            </label>
            <input id="instagram" type="text" placeholder="@username"
              className={inputClass}
              {...register('instagram')}
            />
          </div>

          <div>
            <label htmlFor="country" className={labelClass}>
              Country or timezone <span className="text-danger" aria-hidden="true">*</span>
            </label>
            <select
              id="country"
              className={cn(inputClass, 'cursor-pointer appearance-none', errors.country && 'border-danger')}
              aria-required="true"
              aria-describedby={errors.country ? 'country-error' : undefined}
              defaultValue=""
              {...register('country')}
            >
              <option value="" disabled>Select your timezone…</option>
              {timezones.map((tz) => (
                <option key={tz} value={tz}>{tz}</option>
              ))}
            </select>
            {errors.country && (
              <p id="country-error" role="alert" className={errorClass}>
                <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.country.message}
              </p>
            )}
          </div>
        </div>
      </fieldset>

      {/* ── Section 2: Your training ──────────────────── */}
      <fieldset className="space-y-5">
        <legend className="text-xs tracking-widest uppercase text-copy-3 font-medium pb-4 border-b border-edge w-full">
          Your training
        </legend>

        <div>
          <label htmlFor="trainingLevel" className={labelClass}>
            Current training level <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <select
            id="trainingLevel"
            className={cn(inputClass, 'cursor-pointer appearance-none', errors.trainingLevel && 'border-danger')}
            aria-required="true"
            aria-describedby={errors.trainingLevel ? 'level-error' : undefined}
            {...register('trainingLevel')}
          >
            <option value="">Select level…</option>
            <option value="beginner">Beginner: little or no structured running</option>
            <option value="returning">Returning: resuming after a break or injury</option>
            <option value="intermediate">Intermediate: running regularly, looking to progress</option>
            <option value="advanced">Advanced: high volume, targeting competitive times</option>
          </select>
          {errors.trainingLevel && (
            <p id="level-error" role="alert" className={errorClass}>
              <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.trainingLevel.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="weeklyVolume" className={labelClass}>
            Current weekly activity <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <textarea
            id="weeklyVolume"
            rows={3}
            placeholder="e.g. 2–3 runs per week, approximately 20 km total. Also gym twice a week."
            className={cn(inputClass, 'resize-none', errors.weeklyVolume && 'border-danger')}
            aria-required="true"
            aria-describedby={errors.weeklyVolume ? 'volume-error' : undefined}
            {...register('weeklyVolume')}
          />
          {errors.weeklyVolume && (
            <p id="volume-error" role="alert" className={errorClass}>
              <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.weeklyVolume.message}
            </p>
          )}
        </div>
      </fieldset>

      {/* ── Section 3: Your goals ─────────────────────── */}
      <fieldset className="space-y-5">
        <legend className="text-xs tracking-widest uppercase text-copy-3 font-medium pb-4 border-b border-edge w-full">
          Your goals
        </legend>

        <div>
          <label htmlFor="mainGoal" className={labelClass}>
            Main goal <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <textarea
            id="mainGoal"
            rows={3}
            placeholder="e.g. Run a sub-4 hour marathon in 12 months. Currently unable to run more than 5 km comfortably."
            className={cn(inputClass, 'resize-none', errors.mainGoal && 'border-danger')}
            aria-required="true"
            aria-describedby={errors.mainGoal ? 'goal-error' : undefined}
            {...register('mainGoal')}
          />
          {errors.mainGoal && (
            <p id="goal-error" role="alert" className={errorClass}>
              <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.mainGoal.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="targetEvent" className={labelClass}>
            Target event and date <span className="text-copy-3">(optional)</span>
          </label>
          <input
            id="targetEvent"
            type="text"
            placeholder="e.g. Vienna City Marathon, April 2026"
            className={inputClass}
            {...register('targetEvent')}
          />
        </div>

        <div>
          <label htmlFor="biggestChallenge" className={labelClass}>
            Biggest current challenge <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <textarea
            id="biggestChallenge"
            rows={3}
            placeholder="e.g. I can't maintain consistency. I start strong but drop training within a few weeks."
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
      </fieldset>

      {/* ── Section 4: Preferences ────────────────────── */}
      <fieldset className="space-y-5">
        <legend className="text-xs tracking-widest uppercase text-copy-3 font-medium pb-4 border-b border-edge w-full">
          Preferences
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="coachingFormat" className={labelClass}>
              Preferred coaching format <span className="text-danger" aria-hidden="true">*</span>
            </label>
            <select
              id="coachingFormat"
              className={cn(inputClass, 'cursor-pointer appearance-none', errors.coachingFormat && 'border-danger')}
              aria-required="true"
              {...register('coachingFormat')}
            >
              <option value="">Select format…</option>
              <option value="async">Async: plans and feedback by message</option>
              <option value="live">Live: regular video check-ins</option>
              <option value="mixed">Mixed: combination of both</option>
              <option value="unsure">Not sure yet</option>
            </select>
            {errors.coachingFormat && (
              <p role="alert" className={errorClass}>
                <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.coachingFormat.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="howFound" className={labelClass}>
              How did you find this? <span className="text-danger" aria-hidden="true">*</span>
            </label>
            <select
              id="howFound"
              className={cn(inputClass, 'cursor-pointer appearance-none', errors.howFound && 'border-danger')}
              aria-required="true"
              {...register('howFound')}
            >
              <option value="">Select…</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">YouTube</option>
              <option value="strava">Strava</option>
              <option value="tiktok">TikTok</option>
              <option value="friend">Friend or recommendation</option>
              <option value="search">Search engine</option>
              <option value="other">Other</option>
            </select>
            {errors.howFound && (
              <p role="alert" className={errorClass}>
                <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.howFound.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Anything else <span className="text-copy-3">(optional)</span>
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Any context that might be relevant: injury history, schedule constraints, previous coaching experience, etc."
            className={cn(inputClass, 'resize-none')}
            {...register('message')}
          />
        </div>
      </fieldset>

      {/* ── Consent ───────────────────────────────────── */}
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
            I agree to be contacted by Gökhan Erdogan regarding my coaching application. I
            understand that submitting this form does not guarantee a coaching offer.
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" role="alert" className={errorClass}>
            <AlertCircle size={13} className="mt-0.5 shrink-0" /> {errors.consent.message}
          </p>
        )}
      </div>

      {/* ── Server error ──────────────────────────────── */}
      {status === 'error' && serverError && (
        <div role="alert" className="flex items-start gap-2 p-4 border border-danger-dim bg-danger-dim text-danger text-sm">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {serverError}
        </div>
      )}

      {/* ── Submit ────────────────────────────────────── */}
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
          'Submit application'
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
