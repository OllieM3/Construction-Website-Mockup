// components/forms/LeadFilter.tsx
"use client"
import { useState } from 'react'

export default function LeadFilter() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ project: '', budget: '', timeframe: '' });

  // Step 1: Project Type
  if (step === 1) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">What project do you need help with?</h3>
        <div className="space-y-3">
          {['Kitchen Remodel', 'New Build', 'Home Addition', 'Other'].map((item) => (
            <button
              key={item}
              onClick={() => { setFormData({...formData, project: item}); setStep(2); }}
              className="w-full text-left px-4 py-3 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Step 2: Budget (The Filter)
  if (step === 2) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-2xl">
        <h3 className="text-xl font-bold text-gray-900 mb-4">What is your estimated budget?</h3>
        <div className="space-y-3">
           {/* If they click "Under $5k", you can flag them as "Low Quality" in your backend later */}
          {['Under $10k', '$10k - $25k', '$25k - $50k', '$50k+'].map((item) => (
            <button
              key={item}
              onClick={() => { setFormData({...formData, budget: item}); setStep(3); }}
              className="w-full text-left px-4 py-3 border rounded-lg hover:border-green-500 hover:bg-green-50 transition-all"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Step 3: The Capture
  if (step === 3) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-2xl text-center">
        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">✓</div>
        <h3 className="text-xl font-bold text-gray-900">Great! We have availability.</h3>
        <p className="text-gray-500 mb-6">Enter your details to see our next open slot.</p>
        
        {/* Real Form Inputs Here */}
        <input type="text" placeholder="Your Name" className="w-full border p-3 rounded mb-3" />
        <input type="tel" placeholder="Phone Number" className="w-full border p-3 rounded mb-4" />
        
        <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
          Get My Free Quote
        </button>
      </div>
    )
  }
}