import React from "react"

type DiagonalMarqueeProps = {
  text: string
  text2: string
  speed?: number
  className?: string
}

const DiagonalMarquee: React.FC<DiagonalMarqueeProps> = ({
  text,
  text2,
  speed = 20,
  className = ""
}) => {
  return (
    <div className="relative w-full overflow-hidden h-[170px] -mt-[94px] ">
      {/* Diagonal Strip */}
      <div className={`absolute left-[-10%] top-[56px] w-[120%] rotate-[-2deg]  py-3 z-20 bg-orange ${className}`}>
        <div
          className="flex whitespace-nowrap animate-marquee"
          style={{ animationDuration: `${speed}s` }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {Array(10)
                .fill(text)
                .map((item, index) => (
                  <span
                    key={index}
                    className="mx-6 text-white uppercase tracking-wider font-medium text-sm "
                  >
                    {item}
                  </span>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className={`absolute left-[-10%] top-[56px] w-[120%] rotate-[3deg]  py-3 z-10 bg-red ${className}`}>
        <div
          className="flex whitespace-nowrap animate-marquee2"
          style={{ animationDuration: `${speed}s` }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {Array(10)
                .fill(text2)
                .map((item, index) => (
                  <span
                    key={index}
                    className="mx-6 text-[#E5E0E0] uppercase tracking-wider font-medium text-sm "
                  >
                    {item}
                  </span>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DiagonalMarquee
