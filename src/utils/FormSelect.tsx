import React from 'react';
import { Select, ErrorMsg, Container } from '../components/styles_components';

interface FormSelectProps {
  options: Array<{ value: string; label: string }>;
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  hasError?: boolean;
  errorMsg?: string;
  title: string; 
}

const FormSelect: React.FC<FormSelectProps> = ({
  options,
  id,
  value,
  onChange,
  hasError,
  title,
  errorMsg,
}) => {
  return (
    <>
      
      <Select
        $options={options}
        id={id}
        value={value}
        onChange={onChange} 
        $hasError={!!hasError}
        aria-required="true"
      >
        <option value="">{title}</option>
         {options.map((option, index) => (
          <option key={`${option.value}-${index}`} value={option.value}>
            {option.label}
          </option>
        ))} 
      </Select>
      {hasError && (
        <Container>
          <ErrorMsg>{errorMsg}</ErrorMsg>
        </Container>
      )}
       </>
  );
};

export default FormSelect;
