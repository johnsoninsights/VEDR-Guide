const Marquee = ({ text, className = "" }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap py-3 flex ${className}`}>
      <div className="animate-marquee flex whitespace-nowrap">
        {Array(10).fill(text).map((t, i) => (
          <span key={`1-${i}`} className="font-display font-black text-2xl mx-4 tracking-tight uppercase">
            {t}
          </span>
        ))}
      </div>
      <div className="animate-marquee2 flex whitespace-nowrap absolute top-3">
        {Array(10).fill(text).map((t, i) => (
          <span key={`2-${i}`} className="font-display font-black text-2xl mx-4 tracking-tight uppercase">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
