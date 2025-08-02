function BentoGrid ({ children, className }) {
  return (
    <div
      className={`p-10 border-2 border-white/10 backdrop-blur-lg shadow-[0_2px_20px_rgba(145,94,255,0.25)] rounded-2xl ${className || ''}`}
      style={{
        background: 'linear-gradient(135deg, rgba(145,94,255,0.1), rgba(123,104,238,0.07), rgba(255,255,255,0.0025))'
      }}
    >
      {children}
    </div>
  )
}

export default BentoGrid
