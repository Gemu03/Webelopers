import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Line from './line';

const SectionContainer = styled.section`
  position: relative;
  height: 200vh;
  background-color: ${({ bgColor }) => bgColor};
`;

const Section = ({ bgColor }) => {
  const [dasharray, setDasharray] = useState('0, 1000');
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const sectionTop = rect.top;
        const sectionScrollTop = window.innerHeight - sectionTop;
        const sectionScrollPercent = Math.min(Math.max(sectionScrollTop / sectionHeight, 0), 1);
        const dashLength = 3800;
        const filledLength = ((sectionScrollPercent) * dashLength*0.86);
        setDasharray(`${filledLength}, ${dashLength - filledLength}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SectionContainer bgColor={bgColor} ref={sectionRef}>
      <Line dasharray={dasharray} />
    </SectionContainer>
  );
};

export default Section;
