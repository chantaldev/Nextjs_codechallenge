import React, { forwardRef } from 'react';
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

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(({
  options,
  id,
  value,
  onChange,
  hasError,
  title,
  errorMsg,
}, ref) => {
  return (
    <>
      <Select
        id={id}
        value={value}
        onChange={onChange} 
        $hasError={!!hasError} 
        aria-required="true"
        ref={ref}
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
});

FormSelect.displayName = 'FormSelect';

export default FormSelect;
