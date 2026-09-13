import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycby0_aceIACtHWDgJh8gFugRCDwJChdQp6LPH0rOLzggcHPG48u1O-usTpx3adxA2YU2gA/exec';

export const AVAILABLE_PRODUCTS = [
  'Windows 11 Pro (No Warranty)',
  'Windows 10 Pro (No Warranty)',
  'Windows 11 Home (No Warranty)',
  'Netflix Premium 4K (Warranty Included)',
  'Spotify Premium (No Warranty)',
  'Office 2024 Pro Plus',
  'Office 2021 Pro Plus',
  'Microsoft 365 Personal',
  'Microsoft 365 Family',
  'Other',
] as const;

export type AvailableProduct = (typeof AVAILABLE_PRODUCTS)[number];

interface ProductLeadFormProps {
  defaultProduct?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  compact?: boolean;
}

export const ProductLeadForm: React.FC<ProductLeadFormProps> = ({
  defaultProduct = 'Windows 11 Pro (No Warranty)',
  title = 'Direct Order & License Request',
  subtitle = 'Enter your email to receive your genuine license details and activation instructions.',
  className = '',
  compact = false,
}) => {
  // Determine matching default product
  const getInitialProduct = (): AvailableProduct => {
    const lower = defaultProduct.toLowerCase();
    if (lower.includes('netflix')) return 'Netflix Premium 4K (Warranty Included)';
    if (lower.includes('spotify')) return 'Spotify Premium (No Warranty)';
    if (lower.includes('11 pro')) return 'Windows 11 Pro (No Warranty)';
    if (lower.includes('10 pro')) return 'Windows 10 Pro (No Warranty)';
    if (lower.includes('11 home')) return 'Windows 11 Home (No Warranty)';
    if (lower.includes('2024')) return 'Office 2024 Pro Plus';
    if (lower.includes('2021')) return 'Office 2021 Pro Plus';
    if (lower.includes('personal')) return 'Microsoft 365 Personal';
    if (lower.includes('family')) return 'Microsoft 365 Family';
    const match = AVAILABLE_PRODUCTS.find((p) =>
      p.toLowerCase().includes(lower) || lower.includes(p.toLowerCase())
    );
    return match || 'Windows 11 Pro (No Warranty)';
  };

  const [email, setEmail] = useState('');
  const [tool, setTool] = useState<AvailableProduct>(getInitialProduct);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    const lower = defaultProduct.toLowerCase();
    if (lower.includes('netflix')) setTool('Netflix Premium 4K (Warranty Included)');
    else if (lower.includes('spotify')) setTool('Spotify Premium (No Warranty)');
    else if (lower.includes('11 pro')) setTool('Windows 11 Pro (No Warranty)');
    else if (lower.includes('10 pro')) setTool('Windows 10 Pro (No Warranty)');
    else if (lower.includes('11 home')) setTool('Windows 11 Home (No Warranty)');
    else if (lower.includes('2024')) setTool('Office 2024 Pro Plus');
    else if (lower.includes('2021')) setTool('Office 2021 Pro Plus');
    else if (lower.includes('personal')) setTool('Microsoft 365 Personal');
    else if (lower.includes('family')) setTool('Microsoft 365 Family');
    else {
      const match = AVAILABLE_PRODUCTS.find((p) =>
        p.toLowerCase().includes(lower) || lower.includes(p.toLowerCase())
      );
      if (match) setTool(match);
    }
  }, [defaultProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      // Send ONLY email and tool parameters
      const data = new URLSearchParams();
      data.append('email', trimmedEmail);
      data.append('tool', tool);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors',
      });

      // Successful dispatch
      setStatus('success');
      // Reset the form after successful submission
      setEmail('');
      setTool(getInitialProduct());
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`rounded-xl border border-[#2b2d3d] bg-[#161722] p-4 sm:p-5 text-slate-200 ${className}`}
    >
      {title && (
        <div className="mb-3.5">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#F5A623]"></span>
            <span>{title}</span>
          </h3>
          {subtitle && (
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Success Notification */}
      {status === 'success' && (
        <div
          role="alert"
          className="mb-4 flex items-center gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-semibold text-emerald-400"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          <span>Thanks! We received your request.</span>
        </div>
      )}

      {/* Error Notification */}
      {status === 'error' && (
        <div
          role="alert"
          className="mb-4 flex items-center gap-2.5 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs font-semibold text-red-400"
        >
          <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
          <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Email field */}
        <div>
          <label
            htmlFor="lead-form-email"
            className="block text-xs font-medium text-slate-300 mb-1"
          >
            Email Address <span className="text-[#F5A623]">*</span>
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Mail className="h-4 w-4 text-slate-500" />
            </div>
            <input
              id="lead-form-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== 'idle') setStatus('idle');
              }}
              placeholder="customer@gmail.com"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-[#111218] border border-[#2c2f42] pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] disabled:opacity-60 transition-colors"
            />
          </div>
        </div>

        {/* Tool / Product field */}
        <div>
          <label
            htmlFor="lead-form-tool"
            className="block text-xs font-medium text-slate-300 mb-1"
          >
            Product / License <span className="text-[#F5A623]">*</span>
          </label>
          <select
            id="lead-form-tool"
            value={tool}
            onChange={(e) => {
              setTool(e.target.value as AvailableProduct);
              if (status !== 'idle') setStatus('idle');
            }}
            disabled={isSubmitting}
            className="w-full rounded-lg bg-[#111218] border border-[#2c2f42] px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-hidden focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] disabled:opacity-60 transition-colors cursor-pointer"
          >
            {AVAILABLE_PRODUCTS.map((prod) => (
              <option key={prod} value={prod} className="bg-[#161722] text-white">
                {prod}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          id="lead-form-submit-btn"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F5A623] hover:bg-[#e09419] py-3 px-4 text-xs sm:text-sm font-extrabold text-black transition-all shadow-md shadow-[#F5A623]/15 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-black" />
              <span>Sending...</span>
            </>
          ) : (
            <span>Get started</span>
          )}
        </button>
      </form>
    </div>
  );
};
