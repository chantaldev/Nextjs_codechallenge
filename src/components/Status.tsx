import React from 'react';
import styled from 'styled-components';

const StatusContainer = styled.div`
  padding: 7px 7px;
  border-radius: 4px;
  font-size: 14px;
  margin: 10px 30px 10px; 
  background: rgba(128, 128, 128, 0.08);
;
  
  &.yellow {
    color: rgba(255, 165, 0, 1);
  }

  &.green {
   color: #4CAF50; 
  }

  &.red {
    color: #F44336; 
  }
`;

interface StatusTextProps {
  text: string;   
  variant: 'yellow' | 'green' | 'red'; 
}


const StatusText: React.FC<StatusTextProps> = ({ text, variant }) => {
  return <StatusContainer className={variant}>{text}</StatusContainer>;
};

export default StatusText;
