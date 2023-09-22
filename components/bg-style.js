const Section = ({ top, left, width, height, color1, color2, round }) => {
    return (
      <section
        style={{
          position: 'absolute',
          top: `${top}px`,
          left: `calc(50% + ${left}px)`,
          borderRadius: `${round}%`,
          background: `radial-gradient(50% 50% at 50% 50%, ${color1}, ${color2})`,
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    );
  };
  
  const Background = () => {
    return (
        <section>
        <Section top={272.45} left={203.84} width={824.2} height={796.76} color1="rgba(7, 102, 227, 0.4)" color2="rgba(255, 255, 255, 0)" round={50} />
        <Section top={-93.1} left={-1038.82} width={914.36} height={884.96} color1="rgba(255, 236, 183, 0.5)" color2="rgba(255, 255, 255, 0)" round={50} />
        <Section top={1102.53} left={-9.8} width={1288.73} height={1246.59} color1="rgba(255, 236, 183, 0.5)" color2="rgba(255, 255, 255, 0)" round={50} />
        <Section top={2342.26} left={-1426.91} width={1288.73} height={1246.59} color1="rgba(255, 236, 183, 0.5)" color2="rgba(255, 255, 255, 0)" round={50} />
        <Section top={3684.89} left={-70.56} width={1288.73} height={1246.59} color1="rgba(255, 236, 183, 0.5)" color2="rgba(255, 255, 255, 0)" round={50} />
        <Section top={6640.64} left={-1040.78} width={975.12} height={943.76} color1="rgba(255, 236, 183, 0.5)" color2="rgba(255, 255, 255, 0)" round={50} />
        <Section top={948.66} left={-1121.15} width={824.2} height={796.76} color1="rgba(112, 157, 216, 0.5)" color2="rgba(255, 255, 255, 0)" round={50} />
        <Section top={2473.58} left={155.82} width={1216.21} height={1175.05} color1="rgba(112, 157, 216, 0.5)" color2="rgba(255, 255, 255, 0)" round={50} />
        <Section top={3788.77} left={-1331.85} width={1216.21} height={1175.05} color1="rgba(112, 157, 216, 0.5)" color2="rgba(255, 255, 255, 0)" round={50} />
        <Section top={5825.26} left={249.91} width={802.64} height={776.18} color1="rgba(112, 157, 216, 0.5)" color2="rgba(255, 255, 255, 0)" round={50} />
        </section>
    );
  };
  
  export default Background;
  