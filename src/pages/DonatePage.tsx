import React, { useState } from 'react';
import { DONATION_CAUSES, BANK_DETAILS, FOUNDATION_META } from '../data/foundationData';
import { Heart, Calculator, Building, ShieldCheck, CheckCircle2, Copy, ArrowRight } from 'lucide-react';

interface DonatePageProps {
  openZakatModal: () => void;
  presetZakatAmount?: number;
}

export const DonatePage: React.FC<DonatePageProps> = ({ openZakatModal, presetZakatAmount }) => {
  const [selectedCauseId, setSelectedCauseId] = useState<string>('orphan-education');
  const [donationCategory, setDonationCategory] = useState<'sadaqah' | 'zakat' | 'general'>('zakat');
  const [customAmount, setCustomAmount] = useState<number>(presetZakatAmount || 15000);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form State
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [isPledged, setIsPledged] = useState(false);

  const selectedCause = DONATION_CAUSES.find((c) => c.id === selectedCauseId) || DONATION_CAUSES[0];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (donorName && donorEmail) {
      setIsPledged(true);
    }
  };

  return (
    <div className="w-full bg-[#F8FAFC] pb-28 font-sans">
      
      {/* Calm, Inspiring Header Banner */}
      <section className="relative bg-[#0D3B82] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#1A4E9E] overflow-hidden">
        {/* Subtle Dark Photo Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: "url('/assets/img_-022.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B82] via-[#0D3B82]/85 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 text-amber-300 fill-current" />
            <span>DIRECT IMPACT • 100% DONATION POLICY</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight max-w-3xl">
            Give with Purpose. Transform a Life.
          </h1>
          <p className="text-stone-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            Your Sadaqah and Zakat directly support orphan education, chemotherapy aid for cancer patients, and emergency humanitarian relief.
          </p>
        </div>
      </section>

      {/* Main Giving Canvas with Generous Spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 3-Step Clean Giving Configurator (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Zakat Calculator Callout Banner */}
            <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-[#008CD3]/15 text-[#008CD3] shrink-0 mt-0.5">
                  <Calculator className="w-6 h-6 text-[#008CD3]" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[#0D3B82] text-base">
                    Need Help Calculating Your Zakat?
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Calculate your exact 2.5% obligation with current Pakistani gold and silver Nisab rates.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={openZakatModal}
                className="bg-[#0D3B82] hover:bg-[#008CD3] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all cursor-pointer shrink-0 shadow-2xs"
              >
                Open Calculator
              </button>
            </div>

            {/* Step 1: Donation Intent */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#008CD3] text-white text-xs font-bold flex items-center justify-center font-mono">
                  1
                </span>
                <h3 className="font-sans text-base font-bold text-[#0D3B82]">
                  Select Donation Intent
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {[
                  { id: 'zakat', label: 'Zakat', tag: '100% Eligible Causes' },
                  { id: 'sadaqah', label: 'Sadaqah Jariyah', tag: 'Continuous Charity' },
                  { id: 'general', label: 'General Fund', tag: 'School Infrastructure' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setDonationCategory(cat.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      donationCategory === cat.id
                        ? 'bg-[#0D3B82] text-white border-[#0D3B82] shadow-md ring-2 ring-[#008CD3]/30'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="font-sans font-bold text-sm">{cat.label}</div>
                    <div className={`text-[11px] mt-0.5 ${donationCategory === cat.id ? 'text-amber-300' : 'text-stone-500'}`}>
                      {cat.tag}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Welfare Cause */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#008CD3] text-white text-xs font-bold flex items-center justify-center font-mono">
                  2
                </span>
                <h3 className="font-sans text-base font-bold text-[#0D3B82]">
                  Choose Cause or Sponsorship
                </h3>
              </div>

              <div className="space-y-3">
                {DONATION_CAUSES.map((cause) => (
                  <div
                    key={cause.id}
                    onClick={() => {
                      setSelectedCauseId(cause.id);
                      setCustomAmount(cause.recommendedAmountPKR);
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                      selectedCauseId === cause.id
                        ? 'bg-white border-[#008CD3] shadow-md ring-2 ring-[#008CD3]/20'
                        : 'bg-white border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <img
                      src={cause.imageUrl}
                      alt={cause.title}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-sans font-bold text-sm text-[#0D3B82] truncate">
                          {cause.title}
                        </h4>
                        <span className="text-xs font-bold text-[#008CD3] shrink-0 ml-2 font-mono">
                          PKR {cause.recommendedAmountPKR.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                        {cause.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Amount Configurator */}
            <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-xs space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#008CD3] text-white text-xs font-bold flex items-center justify-center font-mono">
                  3
                </span>
                <h3 className="font-sans text-base font-bold text-[#0D3B82]">
                  Select or Enter Amount (PKR)
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {[5000, 10000, 15000, 25000, 50000, 100000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setCustomAmount(amt)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      customAmount === amt
                        ? 'bg-[#008CD3] text-white shadow-xs'
                        : 'bg-[#F4F7FA] text-stone-700 hover:bg-stone-200 border border-stone-200'
                    }`}
                  >
                    PKR {amt.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-bold text-sm font-mono">
                  PKR
                </span>
                <input
                  type="number"
                  min="100"
                  value={customAmount || ''}
                  onChange={(e) => setCustomAmount(Number(e.target.value))}
                  placeholder="Enter custom amount"
                  className="w-full pl-16 pr-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-stone-300 font-bold text-lg text-[#0D3B82] focus:outline-none focus:ring-2 focus:ring-[#008CD3] focus:bg-white"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Bank Transfer & Pledge Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Bank Transfer Box */}
            <div className="p-7 bg-[#0D3B82] text-white rounded-3xl shadow-xl space-y-5 border border-[#1A4E9E]">
              <div className="flex items-center gap-2.5 pb-4 border-b border-white/15">
                <Building className="w-5 h-5 text-[#008CD3]" />
                <div>
                  <h3 className="font-sans font-bold text-base text-white">
                    Official Bank Account Details
                  </h3>
                  <p className="text-xs text-stone-300">Direct wire transfer in Pakistan</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                
                <div className="p-3 rounded-xl bg-white/10 flex justify-between items-center">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold tracking-wider">BANK</span>
                    <strong className="text-white text-sm">{BANK_DETAILS.bankName}</strong>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/10 flex justify-between items-center">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold tracking-wider">ACCOUNT TITLE</span>
                    <strong className="text-amber-300 text-sm">{BANK_DETAILS.accountTitle}</strong>
                  </div>
                  <button
                    onClick={() => handleCopy(BANK_DETAILS.accountTitle, 'Account Title')}
                    className="p-1.5 text-stone-300 hover:text-white cursor-pointer"
                    title="Copy Title"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-white/10 flex justify-between items-center">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold tracking-wider">ACCOUNT NUMBER</span>
                    <strong className="text-white text-sm font-mono">{BANK_DETAILS.accountNumber}</strong>
                  </div>
                  <button
                    onClick={() => handleCopy(BANK_DETAILS.accountNumber, 'Account Number')}
                    className="p-1.5 text-stone-300 hover:text-white cursor-pointer"
                    title="Copy Account Number"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-white/10 flex justify-between items-center">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold tracking-wider">IBAN</span>
                    <strong className="text-white text-xs font-mono">{BANK_DETAILS.iban}</strong>
                  </div>
                  <button
                    onClick={() => handleCopy(BANK_DETAILS.iban, 'IBAN')}
                    className="p-1.5 text-stone-300 hover:text-white cursor-pointer"
                    title="Copy IBAN"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {copiedField && (
                  <div className="p-2.5 bg-emerald-900/90 text-emerald-200 text-xs rounded-xl text-center font-medium animate-in fade-in">
                    ✓ Copied {copiedField} to clipboard!
                  </div>
                )}

              </div>

              <div className="pt-2 border-t border-white/15 text-xs text-stone-300 flex justify-between items-center font-mono">
                <span>EasyPaisa / JazzCash:</span>
                <strong className="text-amber-300">{BANK_DETAILS.easypaisa}</strong>
              </div>
            </div>

            {/* Pledge / Notification Card */}
            <div className="p-7 bg-white rounded-3xl shadow-xs border border-stone-200/90 space-y-5">
              <h3 className="font-sans font-bold text-base text-[#0D3B82] border-b border-stone-200 pb-3">
                Send Donation Notification
              </h3>

              {isPledged ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-sans font-bold text-base text-emerald-900">
                    JazakAllah Khair, {donorName}!
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed font-sans">
                    Your pledge of <strong className="font-bold">PKR {customAmount.toLocaleString()}</strong> for <strong className="font-bold">{selectedCause.title}</strong> has been logged.
                  </p>
                  <p className="text-[11px] text-emerald-700">
                    Confirmation details have been emailed to <strong>{donorEmail}</strong>.
                  </p>
                  <button
                    onClick={() => setIsPledged(false)}
                    className="text-xs font-bold text-[#008CD3] underline cursor-pointer pt-2"
                  >
                    Submit Another Notification
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePledgeSubmit} className="space-y-4">
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0D3B82]">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mahmood"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-4 py-3 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#008CD3]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0D3B82]">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="tariq@example.com"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full px-4 py-3 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#008CD3]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0D3B82]">WhatsApp Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="w-full px-4 py-3 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#008CD3]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-sm py-4 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    <Heart className="w-4 h-4 fill-white/20" />
                    <span>Confirm Notification (PKR {customAmount.toLocaleString()})</span>
                  </button>

                  <div className="text-[11px] text-stone-500 text-center flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Tax-Exempt Trust • Reg. No. 1999/LHR</span>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
