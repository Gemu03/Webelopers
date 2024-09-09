// Line.js
import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
`;

const LinePath = styled.path`
  stroke-width: 5;
  fill: none;
`;

const WhiteLinePath = styled(LinePath)`
  stroke: white;
`;

const PurpleLinePath = styled(LinePath)`
  stroke: #8a2be2;
  stroke-dasharray: ${({ strokeDasharray }) => strokeDasharray};
  transition: stroke-dasharray 0.3s ease;
  filter: drop-shadow(0 0 6px #8a2be2) brightness(1.3);
`;

const Line = ({ dasharray }) => {
  const calculatePath = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    console.log(vw, vh)
    const adjustedPath = `M ${vw * 0.48} 0 L ${vw * 0.48} ${vh * 0.29} C ${vw * 0.48} ${vh * 0.33} ${vw * 0.49} ${vh * 0.34} ${vw * 0.50} ${vh * 0.34} L ${vw * 0.87} ${vh * 0.34} C ${vw * 0.89} ${vh * 0.34} ${vw * 0.90} ${vh * 0.36} ${vw * 0.90} ${vh * 0.4} L ${vw * 0.90} ${vh * 0.65} C ${vw * 0.90} ${vh * 0.69} ${vw * 0.89} ${vh * 0.71} ${vw * 0.87} ${vh * 0.71} L ${vw * 0.05} ${vh * 0.71} C ${vw * 0.03} ${vh * 0.71} ${vw * 0.03} ${vh * 0.73} ${vw * 0.03} ${vh * 0.76} L ${vw * 0.03} ${vh * 2.05}`;
    return adjustedPath;
  };

  const [path, setPath] = React.useState(calculatePath());

  React.useEffect(() => {
    const handleResize = () => {
      setPath(calculatePath());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Svg>
      <WhiteLinePath d={path} />
      <PurpleLinePath d={path} strokeDasharray={dasharray} />
    </Svg>
  );
};

export default Line;
