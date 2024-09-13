import React from "react";
import Marquee from "react-fast-marquee";


const logosNames = ['apple', "unsplash", "cocacola", "github", "netflix", "v"];

const MarqueeComponent = () =>  {
  return (
  <Marquee
    speed={50} // Controls the speed of the slider
    gradient={false} // Removes the gradient effect on edges
  >
    <div style={{ display: 'flex', gap: '20px' }}>
      {logosNames.map((logo, index) => (
        <div key={index} style={{ padding: '0 20px' }}>
          <img src={`/${logo}.png`} alt={`Brand Logo ${index + 1}`} style={{ height: '100px', width: 'auto' }} />
        </div>
      ))}
    </div>
  </Marquee>
  )
}

export default MarqueeComponent;
