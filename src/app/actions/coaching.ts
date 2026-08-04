'use server'

interface CoachingFormData {
  name: string
  email: string
  country: string
  fitnessLevel: string
  hasRunBefore: string
  biggestChallenge: string
  goal: string
  whyWorkWithMe: string
  consent: boolean
  website?: string
}

export async function submitCoachingApplication(
  data: CoachingFormData
): Promise<{ success: boolean; error?: string }> {
  // Silent honeypot reject
  if (data.website) return { success: true }

  const formspreeId = process.env.FORMSPREE_COACHING_ID

  if (!formspreeId) {
    // Development mode — log to console, return success
    console.log('[DEV] Coaching application received:', {
      name: data.name,
      email: data.email,
      fitnessLevel: data.fitnessLevel,
      goal: data.goal,
    })
    return { success: true }
  }

  try {
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...data,
        website: undefined, // never forward honeypot
      }),
    })

    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      const msg = (body as { error?: string }).error ?? 'Submission failed.'
      return { success: false, error: msg }
    }

    return { success: true }
  } catch {
    return { success: false, error: 'Network error. Please try again.' }
  }
}
