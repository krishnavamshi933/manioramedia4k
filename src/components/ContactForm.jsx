import { useRef, useState } from "react";
import Toast from "./Toast";
import { servicesData } from "../constants/servicesData";

// Validation helpers
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone) => /^\d{10}$/.test(phone);
const isValidUrl = (url) => {
  try {
    const tlds = [
      ".com", ".in", ".net", ".org", ".co", ".io", ".me", ".site", ".app", ".ai", ".dev",
      ".info", ".biz", ".xyz", ".us", ".ca", ".uk", ".au", ".gov", ".edu"
    ];
    let u = new URL(url);
    return tlds.some((tld) => u.hostname.endsWith(tld));
  } catch {
    return false;
  }
};

// ─── Environment Variables ───────────────────────────────────────────────────
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
// ─────────────────────────────────────────────────────────────────────────────

const ContactForm = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [toast, setToast] = useState({ open: false, message: "", variant: "success" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [selectedSubServiceTitle, setSelectedSubServiceTitle] = useState("");

  const sanitizePhoneInput = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    e.target.value = digitsOnly;
  };

  const validateFields = (form) => {
    const errors = {};

    // user_name
    const name = form.user_name.value.trim();
    if (!name) errors.user_name = "Your Name is required.";

    // user_email
    const email = form.user_email.value.trim();
    if (!isValidEmail(email)) errors.user_email = "Please enter a valid email address.";

    // user_phone
    const phone = form.user_phone.value.trim();
    if (!isValidPhone(phone)) errors.user_phone = "Enter a valid 10-digit phone number.";

    // user_location
    const location = form.user_location.value.trim();
    if (!location) errors.user_location = "Location is required.";

    // user_website (optional)
    const website = form.user_website.value.trim();
    if (website && !isValidUrl(website)) {
      errors.user_website = "Please enter a valid website URL.";
    }


    // service
    const service = form.service.value;
    if (!service) errors.service = "Please select a service.";

    // sub-service and detailed_service are now entirely optional

    // message
    const message = form.message.value.trim();
    if (!message) errors.message = "Message is required.";

    return errors;
  };

  const getFieldErrorClass = (field) =>
    fieldErrors[field]
      ? "border-red-500 focus:ring-red-400"
      : "border-white/20 focus:ring-[#f7e839]/50";

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    const errors = validateFields(formRef.current);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setToast({ open: true, message: Object.values(errors)[0], variant: "error" });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const name     = formRef.current.user_name.value.trim();
    const email    = formRef.current.user_email.value.trim();
    const phone    = formRef.current.user_phone.value.trim();
    const location = formRef.current.user_location.value.trim();
    const website  = formRef.current.user_website ? formRef.current.user_website.value.trim() : "";
    const service  = formRef.current.service.value;
    const subService = formRef.current.sub_service ? formRef.current.sub_service.value : "";
    const message  = formRef.current.message.value.trim();
    const time     = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });

    const payload = { name, email, phone, location, website, service, subService, message, time };

    let resendSuccess = false;
    let sheetSuccess  = false;

    // 1. Send email via Resend (server-side API route)
    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        resendSuccess = true;
      } else {
        const data = await res.json();
        console.error("Resend API error:", data.error);
      }
    } catch (err) {
      console.error("Failed to reach /api/send-contact:", err);
    }

    // 2. Try recording in Google Sheets (backup)
    try {
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ type: "contact", ...payload }),
        });
        sheetSuccess = true;
      }
    } catch (err) {
      console.error("Google Sheets Submission Error:", err);
    }

    // 3. Determine overall success
    if (resendSuccess || sheetSuccess) {
      setSubmitStatus("success");
      formRef.current.reset();
      setSelectedServiceId("");
      setSelectedSubServiceTitle("");
      setToast({ open: true, message: "Message sent successfully!", variant: "success" });
      setFieldErrors({});
    } else {
      setSubmitStatus("error");
      setToast({ open: true, message: "Failed to send message. Please try again.", variant: "error" });
    }
    setIsSubmitting(false);
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto bg-[#1a1f26] p-8 rounded-2xl shadow-lg border border-white/10"
      id="contact-form"
      noValidate
    >
      <h2 className="md:col-span-2 text-2xl font-semibold text-white mb-4 text-center">
        Get in Touch
      </h2>



      {/* Name */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/70">Your Name *</label>
        <input
          type="text"
          name="user_name"
          placeholder="John Doe"
          className={`p-3 rounded-lg bg-white/10 text-white border placeholder-white/50 focus:outline-none focus:ring-2 transition ${getFieldErrorClass("user_name")}`}
          required
        />
        {fieldErrors.user_name && <span className="text-xs text-red-500">{fieldErrors.user_name}</span>}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/70">Email Address *</label>
        <input
          type="email"
          name="user_email"
          placeholder="your@email.com"
          className={`p-3 rounded-lg bg-white/10 text-white border placeholder-white/50 focus:outline-none focus:ring-2 transition ${getFieldErrorClass("user_email")}`}
          required
        />
        {fieldErrors.user_email && <span className="text-xs text-red-500">{fieldErrors.user_email}</span>}
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/70">Phone Number *</label>
        <input
          type="tel"
          name="user_phone"
          placeholder="9876543210"
          className={`p-3 rounded-lg bg-white/10 text-white border placeholder-white/50 focus:outline-none focus:ring-2 transition ${getFieldErrorClass("user_phone")}`}
          inputMode="numeric"
          autoComplete="tel"
          pattern="\d{10}"
          maxLength={10}
          onInput={sanitizePhoneInput}
          title="Please enter a valid 10-digit phone number"
          required
        />
        {fieldErrors.user_phone && <span className="text-xs text-red-500">{fieldErrors.user_phone}</span>}
      </div>

      {/* Location */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/70">Location *</label>
        <input
          type="text"
          name="user_location"
          placeholder="Hyderabad, Telangana"
          className={`p-3 rounded-lg bg-white/10 text-white border placeholder-white/50 focus:outline-none focus:ring-2 transition ${getFieldErrorClass("user_location")}`}
          required
        />
        {fieldErrors.user_location && <span className="text-xs text-red-500">{fieldErrors.user_location}</span>}
      </div>

      {/* Website Link */}
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="text-sm text-white/70">Website Link </label>
        <input
          type="url"
          name="user_website"
          placeholder="https://yourwebsite.com"
          className={`p-3 rounded-lg bg-white/10 text-white border placeholder-white/50 focus:outline-none focus:ring-2 transition ${getFieldErrorClass("user_website")}`}
        />
        {fieldErrors.user_website && <span className="text-xs text-red-500">{fieldErrors.user_website}</span>}
      </div>

      {/* Service */}
      <div className={`flex flex-col gap-2 ${selectedServiceId && servicesData.find(s => s.id === selectedServiceId)?.subServices?.length > 0 ? '' : 'md:col-span-2'}`}>
        <label className="text-sm text-white/70">Service Interested *</label>
        <select
          name="service"
          required
          value={selectedServiceId}
          onChange={(e) => {
            setSelectedServiceId(e.target.value);
            setSelectedSubServiceTitle("");
            // Clear sub-service error when primary service changes
            setFieldErrors(prev => ({ ...prev, sub_service: undefined, detailed_service: undefined }));
          }}
          className={`p-3 rounded-lg bg-white/10 text-white border focus:outline-none focus:ring-2 transition ${getFieldErrorClass("service")}`}
        >
          <option value="" disabled className="bg-[#1a1f26] text-white">
            Select a service
          </option>
          {servicesData.map((s) => (
            <option key={s.id} value={s.id} className="bg-[#1a1f26] text-white">
              {s.t}
            </option>
          ))}
          <option value="other" className="bg-[#1a1f26] text-white">
            Other
          </option>
        </select>
        {fieldErrors.service && <span className="text-xs text-red-500">{fieldErrors.service}</span>}
      </div>

      {/* Sub-Service (Dynamic) */}
      {selectedServiceId && servicesData.find(s => s.id === selectedServiceId)?.subServices?.length > 0 && (
        <div className="flex flex-col gap-2">
          <label className="text-sm text-white/70">Specific Requirement </label>
          <select
            name="sub_service"
            value={selectedSubServiceTitle}
            onChange={(e) => {
              setSelectedSubServiceTitle(e.target.value);
              setFieldErrors(prev => ({ ...prev, detailed_service: undefined }));
            }}
            className={`p-3 rounded-lg bg-white/10 text-white border focus:outline-none focus:ring-2 transition ${getFieldErrorClass("sub_service")}`}
          >
            <option value="" disabled className="bg-[#1a1f26] text-white">
              Select specific requirement
            </option>
            {servicesData.find(s => s.id === selectedServiceId).subServices.map((sub, idx) => (
              <option key={idx} value={sub.title} className="bg-[#1a1f26] text-white">
                {sub.title}
              </option>
            ))}
          </select>
          {fieldErrors.sub_service && <span className="text-xs text-red-500">{fieldErrors.sub_service}</span>}
        </div>
      )}



      {/* Message */}
      <div className="md:col-span-2 flex flex-col gap-2">
        <label className="text-sm text-white/70">Message *</label>
        <textarea
          name="message"
          placeholder="Tell us about your project, goals, and how we can help you achieve success..."
          rows="6"
          className={`p-3 rounded-lg bg-white/10 text-white border placeholder-white/50 focus:outline-none focus:ring-2 transition ${getFieldErrorClass("message")}`}
          required
        />
        {fieldErrors.message && <span className="text-xs text-red-500">{fieldErrors.message}</span>}
      </div>

      <Toast
        open={toast.open}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
        message={toast.message}
        variant={toast.variant}
        className="md:col-span-2 mb-2"
      />

      {/* Submit Button */}
      <div className="md:col-span-2 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center items-center px-8 py-3 rounded-lg bg-[#f7e839] text-[#11181f] text-sm font-bold hover:bg-[#f5d428] hover:shadow-[0_0_16px_rgba(247,232,57,0.35)] transition-all duration-200 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 mr-2 text-[#11181f]" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 
                     0 0 5.373 0 12h4zm2 5.291A7.962 
                     7.962 0 014 12H0c0 3.042 1.135 
                     5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12l18-9-6 18-4-6-8-3z"
                  stroke="#11181f"
                  strokeWidth="2"
                />
              </svg>
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
