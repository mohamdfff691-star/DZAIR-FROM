import React from 'react';

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showText = true,
  size = 'md'
}) => {
  const sizeMap = {
    sm: { icon: 32, text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 42, text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 56, text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 84, text: 'text-4xl', sub: 'text-sm' }
  };

  const { icon, text, sub } = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Emblem matching uploaded brand identity */}
      <div className="relative group shrink-0">
        {/* Ambient neon cyan bloom */}
        <div 
          className="absolute -inset-1 rounded-full opacity-60 group-hover:opacity-100 blur-md transition duration-500"
          style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.45) 0%, rgba(14,165,233,0.1) 70%, transparent 100%)' }}
        />
        
        <svg
          width={icon}
          height={icon}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-[0_0_12px_rgba(0,242,254,0.6)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="cyanOrbGrad" x1="15" y1="15" x2="60" y2="105" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#00f2fe" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            <linearGradient id="neonRingGrad" x1="30" y1="10" x2="110" y2="110" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#00f2fe" />
              <stop offset="85%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>

            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Outer Ring Arc */}
          <circle 
            cx="60" 
            cy="60" 
            r="54" 
            stroke="url(#neonRingGrad)" 
            strokeWidth="3.2" 
            className="opacity-90"
            filter="url(#glowFilter)"
          />

          {/* Left Solid Luminous Crescent / D shape */}
          <path
            d="M 54 18 
               C 30 18, 12 37, 12 60 
               C 12 83, 30 102, 54 102 
               L 54 18 Z"
            fill="url(#cyanOrbGrad)"
          />

          {/* Right Geometric Futuristic F Emblem */}
          {/* F Top Horizontal Bar */}
          <path
            d="M 64 36 L 98 36 L 98 46 L 64 46 Z"
            fill="#00f2fe"
            filter="url(#glowFilter)"
          />
          {/* F Middle Horizontal Bar */}
          <path
            d="M 64 56 L 90 56 L 90 66 L 64 66 Z"
            fill="#38bdf8"
          />
          {/* F Main Vertical Spine */}
          <path
            d="M 64 36 L 73 36 L 73 102 L 64 102 Z"
            fill="#e0f2fe"
          />

          {/* Bottom subtle accent line */}
          <path
            d="M 73 78 L 86 78 L 86 102 L 73 102 Z"
            fill="#0284c7"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col tracking-tight text-right">
          <div className="flex items-center gap-1.5">
            <span className={`font-black ${text} tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-600 dark:from-white dark:via-slate-100 dark:to-cyan-300 font-['Alexandria',sans-serif]`}>
              DZAIR <span className="text-cyan-500 dark:text-[#00f2fe] drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]">FORM</span>
            </span>
          </div>
          <span className={`text-cyan-700 dark:text-cyan-400/80 font-medium ${sub} tracking-widest font-['Cairo',sans-serif]`}>
            المنصة الإدارية الموحدة للسيبار
          </span>
        </div>
      )}
    </div>
  );
};
