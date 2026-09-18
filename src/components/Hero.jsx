import React, { useEffect, useState } from 'react';

// Hook: Count Up
const useCountUp = (to, duration = 1500) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start;
    let animationFrame;
    const target = typeof to === 'number' ? to : 0;

    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const currentValue = Math.floor(progress * target);
      setValue(currentValue);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [to, duration]);

  return value;
};

// Hook: Typewriter
const useTypewriter = (texts, speed = 100, delay = 2000) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    if (currentIndex < texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[currentTextIndex][currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentTextIndex, texts, speed, delay]);

  return currentText;
};

const Hero = () => {
  const projects = useCountUp(40, 2200);
  const roi = useCountUp(12, 2200);
  const retention = useCountUp(98, 2200);
  const years = useCountUp(4, 2200);

  const typingTexts = [
    "AI-Powered Marketing for Predictable Growth"
  ];

  const typedText = useTypewriter(typingTexts, 40, 2000);

  return (
    <section className="relative overflow-hidden bg-[#0a0f15] min-h-screen flex items-center justify-center pt-24 pb-16">
      {/* Premium Ambient Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#f7e839]/50 rounded-full mix-blend-screen filter blur-[150px] opacity-15 animate-pulse-slow"></div>
      </div>

      {/* Floating 3D/Illustrative Accents */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block opacity-60">
        <div className="absolute left-[8%] top-[25%] animate-float-slow">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_15px_rgba(247,232,57,0.5)]">
            <path d="M3 10v4a2 2 0 002 2h1l2 3 2-3h2l6-3V7l-6-3H9L6 3 5 6H5a2 2 0 00-2 2z" stroke="#f7e839" strokeWidth="1.5" fill="rgba(247,232,57,0.1)" />
          </svg>
        </div>
        <div className="absolute right-[12%] top-[30%] animate-float" style={{ animationDelay: '1s' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            <path d="M6 4L2 8l4 4M18 4l4 4-4 4" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute left-[15%] bottom-[25%] animate-float" style={{ animationDelay: '2s' }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_15px_rgba(247,232,57,0.5)]">
            <path d="M12 12l7-7 2 2-7 7-2 5-2-2 5-2z" stroke="#f7e839" strokeWidth="1.5" fill="rgba(247,232,57,0.1)" />
          </svg>
        </div>
        <div className="absolute right-[8%] bottom-[30%] animate-float-slow" style={{ animationDelay: '3s' }}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            <path d="M4 18V6m6 12V9m6 9V4" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">

          {/* Main Headline */}
          <div className="relative inline-block mt-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-2xl">
              Strategic Digital Marketing Agency
              <br />
              <span className="text-[#f7e839] relative min-h-[1.2em] inline-block text-3xl mt-2">
                <span className="inline-flex items-center">
                  {typedText}
                  <span className="inline-block w-1 h-6 md:h-10 bg-[#f7e839] ml-2 animate-pulse"></span>
                </span>
              </span>
            </h1>

            <svg
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[280px] md:w-[400px] opacity-80"
              viewBox="0 0 500 20"
              preserveAspectRatio="none"
            >
              <path
                d="M9.3,15.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-dash filter drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              />
            </svg>
          </div>

          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in delay-300">
            Empowering Indian SMEs with AI-driven performance marketing systems designed for predictable, scalable growth.
          </p>

          {/* Interactive Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 animate-fade-in delay-500">

            {/* Years Experience */}
            <div className="group relative bg-[#111118]/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#f7e839]/40 hover:bg-[#111118]/60 hover:shadow-[0_10px_30px_rgba(247,232,57,0.15)] flex flex-col items-center justify-center">
              <div className="mb-2 flex justify-center transition-transform duration-300 ease-out group-hover:scale-90 text-[#d1d5db]">
                <svg width="48" height="48" className="md:w-[72px] md:h-[72px]" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
                  <path d="M24 14v10l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-2xl md:text-4xl font-extrabold text-white mb-2 transition-transform duration-300 ease-out group-hover:scale-110">{years}+</div>
              <div className="text-white/70 font-medium whitespace-nowrap">Years Experience</div>
            </div>

            {/* Projects */}
            <div className="group relative bg-[#111118]/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#22d3ee]/40 hover:bg-[#111118]/60 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)] flex flex-col items-center justify-center">
              <div className="mb-2 flex justify-center transition-transform duration-300 ease-out group-hover:scale-90 text-[#d1d5db]">
                <svg width="48" height="48" className="md:w-[72px] md:h-[72px]" viewBox="0 0 48 48" fill="none">
                  <path d="M8 34h32M10 30h28M12 26h24M16 14h16l4 12H12l4-12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-2xl md:text-4xl font-extrabold text-white mb-2 transition-transform duration-300 ease-out group-hover:scale-110">{projects}+</div>
              <div className="text-white/70 font-medium">Projects</div>
            </div>

            {/* Client Retention */}
            <div className="group relative bg-[#111118]/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#f7e839]/40 hover:bg-[#111118]/60 hover:shadow-[0_10px_30px_rgba(247,232,57,0.15)] flex flex-col items-center justify-center">
              <div className="mb-2 flex justify-center transition-transform duration-300 ease-out group-hover:scale-90 text-[#d1d5db]">
                <svg width="48" height="48" className="md:w-[72px] md:h-[72px]" viewBox="0 0 48 48" fill="none">
                  <path d="M24 42s-14-8.7-14-20a14 14 0 1128 0c0 11.3-14 20-14 20z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div className="text-2xl md:text-4xl font-extrabold text-white mb-2 transition-transform duration-300 ease-out group-hover:scale-110">{retention}%</div>
              <div className="text-white/70 font-medium">Client Retention</div>
            </div>

            {/* Average ROI */}
            <div className="group relative bg-[#111118]/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#22d3ee]/40 hover:bg-[#111118]/60 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)] flex flex-col items-center justify-center">
              <div className="mb-2 flex justify-center transition-transform duration-300 ease-out group-hover:scale-90 text-[#d1d5db]">
                <svg width="48" height="48" className="md:w-[72px] md:h-[72px]" viewBox="0 0 48 48" fill="none">
                  <path d="M8 36l10-10 6 6 16-16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-2xl md:text-4xl font-extrabold text-white mb-2 transition-transform duration-300 ease-out group-hover:scale-110">{roi}x</div>
              <div className="text-white/70 font-medium">Average ROI</div>
            </div>

          </div>

          {/* Unified CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-slide-up delay-700">
            <a
              href="/contact"
              className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-black font-bold text-lg shadow-[0_0_20px_rgba(247,232,57,0.3)] hover:shadow-[0_0_30px_rgba(247,232,57,0.5)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine z-10 skew-x-12"></div>
              <span className="relative z-20 flex items-center justify-center gap-2">
                Book Free Strategy Call
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

            <a
              href="/services"
              className="group w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-lg hover:border-[#22d3ee]/80 hover:bg-[#22d3ee]/10 hover:text-[#22d3ee] transition-all duration-300 hover:-translate-y-1"
            >
              Explore Services
            </a>

          </div>

        </div>
      </div>


      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.1); opacity: 0.25; }
        }
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes shine {
          100% { transform: translateX(200%); }
        }
        
        .animate-fade-in { animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-slide-up { animation: slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float 9s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-blink { animation: blink 1s step-end infinite; }
        .animate-shine { animation: shine 1.5s ease-out; }
        
        .animate-dash {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: dash 4s linear infinite;
        }
        
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </section>
  );
};

export default Hero;