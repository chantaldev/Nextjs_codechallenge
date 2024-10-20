
import React from 'react';
import styled from 'styled-components';

const ConfirmationContainer = styled.div<{ $success: boolean }>`
  background-color: ${({ $success }) => ($success ? ' rgba(2, 205, 2, 0.322)' : 'rgba(255, 139, 139, 0.345)')}; // Cambia 'success' a '$success'
  color: ${({ $success }) => ($success ? 'green' : 'red')};
  border-color: ${({ $success }) => ($success ? 'green' : 'red')};
  margin-top: 30px;
  padding: 20px;
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
