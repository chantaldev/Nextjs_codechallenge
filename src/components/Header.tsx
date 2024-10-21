"use client";

import React from 'react';
import { StyledHeader } from './styles_components';
import StatusText from './Status';
import { useFormStore } from '../context/formContext';

export default function Nav() {
  const { status } = useFormStore(); 

  return (
    <StyledHeader>
          <h4>New Company</h4>
          {status.text && <StatusText text={status.text} variant={status.variant} />}
    </StyledHeader>
  );
}