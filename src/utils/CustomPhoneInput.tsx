import React, { forwardRef, LegacyRef } from 'react';
import { PhoneInput, PhoneInputRefType } from 'react-international-phone';

type CustomPhoneInputProps = {
  placeholder?: string;
  id: string;
  value: string;
  defaultCountry: string;
  onChange: (value: string) => Promise<void>;
  inputStyle?: React.CSSProperties;
  countrySelectorStyleProps?: {
    buttonStyle?: React.CSSProperties;
    flagStyle?: React.CSSProperties;
  };
};

const CustomPhoneInput = forwardRef<HTMLInputElement, CustomPhoneInputProps>(
  (props, ref) => {
    const { countrySelectorStyleProps, ...restProps } = props;

    return (
      <PhoneInput
        {...restProps}
        countrySelectorStyleProps={{
          buttonStyle: {
            height: 22,
            ...countrySelectorStyleProps?.buttonStyle, 
          },
          flagStyle: {
            height: 18,
            marginRight: '5px',
            display: 'inline-block',
            ...countrySelectorStyleProps?.flagStyle, 
          },
        }}
        ref={ref as LegacyRef<PhoneInputRefType> | undefined}
      />
    );
  }
);

CustomPhoneInput.displayName = 'CustomPhoneInput';

export default CustomPhoneInput;
