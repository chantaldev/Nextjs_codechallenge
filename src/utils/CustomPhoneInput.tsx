import React, { forwardRef } from 'react';
import { PhoneInput } from 'react-international-phone';

const CustomPhoneInput = forwardRef((props, ref) => {
  return <PhoneInput {...props} inputRef={ref} />;
});

CustomPhoneInput.displayName = 'CustomPhoneInput';

export default CustomPhoneInput;
