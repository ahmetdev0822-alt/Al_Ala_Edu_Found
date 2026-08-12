import React, { useState } from 'react';
import { X, Calculator, Heart, Info, RefreshCw } from 'lucide-react';

interface ZakatCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDonateWithZakat: (amount: number) => void;
}

export const ZakatCalculatorModal: React.FC<ZakatCalculatorModalProps> = ({
  isOpen,
  onClose,
  onDonateWithZakat
}) => {
  const [cashPKR, setCashPKR] = useState<number>(0);
  const [goldGrams, setGoldGrams] = useState<number>(0);
  const [silverGrams, setSilverGrams] = useState<number>(0);
  const [businessStockPKR, setBusinessStockPKR] = useState<number>(0);
  const [liabilitiesPKR, setLiabilitiesPKR] = useState<number>(0);

  // Approximate current rates in Pakistan (PKR)
  const GOLD_RATE_PER_GRAM = 22500; // ~262,000 per tola
  const SILVER_RATE_PER_GRAM = 280; // ~3,250 per tola

  if (!isOpen) return null;

  const totalGoldValue = goldGrams * GOLD_RATE_PER_GRAM;
  const totalSilverValue = silverGrams * SILVER_RATE_PER_GRAM;
  const grossAssets = cashPKR + totalGoldValue + totalSilverValue + businessStockPKR;
  const netZakatableAssets = Math.max(0, grossAssets - liabilitiesPKR);
  const zakatDuePKR = Math.round(netZakatableAssets * 0.025);

  const handleReset = () => {
    setCashPKR(0);
    setGoldGrams(0);
    setSilverGrams(0);
    setBusinessStockPKR(0);
    setLiabilitiesPKR(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 bg-[#1B262C] text-white flex items-center justify-between border-b border-[#2C3A3F]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#C1622D] text-white">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl">
                Zakat & Sadaqah Calculator
              </h3>
              <p className="text-xs text-stone-300 font-sans">
                Calculate 2.5% Zakat on eligible assets (PKR) for Al-Ala Foundation Welfare
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1.5 rounded-lg hover:bg-[#2C3A3F] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm font-sans">
          
          <div className="p-3.5 bg-[#F7F5F0] rounded-xl border border-[#ECE7DF] flex items-start gap-3 text-xs text-stone-700">
            <Info className="w-4 h-4 text-[#C1622D] shrink-0 mt-0.5" />
            <div>
              Zakat is 2.5% of net savings held for one lunar year above the Nisab threshold. Al-Ala Education Foundation uses 100% of Zakat allocations for orphan education, medical aid for cancer patients, and food rations for impoverished families.
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Cash */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#1B262C]">
                Cash in Hand & Bank Accounts (PKR)
              </label>
              <input
                type="number"
                min="0"
                value={cashPKR || ''}
                onChange={(e) => setCashPKR(Number(e.target.value))}
                placeholder="e.g. 100000"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C1622D] text-sm"
              />
            </div>

            {/* Gold */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#1B262C] flex justify-between">
                <span>Gold Weight (Grams)</span>
                <span className="text-[10px] text-stone-500">~PKR {GOLD_RATE_PER_GRAM}/g</span>
              </label>
              <input
                type="number"
                min="0"
                value={goldGrams || ''}
                onChange={(e) => setGoldGrams(Number(e.target.value))}
                placeholder="e.g. 50"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C1622D] text-sm"
              />
            </div>

            {/* Silver */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#1B262C] flex justify-between">
                <span>Silver Weight (Grams)</span>
                <span className="text-[10px] text-stone-500">~PKR {SILVER_RATE_PER_GRAM}/g</span>
              </label>
              <input
                type="number"
                min="0"
                value={silverGrams || ''}
                onChange={(e) => setSilverGrams(Number(e.target.value))}
                placeholder="e.g. 200"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C1622D] text-sm"
              />
            </div>

            {/* Business Stock */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#1B262C]">
                Business Stock & Investments (PKR)
              </label>
              <input
                type="number"
                min="0"
                value={businessStockPKR || ''}
                onChange={(e) => setBusinessStockPKR(Number(e.target.value))}
                placeholder="e.g. 250000"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C1622D] text-sm"
              />
            </div>

            {/* Liabilities */}
            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-red-700">
                Immediate Debts & Liabilities to Deduct (PKR)
              </label>
              <input
                type="number"
                min="0"
                value={liabilitiesPKR || ''}
                onChange={(e) => setLiabilitiesPKR(Number(e.target.value))}
                placeholder="e.g. 30000"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="p-5 bg-[#1B262C] text-white rounded-xl space-y-3">
            <div className="flex justify-between items-center text-xs text-stone-300 pb-2 border-b border-[#2C3A3F]">
              <span>Gross Assets: PKR {grossAssets.toLocaleString()}</span>
              <span>Deductions: PKR {liabilitiesPKR.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Calculated Net Zakat Due (2.5%)
                </div>
                <div className="font-serif text-3xl font-extrabold text-white mt-1">
                  PKR {zakatDuePKR.toLocaleString()}
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onClose();
              onDonateWithZakat(zakatDuePKR);
            }}
            className="bg-[#C1622D] hover:bg-[#A85020] text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Heart className="w-4 h-4 fill-white/20" />
            <span>Pledge Zakat (PKR {zakatDuePKR > 0 ? zakatDuePKR.toLocaleString() : '0'})</span>
          </button>
        </div>

      </div>
    </div>
  );
};
