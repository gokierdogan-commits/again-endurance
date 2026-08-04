'use server'

interface ContactFormData {
  name: string
  email: string
  company?: string
  enquiryType: string
  message: string
  website?: string
}

export async function submitContactEnquiry(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  if (data.website) return { success: true }

  const formspreeId = process.env.FORMSPREE_CONTACT_ID

  if (!formspreeId) {
    console.log('[DEV] Contact enquiry received:', {
      name: data.name,
      email: data.email,
      enquiryType: data.enquiryType,
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
      body: JSON.stringify({ ...data, website: undefined }),
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
