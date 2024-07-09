// Section.js
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Line from './line';

const SectionContainer = styled.section`
  position: relative;
  height: 200vh;
  background-color: ${({ bgColor }) => bgColor};
`;

const TextElement = styled.div`
  position: absolute;
  color: white;
  display: flex;
  align-items: baseline;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  width: 250px;

  &:nth-child(2) {
    top: 80px;
    left: 800px;
  }

  &:nth-child(3) {
    top: 350px;
    left: 850px;
  }

  &:nth-child(4) {
    top: 350px;
    left: 400px;
  }

  &:nth-child(5) {
    top: 600px;
    left: 100px;
  }

  &:nth-child(6) {
    top: 900px;
    left: 100px;
  }

  &:nth-child(7) {
    top: 1200px;
    left: 100px;
  }
`;



const Section = ({ bgColor, texts }) => {
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
        const dashLength = 3800 
        const filledLength = ((sectionScrollPercent) * (dashLength*0.9));
        setDasharray(`${filledLength}, ${dashLength - filledLength}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SectionContainer bgColor={bgColor} ref={sectionRef}>
      <Line dasharray={dasharray} />
      {texts.map((text, index) => (
        <TextElement key={index}>
          <div>
            <span style={{ fontSize: '32px' }}>{index + 1}</span>
            <p style={{ fontSize: index > 2 ? '24px' : '18px'}}>{text}</p>
            {index > 2 && <p>Subtitulo</p>}
          </div>
        </TextElement>
      ))}
    </SectionContainer>
  );
};

export default Section;
