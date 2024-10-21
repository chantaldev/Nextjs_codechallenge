
import React from 'react';
import styled from 'styled-components';

const ConfirmationContainer = styled.div<{ $success: boolean }>`
  background-color: ${({ $success }) => ($success ? ' rgba(0, 128, 0, 0.08)' : 'rgba(239, 68, 68, 0.08)')};
  color: ${({ $success }) => ($success ? 'green' : 'red')};
  border: 1px solid ${({ $success }) => ($success ? 'green' : 'red')}; 
  margin-top: ${({ $success }) => ($success ? '10px' : '-5px')}; 
  padding: 10px;
  margin-top: 10px;
  font-size: 13px;
  border-radius: 5px;
  position: relative;
  width: 100%;
`;


interface ShowConfirmationProps {
  success: boolean;
  message: string;
}

const ShowConfirmation: React.FC<ShowConfirmationProps> = ({ success, message }) => {
  return (
    <ConfirmationContainer $success={success}> 
      <p>{message}</p>
    </ConfirmationContainer>
  );
};

export default ShowConfirmation;
