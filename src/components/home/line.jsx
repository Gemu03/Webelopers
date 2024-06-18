import styled from 'styled-components';

const SvgContainer = styled.div`
  position: absolute; // or fixed if you want it to stay fixed relative to the viewport
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const SvgLine = styled.svg`
  width: 100%;
  height: 100%;
`;

const LinePath = styled.path`
  stroke: #8a2be2;
  stroke-width: 3;
  fill: none;
  transition: stroke-dasharray 0.3s, stroke 0.3s;
`;

const Line = ({ dasharray }) => (
  <SvgContainer>
    <SvgLine>
      <LinePath 
        d="M 720 0 L 720 220 C 720 250 730 260 760 260 L 1310 260 C 1340 260 1350 270 1350 300 L 1350 490 C 1350 520 1340 530 1310 530 L 80 530 C 50 530 40 540 40 570 L 40 1530"
        strokeDasharray={dasharray} 
      />
    </SvgLine>
  </SvgContainer>
);

export default Line;


