"use client";

import React from 'react';
import { StyledHeader } from './styles_components';
import StatusText from './Status';
import { useFormContext } from '../context/formContext';

export default function Nav() {
  const { status } = useFormContext(); 

  return (
    <StyledHeader>
          <h5>New Company</h5>
          {status.text && <StatusText text={status.text} variant={status.variant} />}
    </StyledHeader>
  );
}
