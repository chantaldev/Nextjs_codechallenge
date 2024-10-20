"use client";

import React from 'react';
import { StyledHeader, Flex } from './styles_components';
import StatusText from './Status';
import { useFormContext } from '../context/formContext';

export default function Nav() {
  // Si estás usando el contexto, descomenta la línea siguiente
  const { status } = useFormContext(); 

  return (
    <StyledHeader>
          <h4>New Company</h4>
          {status.text && <StatusText text={status.text} variant={status.variant} />}
    </StyledHeader>
  );
}
