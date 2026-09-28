import { useRef, useState } from 'react'
import Toast from './Toast'

const ROLES = [
  "Social Media Manager",
  "Graphic Designer",
  "Content Writer",
  "Video Editor",
  "Business Development Executive",
  "SEO Analyst",
  "Performance Marketing Executive",
  "Other"
]

// Validation helper functions
const isValidEmail = (email) => {
  // Basic RFC 5322 compliant email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
const isValidPhone = (phone) => /^\d{10}$/.test(phone)
const isValidUrl = (url) => {
  try {
    // Basic structural validation using URL constructor
    const parsedUrl = new URL(url);

    // Check if protocol is http or https
    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      return false;
    }

    // Ensure there is a hostname (to prevent plain strings from passing if the environment allows them)
    if (!parsedUrl.hostname || !parsedUrl.hostname.includes('.')) {
      return false;
    }

    return true;
  } catch (err) {
    // Will throw if it's completely malformed (e.g. missing protocol like "my-portfolio.com")
    // To be user-friendly, let's try prefixing with https:// and check again
    try {
      const fixedUrl = new URL(`https://${url}`);
      return fixedUrl.hostname && fixedUrl.hostname.includes('.');
    } catch {
      return false;
    }
  }
}

const CareersForm = () => {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [toast, setToast] = useState({ open: false, message: '', variant: 'success' })
  const [fieldErrors, setFieldErrors] = useState({})
  const [selectedRole, setSelectedRole] = useState('')


  const sanitizePhoneInput = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10)
    e.target.value = digitsOnly
  }

  const validateFields = (form) => {
    const errors = {}

    // full name
    const fullName = form.full_name.value.trim()
    if (!fullName) errors.full_name = 'Full Name is required.'

    // email
    const email = form.email.value.trim()
    if (!isValidEmail(email)) errors.email = 'Please enter a valid email address.'

    // phone
    const phone = form.phone.value.trim()
    if (!isValidPhone(phone)) errors.phone = 'Enter a valid 10-digit phone number.'

    // portfolio
    const portfolio = form.portfolio.value.trim()
    if (!isValidUrl(portfolio)) errors.portfolio = 'Please enter a valid URL.'

    // role
    const role = form.role.value
    if (!role) {
      errors.role = 'Please select a role.'
    } else if (role === 'Other') {
      const otherRole = form.other_role.value.trim()
      if (!otherRole) errors.other_role = 'Please specify the role you are applying for.'
    }


    // resume
    const resume = form.resume.value.trim()
    if (!isValidUrl(resume)) errors.resume = 'Please enter a valid URL.'

    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formRef.current) return

    const errors = validateFields(formRef.current)
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) {
      setToast({ open: true, message: Object.values(errors)[0], variant: 'error' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    const fullName  = formRef.current.full_name.value.trim()
    const email     = formRef.current.email.value.trim()
    const phone     = formRef.current.phone.value.trim()
    const portfolio = formRef.current.portfolio.value.trim()
    const role      = formRef.current.role.value
    const actualRole = role === 'Other' ? formRef.current.other_role.value.trim() : role
    const resume    = formRef.current.resume.value.trim()
    const time      = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })

    const payload = { fullName, email, phone, portfolio, role: actualRole, resume, time }

    let resendSuccess = false
    let sheetSuccess  = false

    // 1. Send email via Resend (server-side API route)
    try {
      const res = await fetch('/api/send-careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        resendSuccess = true
      } else {
        const data = await res.json()
        console.error('Resend API error:', data.error)
      }
    } catch (err) {
      console.error('Failed to reach /api/send-careers:', err)
    }

    // 2. Try recording in Google Sheets (backup)
    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({ type: 'careers', ...payload }),
        })
        sheetSuccess = true
      }
    } catch (err) {
      console.error('Google Sheets Submission Error:', err)
    }

    // 3. Determine overall success
    if (resendSuccess || sheetSuccess) {
      setSubmitStatus('success')
      formRef.current.reset()
      setSelectedRole('')
      setToast({ open: true, message: 'Application submitted successfully!', variant: 'success' })
      setFieldErrors({})
    } else {
      setSubmitStatus('error')
      setToast({ open: true, message: 'Failed to submit application. Please try again.', variant: 'error' })
    }
    setIsSubmitting(false)
  }

  const getFieldErrorClass = (field) =>
    fieldErrors[field]
      ? 'border-red-500 focus:ring-red-400'
      : 'border-white/10 focus:ring-[#f7e839]/50'

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
      <label className="space-y-1 block w-full">
        <span className="text-xs text-white/80 tracking-wide">
          FULL NAME <span className="text-[#f7e839]">*</span>
        </span>
        <input
          name="full_name"
          type="text"
          placeholder="Enter your full name"
          className={`w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 ${getFieldErrorClass('full_name')}`}
          required
        />
        {fieldErrors.full_name && <span className="text-xs text-red-500">{fieldErrors.full_name}</span>}
      </label>
      <div className="grid md:grid-cols-2 gap-5">
        <label className="space-y-1 block w-full">
          <span className="text-xs text-white/80 tracking-wide">
            EMAIL ADDRESS <span className="text-[#f7e839]">*</span>
          </span>
          <input
            name="email"
            type="email"
            placeholder="you@email.com"
            className={`w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 ${getFieldErrorClass('email')}`}
            required
            autoComplete="email"
          />
          {fieldErrors.email && <span className="text-xs text-red-500">{fieldErrors.email}</span>}
        </label>
        <label className="space-y-1 block w-full">
          <span className="text-xs text-white/80 tracking-wide">
            PHONE NUMBER <span className="text-[#f7e839]">*</span>
          </span>
          <input
            name="phone"
            type="tel"
            placeholder="9876543210"
            className={`w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 ${getFieldErrorClass('phone')}`}
            inputMode="numeric"
            autoComplete="tel"
            pattern="\d{10}"
            maxLength={10}
            onInput={sanitizePhoneInput}
            title="Please enter a valid 10-digit phone number"
            required
          />
          {fieldErrors.phone && <span className="text-xs text-red-500">{fieldErrors.phone}</span>}
        </label>
      </div>
      <label className="space-y-1 block w-full">
        <span className="text-xs text-white/80 tracking-wide">
          PORTFOLIO LINK <span className="text-[#f7e839]">*</span>
        </span>
        <input
          name="portfolio"
          type="url"
          placeholder="https://your-portfolio.com"
          className={`w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 ${getFieldErrorClass('portfolio')}`}
          required
        />
        {fieldErrors.portfolio && <span className="text-xs text-red-500">{fieldErrors.portfolio}</span>}
      </label>
      <label className="space-y-1 block w-full">
        <span className="text-xs text-white/80 tracking-wide">
          ROLE APPLYING FOR <span className="text-[#f7e839]">*</span>
        </span>
        <select
          name="role"
          className={`w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 dark-select ${getFieldErrorClass('role')}`}
          required
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="" disabled className="bg-[#1a1f26] text-white">
            Select a role
          </option>
          {ROLES.map((role) => (
            <option key={role} value={role} className="bg-[#1a1f26] text-white">
              {role}
            </option>
          ))}
        </select>
        {fieldErrors.role && <span className="text-xs text-red-500">{fieldErrors.role}</span>}
      </label>

      {selectedRole === 'Other' && (
        <label className="space-y-1 block w-full animate-fadeIn">
          <span className="text-xs text-white/80 tracking-wide">
            PLEASE SPECIFY ROLE <span className="text-[#f7e839]">*</span>
          </span>
          <input
            name="other_role"
            type="text"
            placeholder="e.g. Marketing Manager"
            className={`w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 ${getFieldErrorClass('other_role')}`}
            required
          />
          {fieldErrors.other_role && <span className="text-xs text-red-500">{fieldErrors.other_role}</span>}
        </label>
      )}

      <label className="space-y-1 block w-full">
        <span className="text-xs text-white/80 tracking-wide">
          RESUME LINK (Google Drive/Dropbox) <span className="text-[#f7e839]">*</span>
        </span>
        <input
          name="resume"
          type="url"
          placeholder="https://drive.google.com/your-resume"
          className={`w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 ${getFieldErrorClass('resume')}`}
          required
        />
        {fieldErrors.resume && <span className="text-xs text-red-500">{fieldErrors.resume}</span>}
      </label>
      <Toast open={toast.open} onClose={() => setToast((t) => ({ ...t, open: false }))} message={toast.message} variant={toast.variant} className="mb-4" />
      
      <div className="pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center items-center px-8 py-3 rounded-lg bg-[#f7e839] text-[#11181f] text-sm font-bold hover:bg-[#f5d428] hover:shadow-[0_0_16px_rgba(247,232,57,0.35)] transition-all duration-200 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </button>
      </div>
    </form>
  )
}

export default CareersForm
