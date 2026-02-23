export const MoonFisherLogo = () => (
  <svg viewBox="0 0 200 120" className="h-14 w-24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="moonGlow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#D5C1FF" />
        <stop offset="100%" stopColor="#8F6BFF" />
      </linearGradient>
    </defs>
    <path d="M68 18a42 42 0 1056 56A38 38 0 1168 18z" fill="url(#moonGlow)" opacity="0.95" />
    <circle cx="101" cy="47" r="4" fill="#3E2864" />
    <path d="M98 49l10 17m-7-7l-12 3" stroke="#3E2864" strokeWidth="3" strokeLinecap="round" />
    <path d="M109 67c22 1 31 16 42 26" stroke="#4B2F7A" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M149 92c6 0 10 5 10 9-4-3-8-4-12 0 0-4 1-9 2-9z" fill="#7C5CE6" />
    <path d="M35 97c37 8 71 8 120 0" stroke="#B79EFF" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
