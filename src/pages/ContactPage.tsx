import React, { useState } from 'react';
import { FOUNDATION_META, BANK_DETAILS } from '../data/foundationData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Building2, HelpCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const faqs = [
    {
      q: 'Where is Al-Ala Education Foundation located?',
      a: 'We are situated in Chung, Lahore, 1.5 KM off Multan Road. Our main campus houses Al-Ala International Islamic School as well as the administrative headquarters of our Welfare Foundation.'
    },
    {
      q: 'How can I request a tax receipt for my Zakat or Sadaqah?',
      a: 'When transferring via bank or EasyPaisa, simply email your transaction screenshot to donations@alala.edu.pk or send a WhatsApp message to our donor support number. We issue official stamped tax receipts.'
    },
    {
      q: 'Can I visit the school campus to inspect facilities?',
      a: 'Yes, we welcome donors, parents, and community partners! Visiting hours are Monday to Thursday from 9:00 AM to 2:00 PM. Please schedule an appointment in advance via phone or email.'
    },
    {
      q: 'Is Al-Ala Education Foundation registered and tax-exempt?',
      a: 'Yes, Al-Ala Education Foundation is registered under the Societies Registration Act and holds official tax-exempt status in Pakistan under Reg No. 1999/LHR.'
    }
  ];

  return (
    <div className="w-full bg-[#F8FAFC] pb-24 font-sans">
      
      {/* Header Banner */}
      <section className="relative bg-[#0D3B82] text-white py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1A4E9E] overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-overlay"
          style={{ backgroundImage: "url('/assets/img_-024.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B82] via-[#0D3B82]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008CD3]/30 border border-[#008CD3]/50 text-amber-300 text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5 text-[#008CD3]" />
            <span>GET IN TOUCH • VISIT CAMPUS</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-[44px] font-black leading-tight tracking-tight">
            Contact & Location Information
          </h1>
          <p className="text-stone-300 text-base max-w-3xl leading-relaxed">
            Reach out to our administrative office in Chung, Lahore. Whether you wish to sponsor a child, inquire about admissions, or visit our campus, our team is at your service.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details & Map Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-6">
              <h3 className="font-sans font-bold text-lg text-[#0D3B82] border-b border-stone-200 pb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#008CD3]" />
                <span>Foundation Office & Campus</span>
              </h3>

              <div className="space-y-4 text-xs">
                
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#F4F7FA] text-[#008CD3] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0D3B82] block text-sm">Campus Address</span>
                    <p className="text-stone-600 leading-relaxed mt-0.5">
                      {FOUNDATION_META.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#F4F7FA] text-[#008CD3] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0D3B82] block text-sm">Phone & WhatsApp</span>
                    <p className="text-stone-600 font-mono mt-0.5">
                      {FOUNDATION_META.contactPhone}
                    </p>
                    <p className="text-stone-500 text-[11px] mt-0.5">
                      Mon – Sat: 8:00 AM – 3:00 PM (PKT)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#F4F7FA] text-[#008CD3] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0D3B82] block text-sm">Email Inquiries</span>
                    <p className="text-[#008CD3] font-mono mt-0.5">
                      {FOUNDATION_META.contactEmail}
                    </p>
                    <p className="text-stone-500 text-[11px] mt-0.5">
                      Admissions & Donors: support@alala.edu.pk
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#F4F7FA] text-[#008CD3] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0D3B82] block text-sm">Visiting Hours</span>
                    <p className="text-stone-600 mt-0.5">
                      Monday to Thursday: 9:00 AM – 2:00 PM<br/>
                      Friday: 9:00 AM – 12:30 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Location Visual Box */}
            <div className="p-6 bg-[#0D3B82] text-white rounded-2xl border border-[#1A4E9E] space-y-4">
              <h4 className="font-sans font-bold text-base text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#008CD3]" />
                <span>Multan Road Access</span>
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Located just 1.5 kilometers off main Multan Road at Chung, Lahore. Easily accessible from Thokar Niaz Baig, Raiwind Road, and Lahore Ring Road.
              </p>
              <a
                href="https://maps.google.com/?q=Chung+Lahore+Multan+Road"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-xs py-3 rounded-lg transition-colors"
              >
                Open Map Directions (Google Maps)
              </a>
            </div>

          </div>

          {/* Inquiry Form & FAQ (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Form */}
            <div className="p-8 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-xl text-[#0D3B82]">
                  Send an Inquiry or Feedback
                </h3>
                <p className="text-xs text-stone-500">
                  Fill out the form below and our secretarial team will respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-sans font-bold text-base text-emerald-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. We have received your message regarding <strong>{formData.inquiryType}</strong> and will get back to you at <strong>{formData.email}</strong> promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', inquiryType: 'general', message: '' });
                    }}
                    className="text-xs font-bold text-[#008CD3] underline cursor-pointer pt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#0D3B82]">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Salman Ahmed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#008CD3]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#0D3B82]">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="salman@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#008CD3]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#0D3B82]">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+92 300 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#008CD3]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#0D3B82]">Inquiry Topic</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#008CD3] bg-white"
                      >
                        <option value="general">General Information</option>
                        <option value="admissions">School Admissions (Al-Ala School)</option>
                        <option value="zakat">Zakat & Donation Receipt Request</option>
                        <option value="volunteer">Volunteer & Teaching Opportunities</option>
                        <option value="chemotherapy">Chemotherapy Aid Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0D3B82]">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your detailed query or message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#008CD3]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0D3B82] hover:bg-[#008CD3] text-white font-bold text-sm py-3.5 rounded-lg shadow transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Official Message</span>
                  </button>

                </form>
              )}
            </div>

            {/* FAQs Accordion */}
            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <h3 className="font-sans font-bold text-lg text-[#0D3B82] flex items-center gap-2 border-b border-stone-200 pb-3">
                <HelpCircle className="w-5 h-5 text-[#008CD3]" />
                <span>Frequently Asked Questions</span>
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border border-stone-200 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full p-4 text-left font-sans font-bold text-sm text-[#0D3B82] bg-stone-50 hover:bg-stone-100 flex justify-between items-center cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-[#008CD3] text-lg font-mono">
                        {openFaqIndex === idx ? '−' : '+'}
                      </span>
                    </button>
                    {openFaqIndex === idx && (
                      <div className="p-4 bg-white text-xs text-stone-600 leading-relaxed border-t border-stone-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
