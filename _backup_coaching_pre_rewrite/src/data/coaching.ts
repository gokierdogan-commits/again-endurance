import type { CoachingArea, CoachingFormat } from '@/types'

export const coachingAreas: CoachingArea[] = [
  { id: 'consistency',    text: 'Building consistency from zero, or from scratch again' },
  { id: 'return',         text: 'Returning after injury or a long break' },
  { id: 'first-marathon', text: 'Preparing for a first half marathon or marathon' },
  { id: 'volume',         text: 'Increasing weekly volume without breaking down' },
  { id: 'enjoyment',      text: 'Learning to enjoy running, not just endure it' },
  { id: 'challenge',      text: 'Staying accountable long after motivation fades' },
]

export const coachingFormats: CoachingFormat[] = [
  {
    id: 'async',
    name: 'Async coaching',
    description:
      'Weekly plans and feedback by message. No scheduled calls. Built for people with unpredictable schedules.',
  },
  {
    id: 'live',
    name: 'Live coaching',
    description:
      'Video check-ins for planning and adjustments. I\'ll also join your long runs when it helps, pacing you through them in person.',
  },
  {
    id: 'mixed',
    name: 'Mixed',
    description:
      'A mix of async check-ins and live sessions, adjusted to what you actually need.',
  },
]

export const coachingDisclaimer =
  'Coaching is a personal training service. It is not medical advice, physiotherapy, injury rehabilitation, or a substitute for professional medical treatment. If you have an existing injury or a health condition that may affect your training, consult a qualified medical professional before applying.'

export const coachingNotFor = [
  'Acute injuries that need medical treatment first',
  'Guaranteed race times or performance outcomes',
  'A fully automated app with no personal input',
]
