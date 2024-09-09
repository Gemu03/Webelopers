// Section.js
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Line from './line';
import Egg from './egg';

const SectionContainer = styled.section`
  position: relative;
  height: 220vh;
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
  width: 300px;
  text-align: left;

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
    left: 150px;
  }

  &:nth-child(5) {
    top: 650px;
    left: 200px;
  }

  &:nth-child(6) {
    top: 1000px;
    left: 200px;
  }

  &:nth-child(7) {
    top: 1350px;
    left: 200px;
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
            <Egg key={index} text={"<"+(index+1)+">"} top={"50%"} left={"50%"} color={"white"} fontSize={"30px"}/>
            {index > 2 && <div style={{transform: "translate(5%,65%)", width:"400px", height:"200px"}}>
              <h2 style={{fontSize: "24px"}}>{text}</h2>
              <p style={{fontSize:"18px"}}>Subtitulo</p>
              <p>Descripcion de seccion</p>
            </div>}
            {index <= 2 && <div style={{transform: "translate(45%,10%)"}}>
              <p style={{fontSize:"18px"}}>{text}</p>
            </div>}
          </div>
        </TextElement>
      ))}
    </SectionContainer>
  );
};

export default Section;
