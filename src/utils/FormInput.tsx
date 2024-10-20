import React from 'react';
import { Input, ErrorMsg, Container3 } from '../components/styles_components';
import { MdWarning } from 'react-icons/md'; 

interface FormInputProps {
  placeholder: string;
  label?: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  errorMsg?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  type,
  id,
  label,
  value,
  onChange,
  hasError,
  errorMsg,
}) => {
  return (
    <>
      <Input
        placeholder={placeholder}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        $hasError={!!hasError}
      />
      {errorMsg && type === 'email' && ( 
        <Container3 style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
          <MdWarning style={{ marginRight: '7px', marginBottom: '15px', color: 'red' }} />
          <ErrorMsg>{errorMsg}</ErrorMsg>
        </Container3>
      )}
      {errorMsg && type !== 'email' && (
        <ErrorMsg>{errorMsg}</ErrorMsg>
      )}
    </>
  );
};

export default FormInput;
