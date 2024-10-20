import styled from 'styled-components';

export const StyledHeader = styled.header`

  display: flex;
  align-items: center; 
  border-bottom: 2px solid rgba(217, 217, 217, 0.44);
;
  padding: 10px; 
  height: 85px;

  h4 {
    margin-left: 80px;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    h4 {
    margin-left: 20px;
    font-weight: 500;
  }
  }
`;

//section
export const Section = styled.section`
    width: 100%;
    max-width:300px;

`

//editLink
export const EditLink = styled.span<{ iseditlink1?: boolean; iseditlink2?: boolean }>`
    cursor: pointer;
    color: blue;
    text-decoration: underline;

    &:hover {
        color: darkblue; 
    }

    ${({ iseditlink1 }) =>
      iseditlink1 &&
      `
      margin-left: 15px;
    `}

    ${({ iseditlink2 }) =>
      iseditlink2 &&
      `
      margin-left: 60px;
    `}
`;

//p 
export const P = styled.section`
    margin-top: 25px;
     margin-left: 10px;
     color: rgba(64, 77, 97, 1);

`
//Flex

export const  Flex = styled.main`
  display: flex;
  justify-content: flex-start;
  gap: 50px;
  

  @media (max-width: 800px) {
    flex-direction: row; 
    text-align: left;
    gap: 0px;
  }
`;


// Style bar
export const HorizontalBar = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
  margin-left: 80px;
  width: 33px;
  height: 155px;
  border-radius: 15px;
  background: rgba(217, 217, 217, 0.44);

  @media (max-width: 600px) {
    margin-top: 50px;
    margin-left: 25px;
  }
`;

export const StepContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 9px;
  transition: all 0.3s ease;
  margin-left: 10px;
`;


export const StepNumber = styled.div<{ $isActive?: boolean }>`
  background-color: ${({ $isActive }) => ($isActive ? 'blue' : 'white')};
  color: ${({ $isActive }) => ($isActive ? 'white' : 'black')};
  font-weight: bold;
  font-size: 14px;
  width: 27px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? '#007FFF' : '#007FFF')};
    color: ${({ $isActive }) => ($isActive ? 'white' : 'white')};
  }
`;



export const StepLabel = styled.span`
  font-size: 14px; 
  color: black; 
`;


export const StepsStyle = styled.span`
  font-size: 14px; 
  color: black; 
  margin-top: 40px;
  
  p {
    padding: 20px;
    font-size: 16px;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;


export const BarandSteps = styled.span`
  display: flex;
  align-items: flex-start;

  @media (max-width: 600px) {
  }

`;


export const Container3 = styled.div`
  max-width: 400px; 

  @media (max-width: 600px) {
    max-width: 80%;
  }
`;

//form
export const FormContainer = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 25px;
  max-width: 100%;
  margin-right: 15px;
`

// input
export const ErrorMsg = styled.div`
  color: red;
  font-size: 14px;
  position: relative;
  left: 4; 
  margin-left: 8px;
  /* padding-bottom:5px;  */
  width: 100%;


  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  border: 1px solid ${({ $hasError }) => ($hasError ? 'red' : 'rgba(225, 227, 230, 1)')};
  padding: 6px ;
  margin: 10px 5px; 
  border-radius: 5px;
  color: gray;
  flex: 1;

  &:focus {
    outline: none;
    border-color: ${({ $hasError }) => ($hasError ? 'red' : 'blue')};
  }
`;

export const Container = styled.div`
  max-width: 400px; 
`;

export const Select = styled.select<{ $hasError?: boolean }>`
  border: 1px solid ${({ $hasError }) => ($hasError ? 'red' : 'rgba(225, 227, 230, 1)')};
  padding: 6px;
  margin: 10px 5px; 
  border-radius: 5px;
  color: gray;
  /* flex: 1;  */

  &:focus {
    outline: none;
    border-color: ${({ $hasError }) => ($hasError ? 'red' : 'blue')};
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  /* gap: 20px; */
  width: 50%;
  box-sizing: border-box;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  

`;
// Button
export const Button = styled.button`
  background-color: rgba(74, 58, 255, 1);
;
  margin-top: 20px;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  margin-bottom: 50px;
  
  
  &:hover {
    background-color: darkblue;
  }

  svg {
    margin-left: 8px; 
  }
`;