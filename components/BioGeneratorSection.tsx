import React from 'react';
import { Target } from 'lucide-react';

interface BioGeneratorSectionProps {
  onCtaClick: () => void;
}

export const BioGeneratorSection: React.FC<BioGeneratorSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-[#F7F9FF] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 shadow-sm">
            <Target className="w-4 h-4 text-[#395BC7]" />
            <span className="text-sm font-bold text-[#395BC7] tracking-wide">Teasing Technique</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0B14] tracking-tight leading-[1.1]">
            Make her chase you <span className="text-blue-600">instead of you chasing her</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Learn how to playfully challenge women and create the 'emotional rollercoaster' that makes her brain addicted to proving herself to you.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <button 
            onClick={onCtaClick}
            className="group relative inline-flex items-center gap-2 px-10 py-4 bg-[#1786FF] hover:bg-blue-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(23,134,255,0.5)] hover:-translate-y-1 active:translate-y-0 active:scale-95"
          >
            Master The Method Now
          </button>
        </div>

        {/* Chat Mockup Container */}
        <div className="w-full max-w-[400px] mx-auto relative">
           <div className="bg-white rounded-[2rem] p-6 shadow-2xl border border-slate-100 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              
              {/* Chat Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
                 <div className="relative">
                    {/* PROFILE PICTURE HERE */}
                    <img 
                      src="https://i.ibb.co/Df7VcDVp/webp.webp" 
                      alt="Profile" 
                      className="w-10 h-10 rounded-full object-cover border-2 border-pink-100"
                    />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                 </div>
                 <div>
                    <p className="text-sm font-bold text-slate-800">Sarah</p>
                    <p className="text-xs text-slate-400">Active now</p>
                 </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                 {/* Her Message */}
                 <div className="flex items-end gap-2">
                    <img 
                      src="https://i.ibb.co/Df7VcDVp/webp.webp" 
                      className="w-6 h-6 rounded-full object-cover mb-1"
                      alt="Avatar"
                    />
                    <div className="bg-slate-100 text-slate-700 p-3 rounded-2xl rounded-bl-sm text-sm font-medium leading-relaxed max-w-[85%]">
                       Oh, you're new here huh? Don't worry, you just found yourself a tour guide 😉
                    </div>
                 </div>

                 {/* Your Message */}
                 <div className="flex justify-end">
                    <div className="bg-[#1786FF] text-white p-3 rounded-2xl rounded-br-sm text-sm font-medium leading-relaxed max-w-[85%] shadow-md shadow-blue-200">
                       But I might take you up on that offer...
                    </div>
                 </div>
              </div>

           </div>

           {/* Floating Reactions */}
           <div className="absolute top-1/2 -right-8 bg-white p-3 rounded-full shadow-lg animate-float-delayed hidden md:block">
              <span className="text-2xl">😂</span>
           </div>
        </div>

      </div>
    </section>
  );
};