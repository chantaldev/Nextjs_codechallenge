import styled from 'styled-components';

export const StyledHeader = styled.header`

  display: flex;
  align-items: center; 
  border-bottom: 2px solid rgba(217, 217, 217, 0.44);
;
  padding: 10px; 
  height: 78px;
  font-size: 14px;

  h5 {
    margin-left: 20px;
    font-weight: bold;
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
    margin-top: 15px;
     margin-left: 10px;
     color: rgba(64, 77, 97, 1);
     font-size: 13px;
     font-weight: bold;

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
  width: 23px;
  height: 97px;
  border-radius: 15px;
  background: rgba(217, 217, 217, 0.44);

  @media (max-width: 600px) {
    margin-top: 30px;
    margin-left: 25px;
  }
`;

export const StepContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
  margin-bottom: px;
  padding-top: px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 10px;
  border-bottom-left-radius: 3cap;

`;


export const StepNumber = styled.div<{ $isActive?: boolean }>`
  background-color: ${({ $isActive }) => ($isActive ? 'blue' : 'white')};
  color: ${({ $isActive }) => ($isActive ? 'white' : 'black')};
  font-weight: bold;
  font-size: 10px;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: 15px;

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

export const Container4 = styled.div`
  max-width: 400px; 
  margin-top:50px;

  @media (max-width: 600px) {
    max-width: 80%;
  }
`;

//form
export const FormContainer = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 18px;
  max-width: 100%;
  margin-right: 15px;


  .category {
    display: flex;
    align-items: center; 
    margin-bottom: 30px;
  }

  .info1 {
    color: gray; 
    margin-bottom: 20px;
     
  }

  .info2 {
    color: black;
    margin-left: 60px;
  }
  .info3 {
    margin-left: 113px;
    padding-bottom: 20px;
  }

  .info4 {
    color: black;
    margin-left: 50px;
  }


  @media (max-width: 600px) {
    max-width: 100%;

    .info2 {
    margin-left: 31px;
  }

  .info3 {
    margin-left: 94px;
    padding-bottom: 20px;
  }
  }
`

// input
export const ErrorMsg = styled.div`
  color: red;
  font-size: 10px;
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
  padding: 3px ;
  margin: 6px 5px; 
  border-radius: 5px;
  color: gray;
  flex: 1;
  height: 70px;
  font-size: 12px;


    // Cambiar el tamaño de la fuente del placeholder
    &::placeholder {
    font-size: 12px; /* Cambia esto al tamaño que desees */
    color: rgba(128, 128, 128, 0.7);
    left: 4;  /* Puedes cambiar el color si lo deseas */
  }


  &:focus {
    outline: none;
    border-color: ${({ $hasError }) => ($hasError ? 'red' : 'blue')};
  }

  @media (max-width: 600px) {
  height: 50px; // O cualquier otro valor que necesites
}
`;

export const Container = styled.div`
  max-width: 410px; 
`;

export const Select = styled.select<{ $hasError?: boolean }>`
  border: 1px solid ${({ $hasError }) => ($hasError ? 'red' : 'rgba(225, 227, 230, 1)')};
  padding: 3px;
  margin: 10px 5px; 
  border-radius: 5px;
  color: gray;
  font-size: 12px;
  /* flex: 1;  */

  label {
    font-size: 10px; /* Cambia esto al tamaño que desees */
    color: rgba(128, 128, 128, 0.7); /* Puedes cambiar el color si lo deseas */
  }

  &:focus {
    outline: none;
    border-color: ${({ $hasError }) => ($hasError ? 'red' : 'blue')};
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  gap: 0px;
  width: 100%;
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
  height: 25px;
  font-size: 13;
  
  
  &:hover {
    background-color: darkblue;
  }

  svg {
    margin-left: 8px; 
  }
`;