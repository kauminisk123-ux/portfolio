import './KSKLogo.css';

function KSKLogo() {
  return (
    <div className="ksk-logo">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          stroke="url(#kskGradient)" 
          strokeWidth="2.5"
          className="ksk-ring"
        />
        <circle 
          cx="50" 
          cy="50" 
          r="35" 
          fill="rgba(0, 255, 200, 0.05)"
          stroke="rgba(0, 255, 200, 0.1)"
          strokeWidth="1"
        />
        <text 
          x="50" 
          y="58" 
          textAnchor="middle" 
          fontSize="26" 
          fontWeight="800"
          fill="url(#kskGradient)"
          className="ksk-text"
          fontFamily="Arial, sans-serif"
        >
          KSK
        </text>
        <defs>
          <linearGradient id="kskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffc8" />
            <stop offset="50%" stopColor="#0088ff" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default KSKLogo;