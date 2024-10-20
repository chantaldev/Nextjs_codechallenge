import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p<{ color?: string; fontSize?: string }>`
  color: ${({ color }) => color || 'black'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  padding-top: 20px; 
  margin-left: 10px; 
`;

interface StyledParagraphProps {
  text: string; 
  color?: string; 
  fontSize?: string; 
}

const StyledParagraph: React.FC<StyledParagraphProps> = ({ text, color, fontSize }) => {
  return (
    <StyledP color={color} fontSize={fontSize}>
      {text}
    </StyledP>
  );
};

export default StyledParagraph;
