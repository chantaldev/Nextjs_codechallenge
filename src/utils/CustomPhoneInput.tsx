import React, { forwardRef, LegacyRef } from 'react';
import { PhoneInput, PhoneInputRefType } from 'react-international-phone';

type CustomPhoneInputProps = {
  placeholder?: string;
  id: string;
  value: string;
  defaultCountry: string;
  onChange: (value: string) => Promise<void>;
  inputStyle?: React.CSSProperties;
};


const CustomPhoneInput = forwardRef<HTMLInputElement, CustomPhoneInputProps>(
  (props, ref) => {
    return <PhoneInput {...props} ref={ref as LegacyRef<PhoneInputRefType> | undefined} />;
  }
);

CustomPhoneInput.displayName = 'CustomPhoneInput';

export default CustomPhoneInput;